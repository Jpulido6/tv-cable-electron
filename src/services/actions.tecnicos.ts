import { api } from "./api"

interface TecnicoData {
    nombre: string
}

interface TecnicoResponse {
    id: number;
    nombres: string;
}

export const crearTecnico = async (data: TecnicoData): Promise<TecnicoResponse> => {
    const response = await api.post<TecnicoResponse>("/tecnicos/crear_tecnico", data)
    console.log(response.data)
    return response.data    
}

export const obtenerTecnico = async (): Promise<TecnicoResponse[]> => {
    const response = await api.get<TecnicoResponse[]>("/tecnicos/tecnicos")
    console.log(response.data)
    return response.data

}