
import { Order } from "@database/model/order";
import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(Order)
export class OrderRepo extends Repository<Order> {}
