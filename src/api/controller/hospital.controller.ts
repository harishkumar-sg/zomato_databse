import {Request,Response} from "express"
import {MyResponseParser} from "@util/myResponseParser"
import {Employee} from '@database/model/employee';
import { HospitalService } from "@service/Hosp.service"
import { getRepository, getManager, Not, LessThan, Equal, Like, Between, In,getCustomRepository } from "typeorm";
import {employeeRepo} from '@database/repository/EmployeeRepository'

export class HospitalController {
    private hospitalservice : HospitalService;
    private myresponseparser: MyResponseParser;
    
    constructor(){
        this.hospitalservice= new HospitalService()
        this.myresponseparser= new MyResponseParser()
    }
    public allEmployeeData = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.getalldata();
        res.send(employeeData)
    }
    public createEmployee= async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData = await this.hospitalservice.createEmployee(req.params.name,parseInt(req.params.salary))
        if(employeeData) 
            res.send('data added successfully')
        else 
            res.send('employee cant be created')
    }
    public getEmployeeByName = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.getEmployeeByName(req.params.name)
        if(employeeData.length==0) res.send('employee doesnt exist')
        res.send(employeeData)
        
    }
    public getEmployeeById = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.getEmployeeById(req.params.id)
        res.send(employeeData)
        
    }
    public updateEmployee = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.updateEmployee(req.params.id,req.params.name)
        res.send(employeeData)
        
    }
    public deleteEmployee = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.deleteEmployee(req.params.id)
        res.send(employeeData)
        
    }
    public mySort = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.sortEmployee(req.body.type,req.body.order)
        res.send(employeeData)
    }
    public getsalary = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.hospitalservice.employeeSalary(req.params.id)
        res.send(employeeData)
    }


}





// const createdata=async (req:Request,res:Response)=>{
    
    
//     const EmployeeRepository=getCustomRepository(employeeRepo)
//     //to add data
//     //const data= await EmployeeRepository.customSave('manish','061516e6-1d4f-11ed-861d-0242ac120002','3ef47e70-1d4f-11ed-861d-0242ac120002','48f8c2e6-1d4f-11ed-861d-0242ac120002','57bb44f2-1d4f-11ed-861d-0242ac120002')
//     const data= await (await EmployeeRepository.customSave('monu',20000))
    
    
//     res.json({
//         data,
//         test :"ok"
//     })


// }

// const createdatabyrequest=async (req:Request,res:Response)=>{

    
//     const salary = parseInt(req.params.sal)
//     const EmployeeRepository=getCustomRepository(employeeRepo)
//     //to add data
//     //const data= await EmployeeRepository.customSave('manish','061516e6-1d4f-11ed-861d-0242ac120002','3ef47e70-1d4f-11ed-861d-0242ac120002','48f8c2e6-1d4f-11ed-861d-0242ac120002','57bb44f2-1d4f-11ed-861d-0242ac120002')
//     const data= await EmployeeRepository.customSave(req.params.name,salary)
    
    
//     res.json({
//         data,
//         test :"ok"
//     })


// }

// const alldata=async (req:Request,res:Response)=>{

//     const EmployeeRepository=getRepository(Employee)
//     let data = ( await EmployeeRepository.find({
//         select :["salary","name"],
        
//     }))
    
//     res.json({
//         data,
//         test :"ok"
//     })


// }
// const alldatasorted=async (req:Request,res:Response)=>{
//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.find({
//         select :["salary","name"],
//         order:{
//             salary:'ASC',
//             name:'DESC'
//         },
//         skip: 0,
//         take: 5,
//         //cache: true,
//     })
    
//     res.json({
//         data
        
//     })


// }
// const sortby=async (req:Request,res:Response)=>{
//     const EmployeeRepository=getRepository(Employee)
    
    
    // if(req.body.name){
    //     if(req.body.asc){
    //         let data = await EmployeeRepository.find({
    //             select :["salary","name"],
    //             order : {
    //                 name:'ASC'
                    
    //             }
                
    //         })
    //         res.json({
    //             data
                
    //         })
    //     }
    //     else {
    //         let data = await EmployeeRepository.find({
    //             select :["salary","name"],
    //             order : {
    //                 name:'DESC'
                    
    //             }
                
    //         })
    //         res.json({
    //             data
                
    //         })
    //     }
    // }
    // else {
    //     if(req.body.asc){
    //         let data = await EmployeeRepository.find({
    //             select :["salary","name"],
    //             order : {
    //                 salary:'ASC'
                    
    //             }
                
    //         })
    //         res.json({
    //             data
                
    //         })
    //     }
    //     else {
    //         let data = await EmployeeRepository.find({
    //             select :["salary","name"],
    //             order : {
    //                 salary:'DESC'
                    
    //             }
                
    //         })
    //         res.json({
    //             data
                
    //         })
    //     }
    // }
    


    
    
    


//}

// const getsalary=async (req:Request,res:Response)=>{
//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.find({
//         //if(req.body.less)
//     })
    
//     res.json({
//         data,
//         test :"ok"
//     })


// }
// const findbyname=async (req:Request,res:Response)=>{

//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.find({
//         where:{
//             name : req.params.name
//         }
//     })
    
    
    
    
//     res.json({
//         data,
//         test :"ok"
//     })


// }
// const findbyid=async (req:Request,res:Response)=>{

//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.find({
//         where:{
//             id : req.params.id
//         }
//     })
    
    
    
    
//     res.json({
//         data,
//         test :"ok"
//     })



// }

// const updatedata=async (req:Request,res:Response)=>{

//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.update(req.params.id,{

//         name:req.body.name
//     })
    
    
    
    
    
//     res.json({
//         data,
//         test :"ok"
//     })



// // }

// const deletedata=async (req:Request,res:Response)=>{

//     const EmployeeRepository=getRepository(Employee)
//     let data = await EmployeeRepository.delete(req.params.id)
    
    
    
    
    
//     res.json({
//         data,
//         test :"ok"
//     })



// }



// export{
//     createdata,createdatabyrequest,alldata,findbyname,findbyid,updatedata,deletedata,alldatasorted,getsalary,sortby
// }
