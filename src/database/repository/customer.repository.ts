import { AbstractRepository, EntityRepository } from "typeorm";
import { Customer } from "../model/customer";

@EntityRepository(Customer)

export class CustomerRepo extends AbstractRepository <Customer>{
    customSave(customer: Customer){
        return this.manager.save(customer)
    }
}