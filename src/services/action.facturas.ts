import { Pago, Usuario } from "./actions.usuarios";
import { api } from "./api"

interface FacturaResponse {
    resultado: {
        codigoFactura: string
        fechaEmision: Date
        montoTotal: number
        usuario: Usuario
        pagos: Pago[]
    }
}
interface Facturas {

    codigoFactura: string
    fechaEmision: Date
    id: number
    id_usuario: number
    montoTotal: number

}
export const buscarFactura = async (codigo: string): Promise<FacturaResponse> => {
    const response = await api.get<FacturaResponse>(`facturas/buscar_factura/${codigo}`)

    return {
        resultado: {
            ...response.data.resultado,
            fechaEmision: new Date(response.data.resultado.fechaEmision)
        }

    }

}

export const generarFacturas = async (): Promise<Facturas[]> => {
    const response = await api.post<Facturas[]>('facturas/generar_facturas')
    console.log('FACTURAS =>', response.data)
    return response.data
}