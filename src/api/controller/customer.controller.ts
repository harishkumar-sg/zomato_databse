import { Customer } from "@database/model/customer";
import { CustomerService } from "@service/customer.service";
import {Request,Response} from "express"

export class CustomerController {
    private customerService : CustomerService;
    
    constructor(){
        this.customerService = new CustomerService()
    }
    public createCustomer= async (req: Request, res: Response):Promise<void>=>{ 
        const customer = new Customer()
        customer.email=(String)(req.query.email)
        customer.fName=(String)(req.query.fname)
        customer.lName=(String)(req.query.lname)
        customer.phoneNo=(String)(req.query.phone)
        const customerData = await this.customerService.createCustomer(customer)
        if(customerData) 
            res.send('data added successfully')
        else 
            res.send('Customer cant be created')
    }
    public getAllCustomer = async (req: Request, res: Response):Promise<void>=>{ 
        res.send(await this.customerService.getAllData())
    }
    public getCustomerById = async (req: Request, res: Response):Promise<void>=>{
        res.send(await this.customerService.getCustomerById(req.params.id))
    }
    public updateCustomer= async (req: Request, res: Response):Promise<void>=>{
        const email=req.query.email ?(String)(req.query.email):null;
        const phone=req.query.phone ?(String)(req.query.phone):null;
        const fname=req.query.fname ?(String)(req.query.fname):null;
        const lname=req.query.lname ?(String)(req.query.lname):null;
        const customerData=await this.customerService.updateCustomer(req.params.id,email,phone,fname,lname)
        if(customerData) 
            res.send('data updated successfully')
        else 
            res.send('Customer cant be updated')   
    }
    public deleteCustomer = async (req: Request, res: Response):Promise<void>=>{
        const customerData=await this.customerService.deleteById(req.params.id)
        if(customerData) 
            res.send('data deleted successfully')
        else 
            res.send('Customer cant be deleted')  
    }
    

}