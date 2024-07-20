import { useMutation } from "@tanstack/react-query"
import { registrarPago } from "../services/actions.pagos"


export const usePagosMutation = () => {
    const mutation = useMutation({
        mutationKey: ['pagos'],
        mutationFn: registrarPago,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return mutation
}