import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Menu } from "./menu";

@Entity('food_item')
export class FoodItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  foodId: string;

  @Column()
  name: string;
  
  @Column()
  quantity: string;

  @Column()
  unitPrice: string;
  
  @Column()
  itemCategory: string ;

  @OneToOne(()=>Menu,(menu)=>menu.fooditem)
  public menu : Menu


  

  

  


}

