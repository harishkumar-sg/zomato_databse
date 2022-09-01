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


@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  usereId: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToMany(() => Order, (order) => order.users)
  @JoinColumn({ name: "userId" })
  public order: Order[];


  
}
