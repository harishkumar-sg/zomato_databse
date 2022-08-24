import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import { Order } from "./order";

@Entity('payment')
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  payemntId: string;

  @Column()
  customerID: string;
  
  @Column()
  orderId: string;

  @Column()
  paymentDate: string;
  
  @Column()
  amount: string ;

  @Column()
  paymentType: string;
  

  @ManyToOne(()=>Order,(order)=>order.payment)
  public order: Order

  

  

  


}
