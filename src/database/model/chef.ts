import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Order } from "./order";

@Entity('chef')
export class Chef extends BaseEntity {
  @PrimaryGeneratedColumn()
  chefId: string;

  @Column()
  lName: string;
  
  @Column()
  fName: string;

  @Column()
  userName: string;
  
  @Column()
  phoneNo: string ;

  @Column()
  password: string;

  @Column()
  orderId: string;



  @OneToOne(()=>Order,(order)=>order.chef)
  public order : Order





  

  

  


}
