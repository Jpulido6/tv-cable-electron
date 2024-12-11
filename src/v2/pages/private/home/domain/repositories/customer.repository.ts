import { Customers } from "../entities/customer";

export abstract class CustomerCrudRepository{
    abstract getUser():Promise<Customers>
}