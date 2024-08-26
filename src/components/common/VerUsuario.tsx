
import React from 'react'
import { useUsuarioById } from '../../hooks/usuarios/useUsuarios'
import { formatearMoneda } from '../../utils/formatMoneda'



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

                <p className='font-poppins-bold'>Factura: <span className="font-poppins">{factura.codigoFactura}</span> </p>
                <p className='font-poppins-bold'>Fecha de Emision: <span className="font-poppins">{new Date(factura.fechaEmision).toLocaleDateString('es-ES',{
                        year: '2-digit',
                        month: 'short',
                        day: 'numeric'
                    })}</span> </p>
                <p className='font-poppins-bold'>Monto Total: <span className="font-poppins">${formatearMoneda(factura.montoTotal.toString())}</span> </p>
                {
                    factura.pagos.length === 1 ? (
                        <p className='text-green-500 font-poppins-bold'>{factura.pagos.length === 1 && 'Factura Pagada'}</p>
                    ) : (
                        <p className='text-red-500 font-poppins-bold'>Factura no pagada</p>
                    )
                }

            </div>
        )
    }) || []

    const pagos = data?.usuario.facturas?.flatMap((factura) => {
        return factura.pagos.map((pago, index) => {
            return (
                <div key={index} className='p-4 bg-gray-100 rounded mb-4'>
                    <p className='font-poppins-bold'>ID: <span className='font-poppins'>{pago.id}</span></p>
                    <p className='font-poppins-bold'>Factura pagada:<span className='font-poppins'> {factura.pagos.length > 0 ? factura.codigoFactura : ''}</span></p>
                    <p className='font-poppins-bold'>Fecha: <span className='font-poppins'>{new Date(pago.fechaPago!).toLocaleDateString('es-ES', {
                        year: '2-digit',
                        month: 'short',
                        day: 'numeric'
                    })}</span></p>
                    <p className='font-poppins-bold'>Total Pagado: <span className='font-poppins'>${formatearMoneda(pago.montoPagado.toString())}</span></p>
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
                                <h1 className='text-2xl font-bold mb-4 font-poppins-bold' >Cliente</h1>
                                <p className=' font-poppins-bold'>Nombre: <span className='font-poppins'>{data.usuario.nombre}</span> </p>
                                <p className='font-poppins-bold'>Dirección: <span className='font-poppins'>{data.usuario.direccion}</span></p>
                                <p className='font-poppins-bold'>Teléfono: <span className='font-poppins'>{data.usuario.telefono}</span></p>
                                <p className='font-poppins-bold'>Fecha de Inscripción:<span className='font-poppins'>{new Date(data.usuario.fechaInscripcion).toLocaleDateString('es-ES', {
                                    year: '2-digit',
                                    month: 'short',
                                    day: 'numeric'
                                })}</span> </p>
                                <p className='font-poppins-bold'>Saldo: <span className='font-poppins'>${formatearMoneda(data.saldo.toString())}</span></p>
                            </div>
                            <div className='p-5 bg-white rounded shadow overflow-y-auto h-80'>
                                <h1 className='text-2xl font-bold mb-4 font-poppins-bold'>Facturas </h1>
                                {
                                    facturas?.length === 0 ? (
                                        <p className='font-poppins-bold'>No tiene facturas</p>
                                    ) : (
                                        facturas
                                    )

                                }

                            </div>
                            <div className='p-5 bg-white rounded shadow overflow-y-auto h-80'>
                                <h1 className='text-2xl font-bold mb-4 font-poppins-bold'>Pagos </h1>
                                <>
                                    {
                                        pagos?.length === 0 ? (
                                            <p className='font-poppins-bold'>No tiene pagos</p>
                                        ) : (
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
