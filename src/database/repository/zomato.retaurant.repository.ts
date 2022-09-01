import {  EntityRepository, QueryBuilder, Repository } from "typeorm";
import { Restaurant } from "../model/restaurant";

@EntityRepository(Restaurant)
export class RestaurantRepo extends Repository<Restaurant> {
    
}
