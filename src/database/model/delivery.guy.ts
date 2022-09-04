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


@Entity("delivery_guy")
export class DeliveryGuy extends BaseEntity {
  @PrimaryGeneratedColumn()
  deliveryGuyId: string;

  @Column()
  name: string;

  @Column()
  status: string;
  
  // @OneToOne(() => Order, (order) => order.deliveryguy)
  // public order: Order;
  
} 