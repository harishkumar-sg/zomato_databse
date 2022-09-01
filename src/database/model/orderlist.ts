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


@Entity("order_list")
export class OrderList extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderListId: string;

  @Column()
  orderId: string;

  @Column()
  itemId: string;

  @Column()
  chefId: string;

  @ManyToOne(() => Order, (order) => order.orderlist)
  public order: Order;

  @ManyToOne(() => Chef, (chef) => chef.orderlist)
  public chef: Chef;

  @ManyToOne(() => Items, (items) => items.orderlist)
  public items: Items;
}
