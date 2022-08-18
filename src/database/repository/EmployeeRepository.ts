import {EntityRepository,AbstractRepository} from "typeorm"
import {Employee} from '../model/employee'

@EntityRepository(Employee)

export class employeeRepo extends AbstractRepository <Employee>{
    static find(arg0: { order: { salary: string; }; }) {
        throw new Error("Method not implemented.");
    }
    //name desgid,hospid,locid
    customSave(name:string,salary:number){
        //,desgid:string,hospid:string,locid:string,addid:string
        const employee= new Employee()
        
        employee.name=name;
        employee.salary=salary
        // employee.desgId=desgid;
        // employee.locId=locid;
        // employee.hospId=hospid
        // employee.addId=addid
        // employee.address.id=addid
        // employee.location.locId=locid
        // employee.hospital.id=hospid
        return this.manager.save(employee)
        
    }
        
    }
    // findById(name:string,id:string){
    //     return this.repository.findOne({id,name})
    // }
