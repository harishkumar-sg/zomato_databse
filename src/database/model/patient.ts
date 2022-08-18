import { xrefEmpPat1660284198598 } from "@database/migration/1660284198598-xref_emp_pat";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { XrefEmpPat } from "./xref_emp_pat";

@Entity('patient')
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  dob: string;

  @Column()
  empId: string;

  @OneToMany(()=>XrefEmpPat,(xref)=>{xref.patient})
  @JoinColumn({name:'patId'})
  public xrefPatRef : XrefEmpPat[]



}
