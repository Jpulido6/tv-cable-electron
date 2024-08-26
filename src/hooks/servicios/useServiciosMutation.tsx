import { useMutation } from "@tanstack/react-query"
import { crearServicio } from "../../services/actions.servicios"
import { toast } from "sonner"

export const useServiciosMutation = () =>{
    const mutation = useMutation({        
        mutationFn: crearServicio,
        onSuccess: () => {
            toast.success('Técnico creado correctamente')
        },

        onError: () => {
            toast.error('Error al crear el Técnico')
        }
    })

    return mutation
}