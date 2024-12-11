import { UsuarioResponse } from "@/services/actions.usuarios";
import { Customer } from "../../domain/entities/customer";

export const responseToCustomerFactory = (customer: UsuarioResponse)=> {
    return new Customer(
        customer.id,
        customer.nombre,
        customer.direccion,
        customer.email,
        customer.telefono,
        customer.estado,
        new Date(customer.fechaInscripcion)
    )
}