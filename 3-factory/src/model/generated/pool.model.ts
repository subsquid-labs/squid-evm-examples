import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Swap} from "./swap.model"

@Entity_()
export class Pool {
  constructor(props?: Partial<Pool>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  token0!: string

  @Column_("text", {nullable: false})
  token1!: string

  @OneToMany_(() => Swap, e => e.pool)
  swaps!: Swap[]
}
