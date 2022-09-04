
import { Order } from "@database/model/order";
import { Users } from "@database/model/users";
import { UserRepo } from "@database/repository/zomato.user.repository";
import { DeliveryGuyRepo } from "@database/repository/zomato.Delivery.guy.repository";
import { ItemsRepo } from "@database/repository/zomato.items.repository";
import { OrderRepo } from "@database/repository/zomato.order.repository";
import { OrderListRepo } from "@database/repository/zomato.orderlist.repository";


import { getManager } from "typeorm";
import { ChefRepo } from "@database/repository/zomato.chef.repository";

export class CustomerService {
  constructor() {}
    public async placeAnOrder(
        user: Users,
        order:any
    ): Promise<any> 
    {
    const chefRepo = getManager().getCustomRepository(ChefRepo);
    const userRepo = getManager().getCustomRepository(UserRepo);
    const orderListRepo = getManager().getCustomRepository(OrderListRepo);
    const orderRepo = getManager().getCustomRepository(OrderRepo);
    const deliveryGuyRepo = getManager().getCustomRepository(DeliveryGuyRepo);
    const itemsrepo = getManager().getCustomRepository(ItemsRepo);
    //creating user // done
    const userData = await userRepo.save(user);
    let bill = 0;
    //creating items and calculating bill done
    const restaurant = await itemsrepo.getRestaurantByItem(order[0].id);
    const chef = await chefRepo.getChefByRestaurant(restaurant.restaurantId);
    order.forEach(async (element: any) => {
        const data = (await itemsrepo.getBillByItem(element.id));
        bill = bill + parseInt(data.price);
        const orderlist = {
          userId: userData.userId,
          itemId: element.id,
          chefId: chef.chefId
        };
        orderListRepo.save(orderlist);
    });
    //creating order after getting guy // done
    const deliveryGuy = await deliveryGuyRepo.getGuy();
    const orderData = {
        userId: userData.userId,
        bill: bill.toString(),
        deliveryGuyId: deliveryGuy.deliveryGuyId
    };
    return await orderRepo.save(orderData);
        
  }


















}