import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Order } from "./order";
import { OrderList } from "./orderlist";


@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  // @OneToMany(() => Order, (order) => order.users)
  // @JoinColumn({ name: "userId" })
  // public order: Order[];

  // @OneToMany(() => OrderList, (orderlist) => orderlist.users)
  // @JoinColumn({ name: "orderId" })
  // public orderlist: OrderList[];
}
