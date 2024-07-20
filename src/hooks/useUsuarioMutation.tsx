import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { UsuarioData, UsuarioResponse, actualizarUsuario, crearUsuario } from "../services/actions.usuarios"
import { useRef } from "react"
import { Toast } from "primereact/toast"



export const useUsuarioMutation = () => {

    const toast = useRef<Toast>(null)
    const mutation = useMutation({
        mutationFn: crearUsuario,
        onSuccess: () => {
            toast.current?.show({ severity: 'success', summary: 'Exito', detail: 'Usuario creado correctamente', life: 3000 })
        },

        onError: () => {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Error al crear el usuario', life: 3000 })
        }
    })

    return mutation
}

export const useActualizarUsuarioMutation = (): UseMutationResult<UsuarioResponse, Error, { id: number, data: UsuarioData }> => {

    const mutation = useMutation({
        mutationFn: ({ id, data }: { id: number, data: UsuarioData }) => actualizarUsuario(id, data)
    })

    return mutation;
};

