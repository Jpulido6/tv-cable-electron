
import React from 'react'
import { useUsuarioById } from '../../hooks/useUsuarios'
import { formatearMoneda } from '../../utils/formatMoneda'

import BarcodeComponent from './BarcodeComponent'

interface Props {
    id: number
}
const VerUsuario: React.FC<Props> = ({ id }) => {

    const { data, isLoading } = useUsuarioById(id)

    if (isLoading) {
        return <div className='w-72 h-72 rounded flex justify-center items-center'>
            <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
        </div>
    }

    const facturas = data?.usuario.facturas?.map((factura, index) => {
        return (
            <div key={index} className='p-4 bg-gray-100 rounded mb-4'>
                <BarcodeComponent value={ factura.codigoFactura } />
                <p className='text-gray-700'>Factura: {factura.codigoFactura}</p>
                <p className='text-gray-700'>Fecha de Emision: {new Date(factura.fechaEmision).toLocaleDateString()}</p>
                <p className='text-gray-700'>Monto Total: ${formatearMoneda(factura.montoTotal.toString())}</p>
                {
                    factura.pagos.length === 1 ?(
                        <p className='text-green-500'>{factura.pagos.length ===1  && 'Factura Pagada'}</p>
                    ):(
                        <p className='text-red-500'>Factura no pagada</p>
                    )
                }
                
            </div>
        )
    })||[]

    const pagos = data?.usuario.facturas?.flatMap((factura) => {
        return factura.pagos.map((pago, index) => {
            return (
                <div key={index} className='p-4 bg-gray-100 rounded mb-4'>
                    <p className='text-gray-700'>ID: {pago.id}</p>
                    <p className='text-gray-700'>Factura pagada: { factura.pagos.length > 0 ? factura.codigoFactura : ''}</p>
                    <p className='text-gray-700'>Fecha: {new Date(pago.fechaPago!).toLocaleDateString()}</p>
                    <p className='text-gray-700'>Total Pagado: ${formatearMoneda(pago.montoPagado.toString())}</p>
                </div>
            )
        })
    }) || []

    return (
        <>
            {
                data && (
                    <div className='flex justify-center items-center w-full h-96 overflow-y-auto'>
                        <div className='grid grid-cols-3 gap-4 mt-8'>
                            <div className='p-5 bg-white rounded shadow'>
                                <h1 className='text-2xl font-bold mb-4'>Usuario</h1>
                                <p className=' text-gray-800 font-extrabold'>Nombre: {data.usuario.nombre}</p>
                                <p className='text-gray-800 font-bold'>Dirección: {data.usuario.direccion}</p>
                                <p className='text-gray-800 font-bold'>Teléfono: {data.usuario.telefono}</p>
                                <p className='text-gray-800 font-bold'>Fecha de Inscripción: {new Date(data.usuario.fechaInscripcion).toLocaleDateString()}</p>
                                <p className='text-gray-700 font-bold'>Saldo: ${formatearMoneda(data.saldo.toString())}</p>
                            </div>
                            <div className='p-5 bg-white rounded shadow overflow-y-auto h-80'>
                                <h1 className='text-2xl font-bold mb-4'>Facturas </h1>
                                {
                                    facturas?.length === 0 ?(
                                        <p className='text-gray-700'>No tiene facturas</p>
                                    ):(
                                        facturas
                                    )

                                }
                                
                            </div>
                            <div className='p-5 bg-white rounded shadow overflow-y-auto h-80'>
                                <h1 className='text-2xl font-bold mb-4'>Pagos </h1>
                                <>
                                    {
                                        pagos?.length === 0 ?(
                                            <p className='text-gray-700'>No tiene pagos</p>
                                        ):(
                                            pagos
                                        )
                                    }
                                    
                                </>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default VerUsuario
