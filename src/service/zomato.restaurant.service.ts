
import { ChefRepo } from "@database/repository/zomato.chef.repository";
import { ItemsRepo } from "@database/repository/zomato.items.repository";
import { RestaurantRepo } from "@database/repository/zomato.retaurant.repository";
import { DeleteResult, getManager, UpdateResult } from "typeorm";

export class RestaurantService {
  constructor() {}
  public async createRestaurant(
    name: string,
    ratings: string,
    chefobj: any,
    itemsobj: any
  ): Promise<any> {
    const restaurantRepo = getManager().getCustomRepository(RestaurantRepo);
    const chefrepo = getManager().getCustomRepository(ChefRepo);
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    const restaurantObj = {
      name: name,
      ratings: ratings,
    };
    const restaurantData = await restaurantRepo.save(restaurantObj);
    const chefData = {
      name: chefobj.name,
      restaurantId: restaurantData.restaurantId,
    };
    const chefNewData = await chefrepo.save(chefData);
    console.log("chef obj", chefNewData);

    itemsobj.forEach((element: any) => {
      const itemsData = {
        restaurantId: restaurantData.restaurantId,
        price: element.price,
        name: element.name,
      };
      itemsrepo.save(itemsData);
    });
    return restaurantData;
  }
  public async getAllItems(): Promise<any[]> {
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    const itemdata = await itemsrepo.getItems();
    return itemdata;
  }
  public async getItemByID(id: string): Promise<any[]> {
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    const itemdata = await itemsrepo.getItemByID(id);
    return itemdata;
  }
  public async deleteResturant(id: string): Promise<DeleteResult> {
    const restaurantRepo = getManager().getCustomRepository(RestaurantRepo);
    const chefrepo = getManager().getCustomRepository(ChefRepo);
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    chefrepo.delete({
      restaurantId: id,
    });
    itemsrepo.delete({
      restaurantId: id,
    });
    const itemdata = await restaurantRepo.delete(id);
    return itemdata;
  }
  public async updateResturant(id: string,restaurantobj:object,chefobj?:object,itemsobj?:any): Promise<UpdateResult> {
    const restaurantRepo = getManager().getCustomRepository(RestaurantRepo);
    const chefrepo = getManager().getCustomRepository(ChefRepo);
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    const restaurantData = restaurantRepo.update(id, restaurantobj);
    if (chefobj) chefrepo.update({ restaurantId: id }, chefobj);



    if (itemsobj) {
      itemsobj.forEach((element: any) => {
        const id = String(element.itemId);
        itemsrepo.update(id, element)
      })
      
      }
    return restaurantData;

  }

}
