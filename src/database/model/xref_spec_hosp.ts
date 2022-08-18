import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Hospital } from "./hospital";
import { Speciality } from "./speciality";

@Entity('xref_spec_hosp')
export class XrefSpecHosp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  hospId: string;

  @Column()
  specId: string;

  @OneToMany(()=>Hospital,(hosp)=>hosp.xrefHospSpec)
  @JoinColumn({name:'id'})
  public hospital :Hospital[]


  @OneToMany(()=>Speciality,(spec)=>spec.xrefHopsSpec)
  @JoinColumn({name:'id'})
  public speciality : Speciality[]

  


}
