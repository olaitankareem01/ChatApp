import { IRepository } from "./IRepository";
import * as User from "../models/user";

export interface IUserRepository extends IRepository<typeof User>{
 

}