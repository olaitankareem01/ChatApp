import { BaseRepository } from "./BaseRepository";
import { IUserRepository } from "./IUserRepository";
import * as User from "../models/user";

export default class UserRepository extends BaseRepository<typeof User> implements IUserRepository{
   
 
    constructor(db: any) {
        super(User);      
    }
  
   async find(email: string): Promise<any> {
       return await this.model.findOne({
           where:{email:email}
       })
    }
    
}