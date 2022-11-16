import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Token} from "./token.model"
import {Owner} from "./owner.model"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Token, {nullable: true})
  token!: Token

  @Index_()
  @ManyToOne_(() => Owner, {nullable: true})
  from!: Owner

  @Index_()
  @ManyToOne_(() => Owner, {nullable: true})
  to!: Owner

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("int4", {nullable: false})
  blockNumber!: number

  @Column_("text", {nullable: false})
  txHash!: string
}
