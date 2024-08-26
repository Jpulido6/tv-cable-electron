import { useMutation, useQuery } from "@tanstack/react-query"
import { getAmountDaily, getAmountMonthly, obtenerIngresosDiarios, obtenerIngresosMensuales, postAmountDaily } from "../../services/actions.ingresos"


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

export const useGetAmountDaily = () =>{
    const ingresosQuery = useQuery({
        queryKey: ['ingresos-diarios'],
        queryFn: getAmountDaily,
        retry: 1,
    })

    return ingresosQuery
}

export const useGetIncomeMonthly = () =>{
    const ingresosQuery = useQuery({
        queryKey: ['ingresos-mensuales'],
        queryFn: getAmountMonthly,
        retry: 1,
    })

    return ingresosQuery
} 

export const usePostAmountDaily= () =>{
    const dailyMutation = useMutation({
        mutationFn: postAmountDaily,
        retry: 1,        
    })

    dailyMutation
}

