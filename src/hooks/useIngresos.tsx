import { useQuery } from "@tanstack/react-query"
import { obtenerIngresosDiarios, obtenerIngresosMensuales } from "../services/actions.ingresos"


export const useIngresosDiarios = () => {
    const ingresosQuery = useQuery<number>({
        queryKey: ['ingresos-diarios'],
        queryFn: obtenerIngresosDiarios,
        retry: 1,
        refetchOnWindowFocus: false,
    })

    return ingresosQuery
}
export const useIngresosMensuales = () => {
    const ingresosQuery = useQuery<number>({
        queryKey: ['ingresos-mensuales'],
        queryFn: obtenerIngresosMensuales,
        retry: 1,
        refetchOnWindowFocus: false,
    })

    return ingresosQuery
}

