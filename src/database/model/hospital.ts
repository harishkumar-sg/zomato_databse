import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import {Location} from '@database/model/location'
import { Employee } from "./employee";
import { XrefSpecHosp } from "./xref_spec_hosp";
@Entity('hospital')
export class Hospital extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  manageId: string;

  @Column()
  pincode: string;

  @Column()
  locId: string;

  // @OneToMany(()=>Location,(location)=>{location.hospital})
  // @JoinColumn({name:'hospId'})
  // public location : Location[]

  // @OneToMany(()=>Employee,(emp)=>{emp.hospital})
  // @JoinColumn({name:'hospId'})
  // public employee : Employee[]


  // @ManyToOne(()=>XrefSpecHosp,(xref)=>xref.hospital)
  // @JoinColumn({name :'hospId'})
  // public xrefHospSpec : XrefSpecHosp




}
