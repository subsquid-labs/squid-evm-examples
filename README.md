# EVM indexing squids

This repo contains sample [squid ETLs](https://docs.subsquid.io/overview/) for indexing, transforming and presenting EVM on-chain data as GraphQL API. Each squid highlights a separate feature of the Squid SDK. All the squids (except for [4-contract-calls](https://github.com/belopash/contract-example) and [5-multicall](https://github.com/belopash/multicall-example)) fetch the raw on-chain data from the Ethereum Archive and can be run locally without the need to set up a connection to an archive Ethereum node endpoint.

## Overview

- [1-evm-logs](https://github.com/belopash/evm-logs-example): Index transfers by extracting `Transfer(address,address,uint256)` logs emitted by a given contract
- [2-transaction](https://github.com/subsquid-labs/transactions-example): Index transaction data. Mine transaction to and from `vitalik.eth`
- [3-factory](https://github.com/belopash/factory-example): Index token swaps from dynamically created pools. Illustrates global EVM log filtering.
- [4-contract-calls](https://github.com/belopash/contract-example): Enrich the model data by querying the historical state of the contract.
- [5-multicall](https://github.com/belopash/multicall-example): Same as contract example but with contract-calls state requests batching.
- [6-ipfs](https://github.com/subsquid-labs/ipfs-example) A BAYC NFT indexer. Illustrates batched IPFS gateway calls, external API calls, and contract state queries.

## Prerequisites

- Node v16.x
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
