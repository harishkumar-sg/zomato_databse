import express from "express"
import { EmployeeController } from "@api/controller/employee.controller"
import { HttpRequestValidator } from "@middleware/http-request-validator";
import { MyHttpRequestValidator } from "@middleware/my-http-request-validator";
import { idValidator, paginationValidator, nameSalaryValidator, nameValidator } from "@api/validator/employee.validator";

class EmployeeRoute {
    public router: express.Router = express.Router();
    private employeecontroller : EmployeeController;
    private myhttpRequestValidator: MyHttpRequestValidator;
    private httpRequestValidator: HttpRequestValidator;
    
    constructor(){
        this.employeecontroller= new EmployeeController()
        this.myhttpRequestValidator = new MyHttpRequestValidator();
        this.httpRequestValidator= new HttpRequestValidator()
        this.assign();
    }
    private assign(){
        ///crud
        //create okk
        this.router.post(
            '/',
            this.httpRequestValidator.validate('body',nameSalaryValidator),
            //this.httpRequestValidator.validate('body',salaryValidator),
            //this.httpRequestValidator.validate('body',nameValidator),
            this.employeecontroller.createEmployee
        )
        //update okk
        this.router.put(
            '/:id',
            this.httpRequestValidator.validate('params',idValidator),
            this.httpRequestValidator.validate('body',nameValidator),
            this.employeecontroller.updateEmployee
        )
        //read okkk
        this.router.get(
        
            '/',
            this.httpRequestValidator.validate("query", paginationValidator),
            this.employeecontroller.allEmployeeData
        )
        //util okkk
        this.router.get(
            '/:id',
            //this.myhttpRequestValidator.myValidate("params", idValidator),
            this.httpRequestValidator.validate("params", idValidator),
            this.employeecontroller.getEmployeeById
        )
        //delete okkk
        this.router.delete(
            '/:id',
            this.myhttpRequestValidator.myValidate("params", idValidator),
            this.employeecontroller.deleteEmployee
        )

        
    //     this.router.get(
    //         '/name/:name',
    //         this.employeecontroller.getEmployeeByName
    //     )
    //     this.router.get(
    //         '/util/sort/:sortOn&:sortBy',
    //         this.employeecontroller.mySort
    //     )
    //     this.router.get(
    //         '/salary/:id',
    //         this.employeecoroller.getsalary
    //     )
        

     }
}

export default new EmployeeRoute().router;










//import {alldata, alldatasorted, createdata, createdatabyrequest, deletedata, findbyid, findbyname, getsalary, sortby, updatedata} from  "../controller/hospital.controller"

// const router = express.Router()


//router.post('/',createdata)
// router.post('/:name&:sal',createdatabyrequest)
// router.get('/',alldata)
// router.get('/sorted',alldatasorted)
// router.get('/sortby',sortby)
// router.get('/findbyname/:name',findbyname)
// router.get('/findbyid/:id',findbyid)
// router.put('/:id',updatedata)
// router.delete('/:id',deletedata)
// router.get('/salary',getsalary)


// export {
//     router
// }

