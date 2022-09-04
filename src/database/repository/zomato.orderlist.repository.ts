
import { Order } from "@database/model/order";
import { OrderList } from "@database/model/orderlist";
import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(OrderList)
export class OrderListRepo extends Repository<OrderList> {}
