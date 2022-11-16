process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


typegen:
	@npx squid-evm-typegen --abi ./abi/factory.json --output src/abi/factory.ts
	@npx squid-evm-typegen --abi ./abi/pool.json --output src/abi/pool.ts


codegen:
	@npx squid-typeorm-codegen


up:
	@docker-compose up -d


down:
	@docker-compose down -v


build:
	@npm run build


.PHONY: process serve migrate migration codegen typegen up down build
