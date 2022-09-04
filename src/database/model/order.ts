
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
import { DeliveryGuy } from "./delivery.guy";
import { OrderList } from "./orderlist";
import { Users } from "./users";


@Entity("order")
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderId: string;

  @Column()
  userId: string;

  @Column()
  bill: string;

  @Column()
  deliveryGuyId: string;

  // @ManyToOne(() => Users, (users) => users.order)
  // public users: Users;

  // @OneToOne(() => DeliveryGuy, (deliveryguy) => deliveryguy.order)
  // @JoinColumn({ name: "order_id", referencedColumnName: "orderId" })
  // public deliveryguy: DeliveryGuy;
}
