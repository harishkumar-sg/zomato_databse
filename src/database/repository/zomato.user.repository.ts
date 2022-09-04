
import { Users } from "@database/model/users";
import {  EntityRepository, Repository } from "typeorm";


@EntityRepository(Users)
export class UserRepo extends Repository<Users> {}
