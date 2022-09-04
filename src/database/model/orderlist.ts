import { ItemSelection } from "aws-sdk/clients/cloudfront";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Chef } from "./chef";
import { Items } from "./items";
import { Order } from "./order";
import { Users } from "./users";


@Entity("order_list")
export class OrderList extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderListId: string;

  @Column()
  userId: string;

  @Column()
  itemId: string;

  @Column()
  chefId: string;

  // @ManyToOne(() => Users, (users) => users.orderlist)
  // public users: Users;
  
  // @ManyToOne(() => Chef, (chef) => chef.orderlist)
  // public chef: Chef;

  // @ManyToOne(() => Items, (items) => items.orderlist)
  // public items: Items;
}
