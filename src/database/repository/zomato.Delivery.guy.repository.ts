import { DeliveryGuy } from "@database/model/delivery.guy";

import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(DeliveryGuy)
export class DeliveryGuyRepo extends Repository<DeliveryGuy> {
    public async getGuy(): Promise<any> {
        const data = await this.createQueryBuilder("delivery_guy")
          .select("delivery_guy.deliveryGuyId")
          .where("delivery_guy.status =:status", { status: "free" })
          .getOne();
        return data;
  }

}
