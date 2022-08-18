
import { join } from "path";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Address } from "./address";
import { Hospital } from "./hospital";
import { Job_type } from "./job_type";
import {Location} from './location'
import { XrefEmpPat } from "./xref_emp_pat";

@Entity('employee')
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  // done with jobtype
  @Column()
  desgId: string;

  @Column()
  hospId: string;
  
  
  //done with location
  @Column()
  locId: string;

  // done with add
  @Column()
  addId: string  ;

  @Column()
  salary:number   ;


  // @OneToOne(()=>Address,(add)=>add.employee)
  // @JoinColumn({name:'addId',referencedColumnName:'id'})
  // public address:Address

  // @OneToOne(()=> Job_type,(job)=>{job.employee})
  // @JoinColumn({name:'desgId',referencedColumnName:'id'})
  // public job_type : Job_type;

  // @OneToOne(() => Location, (location)=>{location.employee})
  // @JoinColumn({ name: 'locId', referencedColumnName: 'locId' })
  // public location: Location ;


  @OneToMany(()=>XrefEmpPat,(xref)=>{xref.employee})
  @JoinColumn({name:'empId'})
  public xrefPatRef : XrefEmpPat[]

  @ManyToOne(()=>Hospital,(hosp)=>hosp.employee)
  @JoinColumn({name :'id'})
  public hospital:Hospital

  

  
  


}
