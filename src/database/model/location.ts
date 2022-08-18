import { Emotion } from "aws-sdk/clients/rekognition";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Employee } from "./employee";
import { Hospital } from "./hospital";

@Entity('location')
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  locId: string;

  @Column()
  pincode: string;

  @Column()
  city: string;

  @Column()
  hospId: string;



  // @OneToOne(()=> Employee,(employee)=>employee.location)
  // public employee : Employee


  @ManyToOne(()=>Hospital,(hospital)=>{hospital.location})
  @JoinColumn({name:'id'})
  public hospital :Hospital




 


}