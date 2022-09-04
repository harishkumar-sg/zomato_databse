import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Items } from "./items";
import { OrderList } from "./orderlist";
import { Restaurant } from "./restaurant";


@Entity("chef")
export class Chef extends BaseEntity {
  @PrimaryGeneratedColumn()
  chefId: string;

  @Column()
  name: string;

  @Column()
  restaurantId: string;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.chef)
  public restaurant: Restaurant;

  // @OneToMany(() => OrderList, (orderlist) => orderlist.chef)
  // @JoinColumn({ name: "chef_id" })
  // public orderlist: OrderList[];
}
