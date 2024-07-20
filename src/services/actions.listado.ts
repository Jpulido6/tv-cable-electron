import { Usuario } from "./actions.usuarios"
import { api } from "./api"

export const listadoSanjose = async (): Promise<Usuario[]>=>{
    const response = await api.get<Usuario[]>('usuario/usuarios_sanjose')
    console.log(response.data)
    return response.data
}
export const listadoBetania = async (): Promise<Usuario[]> =>{
    const response = await api.get<Usuario[]>('usuario/usuarios_betania')

    return response.data
}