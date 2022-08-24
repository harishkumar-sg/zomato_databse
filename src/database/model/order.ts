import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Chef } from "./chef";
import { Customer } from "./customer";
import { OrderItem } from "./order-item";
import { Payment } from "./payment";

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderId: string;

  @Column()
  orderDate: string;
  
  @Column()
  customerId: string;

  @Column()
  quantity: string;
  
  @Column()
  pickupID: string ;

  @OneToOne(()=>Chef,(chef)=>chef.order)
  @JoinColumn({name:'orderId',referencedColumnName:'orderId'})
  public chef:Chef

  @OneToOne(()=>OrderItem,(item)=>item.order)
  @JoinColumn({name:'orderId',referencedColumnName:'orderId'})
  public orderitem:OrderItem

  @OneToMany(()=>Payment,(payment)=>payment.order)
  @JoinColumn({name :'orderId' })
  public payment : Payment[]

  @ManyToOne(()=>Customer,(customer)=>customer.order)
  public customer : Customer
  


  

  

  


}
