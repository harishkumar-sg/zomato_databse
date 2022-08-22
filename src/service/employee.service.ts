import { Employee } from "@database/model/employee"
import { employeeRepo } from "@database/repository/employeeRepository";
import { DeleteResult, getCustomRepository, getManager, getRepository, Like, UpdateResult } from "typeorm"


export class EmployeeService {
    //,
    public async getalldata(page?: number ,size?: number,sortOn?:string,sortBy?:string,keyword?:string):Promise<Employee[]>{
        const employeeRepository=getManager().getRepository(Employee)
        
        const employeeData = await employeeRepository.find({
            select:['name','salary'],
            skip: (page-1)*size,
            take :size,
            order : {
                [sortOn]:sortBy   
                

            },
            where:{
                name:Like(`%${keyword}%`)
             }
        })
        //console.log(page+'...hey')
        return employeeData       
    }

    public async createEmployee(name : string , salary : number):Promise<Employee>{
        const EmployeeRepository=getCustomRepository(employeeRepo)
        return EmployeeRepository.customSave(name,salary)
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
    // public async employeeSalary(id:string):Promise<Employee[]>{
    //     const employeeRepository=getManager().getRepository(Employee)
    //     const employeeData = await employeeRepository.find({
    //         select:['salary']  ,
    //         where : {
    //             id: id
    //         }

    //     })
    //     return employeeData       
    // }
    // public async sortEmployee(sortOn:string,sortBy:string):Promise<Employee[]>{
    //     //const keyword : string=null
    //     const EmployeeRepository=getRepository(Employee)
    //     const employeeData= await EmployeeRepository.find({
    //         select :["salary","name"],
    //         order : {
    //             [sortOn]:sortBy   
    //         },
    //     //where:{name:Like(`%${keyword}%`)}
    //     })
    //     return employeeData;

    // }
    // public async getEmployeeByName(name : string ):Promise<Employee[]>{
    //     const EmployeeRepository=getRepository(Employee)
    //     const employeeData = await EmployeeRepository.find({
    //         where:{
    //             name : name
    //         }  
    //     })
    //     return employeeData

    // }


}