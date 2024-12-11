import { useMutation } from "@tanstack/react-query"
import { registrarPago } from "../../services/actions.pagos"
import { toast } from "sonner"


export const usePagosMutation = () => {
    const mutation = useMutation({
        mutationKey: ['pagos'],
        mutationFn: registrarPago,
        onSuccess:()=> {
            toast.success('Pago Realizado ☑️')
        },
        onError: () => {
            toast.error('Pago no realizado ❌')
        }
    })

    return mutation
}