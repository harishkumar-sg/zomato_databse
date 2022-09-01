import { RestaurantService } from "@service/zomato.restaurant.service";
import { Request, Response } from "express";

export class ZomatoController {
  private restaurantService: RestaurantService;
  constructor() {
    this.restaurantService = new RestaurantService();
  }
  public createRestaurant = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const name = req.body.name;
    const ratings = req.body.ratings;
    const chefObj = req.body.chefobj;
    const itemsObj = req.body.itemsobj;
    res.send(
      await this.restaurantService.createRestaurant(
        name,
        ratings,
        chefObj,
        itemsObj
      )
    );
  };
  public getAllitems = async (req: Request, res: Response): Promise<void> => {
    res.send(await this.restaurantService.getAllItems());
  };
  public getById = async (req: Request, res: Response): Promise<void> => {
    res.send(await this.restaurantService.getItemByID(req.params.id));
  };
  public deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
    res.send(await this.restaurantService.deleteResturant(req.params.id));
  };
  public updateRestaurant  = async (req: Request, res: Response): Promise<void> => {
    res.send(await this.restaurantService.updateResturant(req.params.id,req.body.restaurantobj,req.body.chefobj,req.body.itemobj));
  };
}
