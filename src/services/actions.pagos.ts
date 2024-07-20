import { api } from "./api"

interface PagosData {
    codigoFactura: string
    montoPagado: number
}
interface PagosResponse {
    id: number;
    id_factura: number;
    fechaPago: Date;
    montoPagado: number;
}


export const registrarPago = async (data: PagosData): Promise<PagosResponse> =>{
    const response = await api.post<PagosResponse>('pagos/registrar_pago', data)
    return response.data
}