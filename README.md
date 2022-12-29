# EVM indexing squids

This repo contains sample [squid ETLs](https://docs.subsquid.io/overview/) for indexing, transforming and presenting EVM on-chain data as GraphQL API. Each squid highlights a separate feature of the Squid SDK. All the squids (except for [4-contract](https://github.com/belopash/contract-example) and [5-multicall](https://github.com/belopash/multicall-example)) fetch the raw on-chain data from the Ethereum Archive and can be run locally without the need to set up a connection to an archive Ethereum node endpoint.

## Overview

- [1-evm-logs](https://github.com/belopash/evm-logs-example): Index transfers by extracting `Transfer(address,address,uint256)` logs emitted by a given contract
- [2-transaction](): Index transaction data. TBD
- [3-factory](https://github.com/belopash/factory-example): Index token swaps from dynamically created pools. Illustrates global EVM log filtering.
- [4-contract](https://github.com/belopash/contract-example): Enrich the model data by querying the historical state of the contract.
- [5-multicall](https://github.com/belopash/multicall-example): Same as contract example but with contract state requests batching.

## Prerequisites

- Node v16.x
- Docker
- GNU Make

## Running 

Navigate to the example folder.

```bash
npm ci
npm run build
# start the database
make up
# starts a long-running ETL and blocks the terminal
make process

# starts the GraphQL API server at localhost:4350/graphql
make serve
```
