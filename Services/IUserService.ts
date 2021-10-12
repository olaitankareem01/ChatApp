
import * as User from "../models/user"


export default interface IUserService{
   CreateUser(User: any):Promise<boolean>;
   FindUserByEmail(Email:string):Promise<any>
   FindUser(id:number):Promise<any>
}