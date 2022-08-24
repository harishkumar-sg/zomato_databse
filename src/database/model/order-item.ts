import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Order } from "./order";

@Entity('order_item')
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderId: string;

  @Column()
  foodID: string;
  
  @Column()
  quantity: string;

  @Column()
  unitPrice: string;

  @OneToOne(()=>Order,(order)=>order.orderitem)
  public order : Order


  
  
 
  



  

  

  


}
