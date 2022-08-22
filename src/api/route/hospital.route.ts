import express from "express"
import {HospitalController} from "@api/controller/hospital.controller"
import { namePincodeValidator,idValidator,nameValidator } from "@api/validator/hospital.validator";
import { HttpRequestValidator } from "@middleware/http-request-validator";
import { paginationValidator } from "@api/validator/employee.validator";





class HospitalRoute {
    public router: express.Router = express.Router();
    private httpRequestValidator: HttpRequestValidator;
    private hospitalController : HospitalController;
    constructor(){
        this.hospitalController= new HospitalController()
        this.httpRequestValidator= new HttpRequestValidator();
        this.assign();
    }
    private assign(){
        // create okk
        this.router.post(
            '/',
            this.httpRequestValidator.validate('body',namePincodeValidator),
            this.hospitalController.createHospital

        )
        //update okk
        this.router.put(
            '/:id',
            this.httpRequestValidator.validate('params',idValidator),
            this.httpRequestValidator.validate('body',nameValidator),
            this.hospitalController.updateHospital
        )
        //delete ok
        this.router.delete(
            '/:id',
            this.httpRequestValidator.validate("params", idValidator),
            this.hospitalController.deleteHospital
        )
        //read by id
        this.router.get(
        
            '/',
            this.httpRequestValidator.validate("query", paginationValidator),
            this.hospitalController.allHospitalData
        )
    }
}

export default new HospitalRoute().router;


