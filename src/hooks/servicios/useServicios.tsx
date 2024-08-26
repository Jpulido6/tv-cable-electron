import { useQuery } from "@tanstack/react-query"
import { obtenerServicios } from "../../services/actions.servicios"

export const useServicios = () =>{
    const serviciosQuery = useQuery({
        queryKey:['servicios'],
        queryFn: obtenerServicios
    })

    return serviciosQuery
}