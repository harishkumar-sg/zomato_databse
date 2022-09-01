import { uuid } from "aws-sdk/clients/customerprofiles";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Chef } from "./chef";
import { Items } from "./items";

@Entity("restaurant")
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  restaurantId: string;

  @Column()
  name: string;

  @Column()
  ratings: string;

  @OneToOne(() => Chef, (chef) => chef.restaurant, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "restaurant_id", referencedColumnName: "restaurantId" })
  public chef: Chef;

  @OneToMany(() => Items, (items) => items.restaurant)
  public items: Items[];
}
