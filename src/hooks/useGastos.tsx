import { useQuery } from "@tanstack/react-query"
import { obtenerGastos } from "../services/action.gastos"



export const useGastos = () =>{
    const gastosQuery = useQuery({
        queryKey:['gastos'],
        queryFn: obtenerGastos
    })

    return gastosQuery
}