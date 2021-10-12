import awilix from "awilix";
import { BaseRepository } from "../Repositories/BaseRepository";
import UserRepository from "../Repositories/UserRepository";
import UserService from "../Services/UserService";

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC
});

container.register({
    IUserRepository: awilix.asClass(UserRepository),
    IUserService:awilix.asClass(UserService)
   
})