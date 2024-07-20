import { useQuery } from "@tanstack/react-query"
import { listadoBetania, listadoSanjose } from "../services/actions.listado"


export const useListadoSanjose = () => {

    const listadoSanjoseQuery = useQuery({
        queryKey: ['listadoSanjose'],
        queryFn:listadoSanjose,    
    })

    return listadoSanjoseQuery
}
export const useListadoBetania = () => {

    const listadoBetaniaQuery = useQuery({
        queryKey: ['listadoBetania'],
        queryFn:listadoBetania,    
    })

    return listadoBetaniaQuery
}

