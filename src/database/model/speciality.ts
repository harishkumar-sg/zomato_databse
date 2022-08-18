import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { XrefSpecHosp } from "./xref_spec_hosp";

@Entity('Speciality')
export class Speciality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  specName: string;

  @Column()
  descrip: string;

  @ManyToOne(()=>XrefSpecHosp,(xref)=>xref.speciality)
  @JoinColumn({name:'specId'})
  public xrefHopsSpec : XrefSpecHosp



}
