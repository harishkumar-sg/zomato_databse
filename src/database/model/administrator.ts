import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Menu } from "./menu";

@Entity('administrator')
export class Administrator extends BaseEntity {
  @PrimaryGeneratedColumn()
  adminId: string;

  @Column()
  FName: string;
  
  @Column()
  LName: string;


  @Column()
  userName: string;
  
  @Column()
  password: string ;

  @Column()
  status: string;
  
  @Column()
  menuId: string;

  @OneToOne(()=>Menu,(menu)=>menu.administrator)
  public menu : Menu



  

  

  


}
