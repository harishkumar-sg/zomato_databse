import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Administrator } from "./administrator";
import { FoodItem } from "./food-item";

@Entity('menu')
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  menuId: string;

  @Column()
  price: string;
  
  @Column()
  startDate: string;

  @Column()
  endDate: string;
 

  @Column()
  foodId: string;

  @OneToOne(()=>Administrator,(admin)=>admin.menu)
  @JoinColumn({name:'menuId',referencedColumnName:'menuId'})
  public administrator:Administrator

  @OneToOne(()=>FoodItem,(food)=>food.menu)
  @JoinColumn({name:'foodId',referencedColumnName:'foodId'})
  public fooditem:FoodItem



}
