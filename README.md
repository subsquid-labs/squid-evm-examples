# EVM / Ethereum indexer examples (Squid SDK)

This repo contains sample [squid ETLs](https://docs.sqd.dev/en/sdk/overview) for indexing, transforming and presenting EVM onchain data as GraphQL APIs. Each squid highlights a specific feature of the Squid SDK.

## Documentation

- Docs: https://docs.sqd.dev
- Website: https://sqd.dev

## Overview

- [1-evm-logs](https://github.com/belopash/evm-logs-example): Index ERC20 transfers by extracting `Transfer(address,address,uint256)` event logs emitted by a given contract.
- [2-transaction](https://github.com/subsquid-labs/evm-transactions-example/): Index transactions data.
- [3-factory](https://github.com/belopash/factory-example): Index token swaps within dynamically created pools. Illustrates network-wide filtering of EVM logs.
- [4-contract-calls](https://github.com/belopash/contract-example): Enrich the model data by querying historical state of the contract.
- [5-multicall](https://github.com/belopash/multicall-example): Same as the contract example but with state requests batching.
- [6-ipfs](https://github.com/subsquid-labs/ipfs-example) A BAYC NFT indexer. Illustrates batched IPFS gateway calls, external API calls, and contract state queries. Alternative implementation of the [BAYC indexer](https://github.com/subsquid-labs/bayc-squid-1) described in the [tutorial](https://docs.sqd.dev/en/sdk).
- [7-multichain](https://github.com/subsquid-labs/multichain-transfers-example) A simple multichain squid indexing Transfer events emitted by USDC contracts on Ethereum and BSC.

## Prerequisites

- Node.js 20 or newer
- Docker
- Squid CLI

To install the Squid CLI, run 

```
npm i -g @subsquid/cli
```

## Running 

Navigate to the example folder.

```bash
npm ci
sqd build
# start the database
sqd up
# starts a long-running ETL and blocks the terminal
sqd process

# starts the GraphQL API server at localhost:4350/graphql
sqd serve
```
