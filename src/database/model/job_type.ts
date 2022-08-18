import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Employee } from "./employee";

@Entity('job_type')
export class Job_type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  descrip: string;
  
  @Column()
  degree: string;

  // @OneToOne(()=>Employee,(emp)=>emp.job_type)
  // public employee:Employee


  


}
