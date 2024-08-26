import { useQuery } from "@tanstack/react-query"
import {     
    obtenerUsuarios, 
    obtenerUsuariosConFactura, 
    verUsuarioId 
} from "../../services/actions.usuarios"
import { DatosResponse } from "../../components/common/GenerarFacturas"


export const useUsuarios = () =>{    

    const usuariosQuery = useQuery({
        queryKey: ['usuarios'],
        queryFn: obtenerUsuarios        
    })

    return usuariosQuery
    
}
export const useUsuariosConFactura = () =>{    

    const usuariosConFacturaQuery = useQuery<DatosResponse[]>({
        queryKey: ['usuariosConFactura'],
        queryFn: obtenerUsuariosConFactura       
    })

    return usuariosConFacturaQuery  
    
}

export const useUsuarioById = ( id: number )=>{

    const usuarioQuery = useQuery({
        queryKey: ['usuario', id],
        queryFn: () => verUsuarioId(id)
    })

    return usuarioQuery
}

