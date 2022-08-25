import express from "express"
import {CustomerController } from "@api/controller/customer.controller";

class CustomerRoute {
    public router: express.Router = express.Router();
    public customerController : CustomerController;


    constructor(){
        this.customerController = new CustomerController();
        this.assign();
    }

    private assign(){
        this.router.post(
            '/',
            this.customerController.createCustomer
        )
        this.router.get(
            '/',
            this.customerController.getAllCustomer
        )
        this.router.get(
            '/:id',
            this.customerController.getCustomerById
        )
        this.router.put(
            '/:id',
            this.customerController.updateCustomer
        )
        this.router.delete(
            '/:id',
            this.customerController.deleteCustomer
        )
        
        
    }




}

export default new CustomerRoute().router;