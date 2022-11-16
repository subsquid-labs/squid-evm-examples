import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Pool} from "./pool.model"

@Entity_()
export class Swap {
  constructor(props?: Partial<Swap>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("int4", {nullable: false})
  blockNumber!: number

  @Column_("text", {nullable: false})
  txHash!: string

  @Index_()
  @ManyToOne_(() => Pool, {nullable: true})
  pool!: Pool

  @Column_("text", {nullable: false})
  sender!: string

  @Column_("text", {nullable: false})
  recipient!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount0!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount1!: bigint
}
