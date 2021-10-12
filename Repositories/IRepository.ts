
export interface IRepository<T>{
    create(item: T): Promise<boolean>;
    update(id:number,item:T):Promise<boolean>;
    delete(id:number,item:T):Promise<boolean>;
    find(item: T): Promise<T[]>;
    findOne(id: number): Promise<T>;
    GetAll():Promise<T> ;
}