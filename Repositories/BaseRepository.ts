import sequelize from "sequelize";
import { IRepository } from "./IRepository";
const db = require('../models')

export abstract class BaseRepository<T> implements IRepository<T>{
 

   protected model
    constructor(model: any) {
        this.model = model
        
    }
    
    async create(item: T): Promise<boolean> {
        return await this.model.create(item);
      
    }
    async update(id: number, item: T): Promise<boolean> {
        return await this.model.update(item,   {
                where: { id: id }
            });
      
    }
    async delete(id: number, item: T): Promise<boolean> {
     return  await this.model.destroy(item,   {
            where: { id: id }
        });       
    }
    async find(item: T): Promise<T[]> {
     return await this.model.findOne(item);
       
    }
   async findOne(id: number): Promise<T> {
      return  await this.model.findAll({
            where: { id: id }
        });
     
    }

    async GetAll():Promise<T> {
        return await this.model.findAll();

    }

}

