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
import { OrderList } from "./orderlist";
import { Restaurant } from "./restaurant";


@Entity("items")
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn()
  itemId: string;

  @Column()
  restaurantId: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.items, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "restaurant_id", referencedColumnName: "restaurantId" })
  public restaurant: Restaurant;

  @OneToMany(() => OrderList, (orderlist) => orderlist.items)
  @JoinColumn({ name: "item_id" })
  public orderlist: OrderList[];
}
