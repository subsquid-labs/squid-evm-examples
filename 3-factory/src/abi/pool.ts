import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Burn0Event = ([owner: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {owner: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber})

export type Collect0Event = ([owner: string, recipient: string, tickLower: number, tickUpper: number, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {owner: string, recipient: string, tickLower: number, tickUpper: number, amount0: ethers.BigNumber, amount1: ethers.BigNumber})

export type CollectProtocol0Event = ([sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber})

export type Flash0Event = ([sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, paid0: ethers.BigNumber, paid1: ethers.BigNumber] & {sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, paid0: ethers.BigNumber, paid1: ethers.BigNumber})

export type IncreaseObservationCardinalityNext0Event = ([observationCardinalityNextOld: number, observationCardinalityNextNew: number] & {observationCardinalityNextOld: number, observationCardinalityNextNew: number})

export type Initialize0Event = ([sqrtPriceX96: ethers.BigNumber, tick: number] & {sqrtPriceX96: ethers.BigNumber, tick: number})

export type Mint0Event = ([sender: string, owner: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber] & {sender: string, owner: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, amount0: ethers.BigNumber, amount1: ethers.BigNumber})

export type SetFeeProtocol0Event = ([feeProtocol0Old: number, feeProtocol1Old: number, feeProtocol0New: number, feeProtocol1New: number] & {feeProtocol0Old: number, feeProtocol1Old: number, feeProtocol0New: number, feeProtocol1New: number})

export type Swap0Event = ([sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, sqrtPriceX96: ethers.BigNumber, liquidity: ethers.BigNumber, tick: number] & {sender: string, recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, sqrtPriceX96: ethers.BigNumber, liquidity: ethers.BigNumber, tick: number})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "Burn(address,int24,int24,uint128,uint256,uint256)": {
    topic: abi.getEventTopic("Burn(address,int24,int24,uint128,uint256,uint256)"),
    decode(data: EvmLog): Burn0Event {
      return decodeEvent("Burn(address,int24,int24,uint128,uint256,uint256)", data)
    }
  }
  ,
  "Collect(address,address,int24,int24,uint128,uint128)": {
    topic: abi.getEventTopic("Collect(address,address,int24,int24,uint128,uint128)"),
    decode(data: EvmLog): Collect0Event {
      return decodeEvent("Collect(address,address,int24,int24,uint128,uint128)", data)
    }
  }
  ,
  "CollectProtocol(address,address,uint128,uint128)": {
    topic: abi.getEventTopic("CollectProtocol(address,address,uint128,uint128)"),
    decode(data: EvmLog): CollectProtocol0Event {
      return decodeEvent("CollectProtocol(address,address,uint128,uint128)", data)
    }
  }
  ,
  "Flash(address,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("Flash(address,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): Flash0Event {
      return decodeEvent("Flash(address,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "IncreaseObservationCardinalityNext(uint16,uint16)": {
    topic: abi.getEventTopic("IncreaseObservationCardinalityNext(uint16,uint16)"),
    decode(data: EvmLog): IncreaseObservationCardinalityNext0Event {
      return decodeEvent("IncreaseObservationCardinalityNext(uint16,uint16)", data)
    }
  }
  ,
  "Initialize(uint160,int24)": {
    topic: abi.getEventTopic("Initialize(uint160,int24)"),
    decode(data: EvmLog): Initialize0Event {
      return decodeEvent("Initialize(uint160,int24)", data)
    }
  }
  ,
  "Mint(address,address,int24,int24,uint128,uint256,uint256)": {
    topic: abi.getEventTopic("Mint(address,address,int24,int24,uint128,uint256,uint256)"),
    decode(data: EvmLog): Mint0Event {
      return decodeEvent("Mint(address,address,int24,int24,uint128,uint256,uint256)", data)
    }
  }
  ,
  "SetFeeProtocol(uint8,uint8,uint8,uint8)": {
    topic: abi.getEventTopic("SetFeeProtocol(uint8,uint8,uint8,uint8)"),
    decode(data: EvmLog): SetFeeProtocol0Event {
      return decodeEvent("SetFeeProtocol(uint8,uint8,uint8,uint8)", data)
    }
  }
  ,
  "Swap(address,address,int256,int256,uint160,uint128,int24)": {
    topic: abi.getEventTopic("Swap(address,address,int256,int256,uint160,uint128,int24)"),
    decode(data: EvmLog): Swap0Event {
      return decodeEvent("Swap(address,address,int256,int256,uint160,uint128,int24)", data)
    }
  }
  ,
}

export type Burn0Function = ([tickLower: number, tickUpper: number, amount: ethers.BigNumber] & {tickLower: number, tickUpper: number, amount: ethers.BigNumber})

export type Collect0Function = ([recipient: string, tickLower: number, tickUpper: number, amount0Requested: ethers.BigNumber, amount1Requested: ethers.BigNumber] & {recipient: string, tickLower: number, tickUpper: number, amount0Requested: ethers.BigNumber, amount1Requested: ethers.BigNumber})

export type CollectProtocol0Function = ([recipient: string, amount0Requested: ethers.BigNumber, amount1Requested: ethers.BigNumber] & {recipient: string, amount0Requested: ethers.BigNumber, amount1Requested: ethers.BigNumber})

export type Flash0Function = ([recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, data: string] & {recipient: string, amount0: ethers.BigNumber, amount1: ethers.BigNumber, data: string})

export type IncreaseObservationCardinalityNext0Function = ([observationCardinalityNext: number] & {observationCardinalityNext: number})

export type Initialize0Function = ([sqrtPriceX96: ethers.BigNumber] & {sqrtPriceX96: ethers.BigNumber})

export type Mint0Function = ([recipient: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, data: string] & {recipient: string, tickLower: number, tickUpper: number, amount: ethers.BigNumber, data: string})

export type SetFeeProtocol0Function = ([feeProtocol0: number, feeProtocol1: number] & {feeProtocol0: number, feeProtocol1: number})

export type Swap0Function = ([recipient: string, zeroForOne: boolean, amountSpecified: ethers.BigNumber, sqrtPriceLimitX96: ethers.BigNumber, data: string] & {recipient: string, zeroForOne: boolean, amountSpecified: ethers.BigNumber, sqrtPriceLimitX96: ethers.BigNumber, data: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "burn(int24,int24,uint128)": {
    sighash: abi.getSighash("burn(int24,int24,uint128)"),
    decode(input: string): Burn0Function {
      return decodeFunction(input)
    }
  }
  ,
  "collect(address,int24,int24,uint128,uint128)": {
    sighash: abi.getSighash("collect(address,int24,int24,uint128,uint128)"),
    decode(input: string): Collect0Function {
      return decodeFunction(input)
    }
  }
  ,
  "collectProtocol(address,uint128,uint128)": {
    sighash: abi.getSighash("collectProtocol(address,uint128,uint128)"),
    decode(input: string): CollectProtocol0Function {
      return decodeFunction(input)
    }
  }
  ,
  "flash(address,uint256,uint256,bytes)": {
    sighash: abi.getSighash("flash(address,uint256,uint256,bytes)"),
    decode(input: string): Flash0Function {
      return decodeFunction(input)
    }
  }
  ,
  "increaseObservationCardinalityNext(uint16)": {
    sighash: abi.getSighash("increaseObservationCardinalityNext(uint16)"),
    decode(input: string): IncreaseObservationCardinalityNext0Function {
      return decodeFunction(input)
    }
  }
  ,
  "initialize(uint160)": {
    sighash: abi.getSighash("initialize(uint160)"),
    decode(input: string): Initialize0Function {
      return decodeFunction(input)
    }
  }
  ,
  "mint(address,int24,int24,uint128,bytes)": {
    sighash: abi.getSighash("mint(address,int24,int24,uint128,bytes)"),
    decode(input: string): Mint0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setFeeProtocol(uint8,uint8)": {
    sighash: abi.getSighash("setFeeProtocol(uint8,uint8)"),
    decode(input: string): SetFeeProtocol0Function {
      return decodeFunction(input)
    }
  }
  ,
  "swap(address,bool,int256,uint160,bytes)": {
    sighash: abi.getSighash("swap(address,bool,int256,uint160,bytes)"),
    decode(input: string): Swap0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async factory(): Promise<string> {
    return this.call("factory", [])
  }

  async fee(): Promise<number> {
    return this.call("fee", [])
  }

  async feeGrowthGlobal0X128(): Promise<ethers.BigNumber> {
    return this.call("feeGrowthGlobal0X128", [])
  }

  async feeGrowthGlobal1X128(): Promise<ethers.BigNumber> {
    return this.call("feeGrowthGlobal1X128", [])
  }

  async liquidity(): Promise<ethers.BigNumber> {
    return this.call("liquidity", [])
  }

  async maxLiquidityPerTick(): Promise<ethers.BigNumber> {
    return this.call("maxLiquidityPerTick", [])
  }

  async observations(index: ethers.BigNumber): Promise<([blockTimestamp: number, tickCumulative: ethers.BigNumber, secondsPerLiquidityCumulativeX128: ethers.BigNumber, initialized: boolean] & {blockTimestamp: number, tickCumulative: ethers.BigNumber, secondsPerLiquidityCumulativeX128: ethers.BigNumber, initialized: boolean})> {
    return this.call("observations", [index])
  }

  async observe(secondsAgos: Array<number>): Promise<([tickCumulatives: Array<ethers.BigNumber>, secondsPerLiquidityCumulativeX128s: Array<ethers.BigNumber>] & {tickCumulatives: Array<ethers.BigNumber>, secondsPerLiquidityCumulativeX128s: Array<ethers.BigNumber>})> {
    return this.call("observe", [secondsAgos])
  }

  async positions(key: string): Promise<([_liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber] & {_liquidity: ethers.BigNumber, feeGrowthInside0LastX128: ethers.BigNumber, feeGrowthInside1LastX128: ethers.BigNumber, tokensOwed0: ethers.BigNumber, tokensOwed1: ethers.BigNumber})> {
    return this.call("positions", [key])
  }

  async protocolFees(): Promise<([token0: ethers.BigNumber, token1: ethers.BigNumber] & {token0: ethers.BigNumber, token1: ethers.BigNumber})> {
    return this.call("protocolFees", [])
  }

  async slot0(): Promise<([sqrtPriceX96: ethers.BigNumber, tick: number, observationIndex: number, observationCardinality: number, observationCardinalityNext: number, feeProtocol: number, unlocked: boolean] & {sqrtPriceX96: ethers.BigNumber, tick: number, observationIndex: number, observationCardinality: number, observationCardinalityNext: number, feeProtocol: number, unlocked: boolean})> {
    return this.call("slot0", [])
  }

  async snapshotCumulativesInside(tickLower: number, tickUpper: number): Promise<([tickCumulativeInside: ethers.BigNumber, secondsPerLiquidityInsideX128: ethers.BigNumber, secondsInside: number] & {tickCumulativeInside: ethers.BigNumber, secondsPerLiquidityInsideX128: ethers.BigNumber, secondsInside: number})> {
    return this.call("snapshotCumulativesInside", [tickLower, tickUpper])
  }

  async tickBitmap(wordPosition: number): Promise<ethers.BigNumber> {
    return this.call("tickBitmap", [wordPosition])
  }

  async tickSpacing(): Promise<number> {
    return this.call("tickSpacing", [])
  }

  async ticks(tick: number): Promise<([liquidityGross: ethers.BigNumber, liquidityNet: ethers.BigNumber, feeGrowthOutside0X128: ethers.BigNumber, feeGrowthOutside1X128: ethers.BigNumber, tickCumulativeOutside: ethers.BigNumber, secondsPerLiquidityOutsideX128: ethers.BigNumber, secondsOutside: number, initialized: boolean] & {liquidityGross: ethers.BigNumber, liquidityNet: ethers.BigNumber, feeGrowthOutside0X128: ethers.BigNumber, feeGrowthOutside1X128: ethers.BigNumber, tickCumulativeOutside: ethers.BigNumber, secondsPerLiquidityOutsideX128: ethers.BigNumber, secondsOutside: number, initialized: boolean})> {
    return this.call("ticks", [tick])
  }

  async token0(): Promise<string> {
    return this.call("token0", [])
  }

  async token1(): Promise<string> {
    return this.call("token1", [])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "name": "Collect",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "name": "CollectProtocol",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "paid1",
          "type": "uint256"
        }
      ],
      "name": "Flash",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "observationCardinalityNextOld",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "observationCardinalityNextNew",
          "type": "uint16"
        }
      ],
      "name": "IncreaseObservationCardinalityNext",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol0Old",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol1Old",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol0New",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "feeProtocol1New",
          "type": "uint8"
        }
      ],
      "name": "SetFeeProtocol",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "liquidity",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount0Requested",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Requested",
          "type": "uint128"
        }
      ],
      "name": "collect",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "amount0Requested",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Requested",
          "type": "uint128"
        }
      ],
      "name": "collectProtocol",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "amount0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint24",
          "name": "",
          "type": "uint24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeGrowthGlobal0X128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeGrowthGlobal1X128",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "flash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "observationCardinalityNext",
          "type": "uint16"
        }
      ],
      "name": "increaseObservationCardinalityNext",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "liquidity",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxLiquidityPerTick",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        },
        {
          "internalType": "uint128",
          "name": "amount",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount0",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "observations",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "blockTimestamp",
          "type": "uint32"
        },
        {
          "internalType": "int56",
          "name": "tickCumulative",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityCumulativeX128",
          "type": "uint160"
        },
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32[]",
          "name": "secondsAgos",
          "type": "uint32[]"
        }
      ],
      "name": "observe",
      "outputs": [
        {
          "internalType": "int56[]",
          "name": "tickCumulatives",
          "type": "int56[]"
        },
        {
          "internalType": "uint160[]",
          "name": "secondsPerLiquidityCumulativeX128s",
          "type": "uint160[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "_liquidity",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthInside0LastX128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthInside1LastX128",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "tokensOwed0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "tokensOwed1",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "protocolFees",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "token0",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "token1",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "feeProtocol0",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "feeProtocol1",
          "type": "uint8"
        }
      ],
      "name": "setFeeProtocol",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "slot0",
      "outputs": [
        {
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        },
        {
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        },
        {
          "internalType": "uint16",
          "name": "observationIndex",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationCardinality",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "observationCardinalityNext",
          "type": "uint16"
        },
        {
          "internalType": "uint8",
          "name": "feeProtocol",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "unlocked",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
        }
      ],
      "name": "snapshotCumulativesInside",
      "outputs": [
        {
          "internalType": "int56",
          "name": "tickCumulativeInside",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityInsideX128",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "secondsInside",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "zeroForOne",
          "type": "bool"
        },
        {
          "internalType": "int256",
          "name": "amountSpecified",
          "type": "int256"
        },
        {
          "internalType": "uint160",
          "name": "sqrtPriceLimitX96",
          "type": "uint160"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "swap",
      "outputs": [
        {
          "internalType": "int256",
          "name": "amount0",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "amount1",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int16",
          "name": "wordPosition",
          "type": "int16"
        }
      ],
      "name": "tickBitmap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tickSpacing",
      "outputs": [
        {
          "internalType": "int24",
          "name": "",
          "type": "int24"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int24",
          "name": "tick",
          "type": "int24"
        }
      ],
      "name": "ticks",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "liquidityGross",
          "type": "uint128"
        },
        {
          "internalType": "int128",
          "name": "liquidityNet",
          "type": "int128"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthOutside0X128",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "feeGrowthOutside1X128",
          "type": "uint256"
        },
        {
          "internalType": "int56",
          "name": "tickCumulativeOutside",
          "type": "int56"
        },
        {
          "internalType": "uint160",
          "name": "secondsPerLiquidityOutsideX128",
          "type": "uint160"
        },
        {
          "internalType": "uint32",
          "name": "secondsOutside",
          "type": "uint32"
        },
        {
          "internalType": "bool",
          "name": "initialized",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
