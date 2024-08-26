import { useMutation } from "@tanstack/react-query"
import { crearTecnico } from "../../services/actions.tecnicos"
import { toast } from "sonner"


export const useTecnicoMutation = () => {

    const mutation = useMutation({
        mutationFn: crearTecnico,
        onSuccess: () => {
            toast.success('Técnico creado correctamente')
        },

        onError: () => {
            toast.error('Error al crear el Técnico')
        }
    })

    return mutation
}