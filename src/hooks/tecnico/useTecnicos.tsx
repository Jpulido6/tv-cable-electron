import { useQuery } from "@tanstack/react-query"
import { obtenerTecnico } from "../../services/actions.tecnicos"

export const useTecnicos = () => {

    const tecnicosQuery = useQuery({
        queryKey: ['tecnicos'],
        queryFn: obtenerTecnico
    })

    return tecnicosQuery

}