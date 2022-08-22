import {EntityRepository,AbstractRepository} from "typeorm"
import {Hospital} from '../model/hospital'

@EntityRepository(Hospital)

export class HospitalRepo extends AbstractRepository <Hospital>{
    
    
    customSave(name:string,pincode:string){
        //name,mngid,pincode,locid
        const hospital= new Hospital()
        
        hospital.name=name;
        hospital.pincode=pincode
        
        return this.manager.save(hospital)
        
    }
        
    }