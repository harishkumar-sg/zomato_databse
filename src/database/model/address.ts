import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Employee } from "./employee";

@Entity('address')
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  pincode: string;


  @Column()
  houseNo: string;
  
  @Column()
  city: string;


  // @OneToOne(()=>Employee,(emp)=>emp.address )
  // public employee : Employee
  

  

  


}
