import { api } from "./api"


interface GastosData {
    nombre: string
    descripcion: string
    valor: number
}

interface GastosResponse {
    id: number;
    nombre: string;
    descripcion: string;
    fechaGasto: Date;
    valor: number;
}



export const registrarGasto = async ( data : GastosData ) :Promise<GastosResponse>=>{
    const response = await api.post<GastosResponse>('gastos/registrar_gasto', data)
    console.log('data: ', response.data)
    return response.data
}

export const obtenerGastos = async () :Promise<GastosResponse[]>=>{
    const response = await api.get<GastosResponse[]>('gastos/')
    console.log('data: ', response.data)
    return response.data
}