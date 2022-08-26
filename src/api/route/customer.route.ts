import express from "express"
import {CustomerController } from "@api/controller/customer.controller";
import {HttpRequestValidator} from "@middleware/http-request-validator"
import { createValidator, idValidator } from "@api/validator/customer.validator";
class CustomerRoute {
    public router: express.Router = express.Router();
    private customerController : CustomerController;
    private httprequestvalidator : HttpRequestValidator;

    constructor(){
        this.customerController = new CustomerController();
        this.httprequestvalidator = new HttpRequestValidator()
        this.assign();
    }
    private assign(){
        this.router.post(
            '/',
            this.httprequestvalidator.validate('query',createValidator),
            this.customerController.createCustomer
        )
        this.router.get(
            '/',
            this.customerController.getAllCustomer
        )
        this.router.get(
            '/:id',
            this.httprequestvalidator.validate('params',idValidator),
            this.customerController.getCustomerById
        )
        this.router.put(
            '/:id',
            this.httprequestvalidator.validate('params',idValidator),
            this.customerController.updateCustomer
        )
        //till this everything is ok
        this.router.delete(
            '/:id',
            this.httprequestvalidator.validate('params',idValidator),
            this.customerController.deleteCustomer
        )
        
        
    }




}

export default new CustomerRoute().router;