import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type FeeAmountEnabled0Event = ([fee: number, tickSpacing: number] & {fee: number, tickSpacing: number})

export type OwnerChanged0Event = ([oldOwner: string, newOwner: string] & {oldOwner: string, newOwner: string})

export type PoolCreated0Event = ([token0: string, token1: string, fee: number, tickSpacing: number, pool: string] & {token0: string, token1: string, fee: number, tickSpacing: number, pool: string})

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
  "FeeAmountEnabled(uint24,int24)": {
    topic: abi.getEventTopic("FeeAmountEnabled(uint24,int24)"),
    decode(data: EvmLog): FeeAmountEnabled0Event {
      return decodeEvent("FeeAmountEnabled(uint24,int24)", data)
    }
  }
  ,
  "OwnerChanged(address,address)": {
    topic: abi.getEventTopic("OwnerChanged(address,address)"),
    decode(data: EvmLog): OwnerChanged0Event {
      return decodeEvent("OwnerChanged(address,address)", data)
    }
  }
  ,
  "PoolCreated(address,address,uint24,int24,address)": {
    topic: abi.getEventTopic("PoolCreated(address,address,uint24,int24,address)"),
    decode(data: EvmLog): PoolCreated0Event {
      return decodeEvent("PoolCreated(address,address,uint24,int24,address)", data)
    }
  }
  ,
}

export type CreatePool0Function = ([tokenA: string, tokenB: string, fee: number] & {tokenA: string, tokenB: string, fee: number})

export type EnableFeeAmount0Function = ([fee: number, tickSpacing: number] & {fee: number, tickSpacing: number})

export type SetOwner0Function = ([_owner: string] & {_owner: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "createPool(address,address,uint24)": {
    sighash: abi.getSighash("createPool(address,address,uint24)"),
    decode(input: string): CreatePool0Function {
      return decodeFunction(input)
    }
  }
  ,
  "enableFeeAmount(uint24,int24)": {
    sighash: abi.getSighash("enableFeeAmount(uint24,int24)"),
    decode(input: string): EnableFeeAmount0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setOwner(address)": {
    sighash: abi.getSighash("setOwner(address)"),
    decode(input: string): SetOwner0Function {
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

  async feeAmountTickSpacing(fee: number): Promise<number> {
    return this.call("feeAmountTickSpacing", [fee])
  }

  async getPool(tokenA: string, tokenB: string, fee: number): Promise<string> {
    return this.call("getPool", [tokenA, tokenB, fee])
  }

  async owner(): Promise<string> {
    return this.call("owner", [])
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "indexed": true,
          "internalType": "int24",
          "name": "tickSpacing",
          "type": "int24"
        }
      ],
      "name": "FeeAmountEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token0",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token1",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "indexed": false,
          "internalType": "int24",
          "name": "tickSpacing",
          "type": "int24"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "name": "PoolCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        }
      ],
      "name": "createPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "internalType": "int24",
          "name": "tickSpacing",
          "type": "int24"
        }
      ],
      "name": "enableFeeAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        }
      ],
      "name": "feeAmountTickSpacing",
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
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        }
      ],
      "name": "getPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
