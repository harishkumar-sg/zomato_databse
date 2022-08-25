import { Application } from "express";
import { AuthenticateRequest } from "@middleware/authenticate-request";
//import EmployeeRoute  from './employee.route';
import BaseRoute from "./base.route";
import CmsRoute from "./cms.route";
import CustomerRoute from "./customer.route";
//import hospitalRoute from "./hospital.route";
export class Routes {
  private authenticate;
  constructor() {
    const authMiddleware = new AuthenticateRequest();
    this.authenticate = authMiddleware.validate;
  }
  public routes(app: Application): void {
    // resource and routes mapping comes here
    app.use("/cms", CmsRoute);
    app.use('/',BaseRoute);
    app.use('/customer',CustomerRoute)
    // app.use('/employee',EmployeeRoute)
    // app.use('/hospital',hospitalRoute)

  }
}
