import { Chef } from "@database/model/chef";
import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(Chef)
export class ChefRepo extends Repository<Chef> {
  public async getChefByRestaurant(restid: string): Promise<any> {
    return this.createQueryBuilder("chef")
      .select("chef.chefId")
      .where("chef.restaurantId =:id", { id: restid })
      .getOne();
  }
}
