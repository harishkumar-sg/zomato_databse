import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Order } from "./order";

@Entity('customer')
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  customerId: string;

  @Column()
  email: string;
  
  @Column()
  phoneNo: string ;

  @Column()
  FName: string;

  @Column()
  LName: string;
  
  @Column()
  paymentId: string;
  
  @Column()
  foodId: string ;

  @OneToMany(()=>Order,(order)=>order.customer)
  @JoinColumn({name:'customerId'})
  public order : Order[]



  



  
  

  

  


}
