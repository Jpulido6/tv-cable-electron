import { api } from "./api"


export const obtenerIngresosDiarios = async (): Promise<number> => {
    const response = await api.get<number>('ingresos/ingresos_diarios')    
    return response.data || 0
    
}
export const obtenerIngresosMensuales = async (): Promise<number> => {
    const response = await api.get<number>('ingresos/ingresos_mensuales')    
    return response.data || 0

}
