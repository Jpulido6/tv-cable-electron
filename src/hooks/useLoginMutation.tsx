import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { login } from "../services/action.login"
import { useRef } from "react"
import { Toast } from 'primereact/toast';



export const useLoginMutation = () =>{
    const toast = useRef<Toast>(null)
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: login,
        onSuccess:()=>{
            navigate('/inicio')
        },
        onError(error, variables, context) {
            console.log(error)
            console.log(variables)
            console.log(context)
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Usuario o contraseña incorrectos', life: 3000 });
        }
    })

    return mutation
}