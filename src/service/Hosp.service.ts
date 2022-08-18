import { Employee } from "@database/model/employee"
import { employeeRepo } from "@database/repository/EmployeeRepository";
import { DeleteResult, getCustomRepository, getManager, getRepository, UpdateResult } from "typeorm"


export class HospitalService {
    
    public async getalldata():Promise<Employee[]>{
        const employeeRepository=getManager().getRepository(Employee)
        const employeeData = await employeeRepository.find({
            select:['name','salary']   
        })
        console.log(employeeData)
        return employeeData       
    }
    public async createEmployee(name : string , salary : number):Promise<Employee>{
        const EmployeeRepository=getCustomRepository(employeeRepo)
        return EmployeeRepository.customSave(name,salary)
    }

    public async getEmployeeByName(name : string ):Promise<Employee[]>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.find({
            where:{
                name : name
            }  
        })
        return employeeData

    }

    public async getEmployeeById(id : string ):Promise<Employee[]>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.find({
            where:{
                id
            }  
        })
        return employeeData
    }

    public async updateEmployee(id:string ,name :string):Promise<UpdateResult>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.update(id,{
            name:name
        })
        return employeeData
    }
    public async deleteEmployee(id:string ):Promise<DeleteResult>{
        const EmployeeRepository=getRepository(Employee)
        const employeeData = await EmployeeRepository.delete(id)
        return employeeData

    }
    public async employeeSalary(id:string):Promise<Employee[]>{
        const employeeRepository=getManager().getRepository(Employee)
        const employeeData = await employeeRepository.find({
            select:['salary']  ,
            where : {
                id: id
            }

        })
        return employeeData       
    }
    public async sortEmployee(type1:string,order1:string):Promise<Employee[]>{
        
        const EmployeeRepository=getRepository(Employee)
        
        if(type1==='name'){
            if(order1==='asc'){
                var employeeData= await EmployeeRepository.find({
                    select :["salary","name"],
                    order : {
                        name:'ASC'    
                    }    
                })
            }
            else {
                var employeeData = await EmployeeRepository.find({
                    select :["salary","name"],
                    order : {
                        name:'DESC'    
                    }
                })
            }
        }
        else if(type1==='salary') {
            if(order1==='asc'){
                var employeeData = await EmployeeRepository.find({
                    select :["salary","name"],
                    order : {
                        salary:'ASC'    
                    } 
                })
            }
            else {
                var employeeData = await EmployeeRepository.find({
                    select :["salary","name"],
                    order : {
                        salary:'DESC'
                        
                    }
                    
                })
            }
        }
        return employeeData;

    }


}