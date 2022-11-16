import {
    assertNotNull,
    BatchHandlerContext,
    BatchProcessorItem,
    EvmBatchProcessor,
    EvmBlock,
} from '@subsquid/evm-processor'
import {LogItem} from '@subsquid/evm-processor/lib/interfaces/dataSelection'
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
import {In} from 'typeorm'
import {Pool, Swap} from './model'

import * as factoryAbi from './abi/factory'
import * as poolAbi from './abi/pool'

export const FACTORY_ADDRESS = '0x1f98431c8ad98523631ae4a59f267346ea31f984'

let processor = new EvmBatchProcessor()
    .setDataSource({
        archive: 'https://eth.archive.subsquid.io',
    })
    .setBlockRange({
        from: 12_369_621,
    })
    .addLog(FACTORY_ADDRESS, {
        filter: [[factoryAbi.events['PoolCreated(address,address,uint24,int24,address)'].topic]],
        data: {
            evmLog: {
                topics: true,
                data: true,
            },
        } as const,
    })
    .addLog([], {
        filter: [[poolAbi.events['Swap(address,address,int256,int256,uint160,uint128,int24)'].topic]],
        data: {
            evmLog: {
                topics: true,
                data: true,
            },
            transaction: {
                hash: true,
            },
        } as const,
    })

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchHandlerContext<Store, Item>

processor.run(new TypeormDatabase(), async (ctx) => {
    if (!factoryPools) factoryPools = await ctx.store.findBy(Pool, {}).then((q) => new Set(q.map((i) => i.id)))

    let poolCreationsData: PoolCreationData[] = []
    let swapsData: SwapData[] = []

    for (let block of ctx.blocks) {
        for (let item of block.items) {
            if (item.kind !== 'evmLog') continue

            if (item.address === FACTORY_ADDRESS) {
                poolCreationsData.push(handlePoolCreation(ctx, item))
            } else if (factoryPools.has(item.address)) {
                swapsData.push(handleSwap(ctx, block.header, item))
            }
        }
    }

    await savePools(ctx, poolCreationsData)
    await saveSwaps(ctx, swapsData)
})

let factoryPools: Set<string>

async function savePools(ctx: Ctx, poolsData: PoolCreationData[]) {
    let pools: Pool[] = []

    for (let p of poolsData) {
        let pool = new Pool(p)
        pools.push(pool)
        factoryPools.add(pool.id)
    }

    await ctx.store.insert(pools)
}

async function saveSwaps(ctx: Ctx, swapsData: SwapData[]) {
    let poolIds = new Set<string>()
    for (let t of swapsData) {
        poolIds.add(t.pool)
    }

    let pools = await ctx.store.findBy(Pool, {id: In([...poolIds])}).then((q) => new Map(q.map((i) => [i.id, i])))

    let swaps: Swap[] = []

    for (let s of swapsData) {
        let {id, blockNumber, timestamp, txHash, amount0, amount1, sender, recipient} = s

        let pool = assertNotNull(pools.get(s.pool))

        swaps.push(
            new Swap({
                id,
                blockNumber,
                timestamp,
                txHash,
                amount0,
                amount1,
                sender,
                recipient,
            })
        )
    }

    await ctx.store.insert(swaps)
}

interface PoolCreationData {
    id: string
    token0: string
    token1: string
}

function handlePoolCreation(ctx: Ctx, item: LogItem<{evmLog: {topics: true; data: true}}>): PoolCreationData {
    let event = factoryAbi.events['PoolCreated(address,address,uint24,int24,address)'].decode(item.evmLog)
    return {
        id: event.pool.toLowerCase(),
        token0: event.token0.toLowerCase(),
        token1: event.token1.toLowerCase(),
    }
}

interface SwapData {
    id: string
    pool: string
    blockNumber: number
    timestamp: Date
    txHash: string
    amount0: bigint
    amount1: bigint
    recipient: string
    sender: string
}

function handleSwap(
    ctx: Ctx,
    block: EvmBlock,
    item: LogItem<{evmLog: {topics: true; data: true}; transaction: {hash: true}}>
): SwapData {
    let event = poolAbi.events['Swap(address,address,int256,int256,uint160,uint128,int24)'].decode(item.evmLog)
    return {
        id: item.evmLog.id,
        pool: item.evmLog.address,
        blockNumber: block.height,
        timestamp: new Date(block.timestamp),
        txHash: item.transaction.hash,
        amount0: event.amount0.toBigInt(),
        amount1: event.amount1.toBigInt(),
        recipient: event.recipient.toLowerCase(),
        sender: event.sender.toLowerCase(),
    }
}
