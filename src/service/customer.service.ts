import {CustomerRepo } from "@database/repository/customer.repository"
import {Customer} from "@database/model/customer"
import { DeleteResult, getCustomRepository, getManager, getRepository, UpdateResult } from "typeorm"

export class CustomerService {
    public async createCustomer(customer : Customer ):Promise<Customer>{
        const customerRepo = await getManager().getCustomRepository(CustomerRepo)
        return customerRepo.customSave(customer)
    }
    public async getAllData():Promise <Customer[]>{
        const customerRepo = getManager().getRepository(Customer)
        const customData= await customerRepo.find({
            select:['fName','email','phoneNo']
        })
        return customData
    }
    public async getCustomerById(id:string):Promise <Customer[]>{
        const customerRepo = getManager().getRepository(Customer)
        const customerData= await customerRepo.find({
            where :{
                customerId:id
            }
        })
        return customerData;
    }
    public async updateCustomer(id:string,email?:string,phone?:string,fname?:string,lname?:string):Promise <UpdateResult>{
        const customerRepo = getManager().getRepository(Customer)
        const customerData= await customerRepo.update(id,{
            email,
            phoneNo:phone,
            fName:fname,
            lName:lname
        })
        return customerData;
    }
    public async deleteById(id:string):Promise <DeleteResult>{
        const customerRepo = getRepository(Customer)
        const customerData= await customerRepo.delete(id)
        return customerData

    }
    

}