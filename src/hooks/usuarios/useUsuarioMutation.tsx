import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { UsuarioData, UsuarioResponse, actualizarUsuario, crearUsuario } from "../../services/actions.usuarios"
import { toast } from "sonner"




export const useUsuarioMutation = () => {


    const mutation = useMutation({
        mutationFn: crearUsuario,
        onSuccess: () => {
            toast.success('Usuario creado correctamente')
        },

        onError: () => {
            toast.error('Error al crear el usuario')
        }
    })

    return mutation
}

export const useActualizarUsuarioMutation = (): UseMutationResult<UsuarioResponse, Error, { id: number, data: UsuarioData }> => {

    const mutation = useMutation({
        mutationFn: ({ id, data }: { id: number, data: UsuarioData }) => actualizarUsuario(id, data),
        onSuccess: () => {
            toast.success('Usuario actualizado correctamente')
        },
        onError: () => {
            toast.error('Error al actualizar el usuario')
        }
    })

    return mutation;
};

