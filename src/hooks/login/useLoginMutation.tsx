import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { login, register } from "../../services/action.login"
import { toast } from "sonner"
import { useStoreApp } from "../../store/useStore"


type Error = {
    response: {
        status: number
        name: string
        data: {
            errorMessage: string
        }
    }
}
export const useLoginMutation = () => {

    const navigate = useNavigate()
    const addName = useStoreApp((state) => state.addName)
    const rol = useStoreApp((state) => state.addRole)
    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            navigate('/inicio')
            addName(data.user.name)
            rol(data.user.role)
        },
        onError(error: Error) {
            toast.error(error.response.data.errorMessage)
        }
    })

    return mutation
}

export const useRegisterMutation = () => {

    const mutation = useMutation({
        mutationFn: register,
        onSuccess: () => {
            toast.success("Se creo un nuevo usuario exitosamente ")
        },
        onError(error: Error) {
            toast.error(error.response.data.errorMessage)
        }

    })
    return mutation

}