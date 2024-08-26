import { useMutation } from "@tanstack/react-query"
import { registrarGasto } from "../../services/action.gastos"


export const useGastosMutation = () =>{

    const mutation = useMutation({
        mutationFn: registrarGasto,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return mutation
}