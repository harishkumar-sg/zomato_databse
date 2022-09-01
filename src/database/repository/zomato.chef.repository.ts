import { Chef } from "@database/model/chef";
import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(Chef)
export class ChefRepo extends Repository<Chef> {}
