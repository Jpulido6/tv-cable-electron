import { api } from "./api"

export interface DailyResponse {
    ingresosAnuales:{[key:string]:number}
    gastosAnuales:{[key:string]:number},
}

export const obtenerIngresosDiarios = async (): Promise<number> => {
    const response = await api.get<number>('ingresos/ingresos_diarios')
    return response.data || 0

}
export const obtenerIngresosMensuales = async (): Promise<number> => {
    const response = await api.get<number>('ingresos/ingresos_mensuales')
    return response.data || 0

}

export const getAmountDaily = async (): Promise<DailyResponse> => {
    const response = await api.get<DailyResponse>('/ingresos/semanal')
    return response.data
}
export const getAmountMonthly = async (): Promise<DailyResponse> => {
    const response = await api.get<DailyResponse>('/ingresos/mensuales')
    return response.data
}

export const postAmountDaily = async () => {

    const response = await api.post('ingresos/diarios')
    console.log(response.data)

    return response.data
}