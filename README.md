# Ethereum indexing squids

This repo contains sample [squid ETLs](https://docs.subsquid.io/overview/) for indexing, transforming and presenting Ethereum data as GraphQL API. Each squid highlights a separate feature of the Squid SDK. All the squids (except for [4-contract](/4-contract/)) fetch the raw on-chain data from the Ethereum Archive and can be run locally without the need to set up a connection to an archive Ethereum node endpoint.

## Overview

- [1-evm-logs](/1-evm-logs/): Index transfers by extracting `Transfer(address,address,uint256)` logs emitted by a given contract
- [2-transaction](/2-transactions/): Index transaction data. TBD
- [3-factory](/3-factory/): Index token swaps from dynamically created pools. Illustrates global EVM log filtering.
- [4-contract](/4-contract/): Enrich the model data by querying the historical state of the contract.

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