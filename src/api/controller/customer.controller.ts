import { CustomerService } from "@service/zomato.customer.service";
import { Request, Response } from "express";

export class CustomerController {
  private customerService: CustomerService;
  constructor() {
    this.customerService = new CustomerService();
  }
  public placeOrder = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    res.send(await this.customerService.placeAnOrder(req.body.user,req.body.order));
  };
}

