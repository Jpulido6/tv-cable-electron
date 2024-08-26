import { useQuery } from "@tanstack/react-query"
import { buscarFactura, generarFacturas } from "../../services/action.facturas"



export const useBuscarFacturas = (codigo: string) => {
    const facturasQuery = useQuery({
        queryKey: ["factura", codigo],
        queryFn: () => buscarFactura(codigo),
        enabled: !!codigo,
        retry: 2,
        
    })
    return facturasQuery;
}

export const useCrearFacturas = () => {

    const isCreatedFactura = () => {
        const ultimaFactura = localStorage.getItem('ultimaFactura')

        if (!ultimaFactura) return false;

        const ultimaFecha = new Date(ultimaFactura)

        const hoy = new Date()

        return ultimaFecha.getFullYear() === hoy.getFullYear() && ultimaFecha.getMonth() === hoy.getMonth()
    }

    const facturasQuery = useQuery({
        queryKey: ['facturas'],
        queryFn: async () => {
            if (isCreatedFactura()) {
                return {
                    data: [],
                    isLoading: false,
                    isError: false
                }
            }
            const data = await generarFacturas();
            if (data) {
                localStorage.setItem('ultimaFactura', new Date().toISOString())
            }
            return data;
        },
        enabled: true,
        retry: 2,

    })

    return facturasQuery
}