import { useQuery } from "@tanstack/react-query"
import {
    // obtenerUsuarios,
    obtenerUsuariosConFactura,
    verUsuarioId
} from "../../services/actions.usuarios"
import { DatosResponse } from "../../components/common/GenerarFacturas"
import { CustomerProxy } from "@/v2/pages/private/home/infraestructure/repositories/customer.proxy"


export const useUsuarios = () => {
    const customer = new CustomerProxy()

    const usuariosQuery = useQuery({
        queryKey: ['usuarios'],
        // queryFn: obtenerUsuarios
        queryFn: customer.getUser
    })

    return usuariosQuery

}
export const useUsuariosConFactura = () => {

    const usuariosConFacturaQuery = useQuery<DatosResponse[]>({
        queryKey: ['usuariosConFactura'],
        queryFn: obtenerUsuariosConFactura
    })

    return usuariosConFacturaQuery

}

export const useUsuarioById = (id: number) => {

    const usuarioQuery = useQuery({
        queryKey: ['usuario', id],
        queryFn: () => verUsuarioId(id)
    })

    return usuarioQuery
}

