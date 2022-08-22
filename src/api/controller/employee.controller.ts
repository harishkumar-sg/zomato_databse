import {Request,Response} from "express"
import {MyResponseParser} from "@util/myResponseParser"
import {Employee} from '@database/model/employee';
import { EmployeeService } from "@service/employee.service"
import { getRepository, getManager, Not, LessThan, Equal, Like, Between, In,getCustomRepository } from "typeorm";
import {employeeRepo} from '@database/repository/employeeRepository'
import { string } from "@hapi/joi";

export class EmployeeController {
    private employeeService : EmployeeService;
    private myresponseparser: MyResponseParser;
    
    constructor(){
        this.employeeService= new EmployeeService()
        this.myresponseparser= new MyResponseParser()
    }
    public allEmployeeData = async (req: Request, res: Response):Promise<void>=>{ 
        const page=req.query.page ?(String)(req.query.page):null;
        const size=req.query.size ?(String)(req.query.size):null;
        const sortOn=req.query.sortOn ?(String)(req.query.sortOn):null;
        const sortBy=req.query.sortBy ?(String)(req.query.sortBy):null;
        const keyword=req.query.keyword ?(String)(req.query.keyword):null; 
       

        const employeeData =  await this.employeeService.getalldata(parseInt(page),parseInt(size) ,sortOn,sortBy, keyword);
        res.send(employeeData)
        
    }
    public createEmployee= async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData = await this.employeeService.createEmployee(req.body.name,req.body.salary)
        if(employeeData) 
            res.send('data added successfully')
        else 
            res.send('employee cant be created')
    }
    // public getEmployeeByName = async (req: Request, res: Response):Promise<void>=>{ 
    //     const employeeData =  await this.employeeService.getEmployeeByName(req.params.name)
    //     if(employeeData.length==0) res.send('employee doesnt exist')
    //     res.send(employeeData)
        
    // }
    public getEmployeeById = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.employeeService.getEmployeeById(req.params.id)
        res.send(employeeData)
        
    }
    public updateEmployee = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.employeeService.updateEmployee(req.params.id,req.body.name)
        res.send(employeeData)
        
    }
    public deleteEmployee = async (req: Request, res: Response):Promise<void>=>{ 
        const employeeData =  await this.employeeService.deleteEmployee(req.params.id)
        res.send(employeeData)
        
    }
    // public mySort = async (req: Request, res: Response):Promise<void>=>{ 
    //     const employeeData =  await this.employeeService.sortEmployee(req.params.sortOn,req.params.sortBy)
    //     res.send(employeeData)
    // }
    // public getsalary = async (req: Request, res: Response):Promise<void>=>{ 
    //     const employeeData =  await this.employeeService.employeeSalary(req.params.id)
    //     res.send(employeeData)
    // }


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
