import express from "express";
import { CustomerController } from "@api/controller/customer.controller";
import { HttpRequestValidator } from "@middleware/http-request-validator";
import {
  idValidator,
  restuarntValidate,
} from "@api/validator/restaurant.validator";

class CutomerRoute {
  public router: express.Router = express.Router();
  private customerController: CustomerController;
  private httpRequestValidator: HttpRequestValidator;

  constructor() {
    this.customerController = new CustomerController();
    this.httpRequestValidator = new HttpRequestValidator();
    this.assign();
  }
  private assign() {
    this.router.post(
      "/",
      this.customerController.placeOrder
    )
  }
}

export default new CutomerRoute().router;
