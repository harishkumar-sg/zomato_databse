import { Items } from "@database/model/items";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Items)
export class ItemsRepo extends Repository<Items> {
  public async getItems(): Promise<any> {
    return this.createQueryBuilder("items")
      .leftJoin('items.restaurant', 'restaurant')
      .select(['items.name', 'items.price', 'restaurant.name'])
      .getMany()
  }
  public async getItemByID(itemid:string): Promise<any> {
    return this.createQueryBuilder("items")
      .select(["items.name", "items.price"])
      .where("items.item_id=:id", { id: itemid })
      .getMany();
  }
}
