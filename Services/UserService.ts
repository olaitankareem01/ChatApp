import  {IUserRepository} from "../Repositories/IUserRepository";
import  IUserService  from "./IUserService";
import * as User from "../models/user"

export default class UserService implements IUserService{
    private _userRepo: IUserRepository;

    constructor(userRepo:IUserRepository){
       this._userRepo = userRepo;
    }

    async CreateUser(User:any): Promise<boolean> {
       return await this._userRepo.create(User);
    }

   async FindUserByEmail(Email: string): Promise<any> {
        return await this._userRepo.find(Email);
    }

    async FindUser(id: number): Promise<any> {
      return await this._userRepo.findOne(id);
    }
    
}