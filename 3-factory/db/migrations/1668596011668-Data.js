module.exports = class Data1668596011668 {
  name = 'Data1668596011668'

  async up(db) {
    await db.query(`CREATE TABLE "swap" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_number" integer NOT NULL, "tx_hash" text NOT NULL, "sender" text NOT NULL, "recipient" text NOT NULL, "amount0" numeric NOT NULL, "amount1" numeric NOT NULL, "pool_id" character varying, CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_e78e7b899d2e3327494e5fe975" ON "swap" ("pool_id") `)
    await db.query(`CREATE TABLE "pool" ("id" character varying NOT NULL, "token0" text NOT NULL, "token1" text NOT NULL, CONSTRAINT "PK_db1bfe411e1516c01120b85f8fe" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "swap" ADD CONSTRAINT "FK_e78e7b899d2e3327494e5fe975d" FOREIGN KEY ("pool_id") REFERENCES "pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "swap"`)
    await db.query(`DROP INDEX "public"."IDX_e78e7b899d2e3327494e5fe975"`)
    await db.query(`DROP TABLE "pool"`)
    await db.query(`ALTER TABLE "swap" DROP CONSTRAINT "FK_e78e7b899d2e3327494e5fe975d"`)
  }
}
