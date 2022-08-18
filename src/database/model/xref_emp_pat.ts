import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Employee } from "./employee";
import { Patient } from "./patient";

@Entity('xref_emp_pat')
export class XrefEmpPat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  empId: string;

  @Column()
  patId: string;

  @ManyToOne(()=>Patient,(pat)=>{pat.xrefPatRef})
  @JoinColumn({name :'id'})
  public patient : Patient

  @ManyToOne(()=>Employee,(emp)=>{emp.xrefPatRef})
  @JoinColumn({name :'id'})
  public employee : Employee

  


}
