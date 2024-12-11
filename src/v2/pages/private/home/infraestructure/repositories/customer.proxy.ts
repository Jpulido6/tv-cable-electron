import { UsuarioResponse } from "@/services/actions.usuarios";
import { CustomerCrudRepository } from "../../domain/repositories/customer.repository";
import { api } from "@/services/api";
import { responseToCustomerFactory } from "../factories/customer.factory";
import { Customers } from "../../domain/entities/customer";
import { ENDPOINT } from "@/v2/constant/enviroments";

export  class CustomerProxy implements CustomerCrudRepository{
    async getUser(): Promise<Customers> {
        const response = await api.get<UsuarioResponse>(ENDPOINT.CUSTOMERS.GET_CUSTOMERS)
        const data = responseToCustomerFactory(response.data)
        return data
    }

}