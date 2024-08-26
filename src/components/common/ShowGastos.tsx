import React from 'react'
import { formatearMoneda } from '../../utils/formatMoneda'

interface ShowGastosProps {
    gastos: {
        id: number
        nombre: string
        descripcion: string
        fechaGasto: Date
        valor: number
    }[]

}

const ShowGastos: React.FC<ShowGastosProps> = ({ gastos }) => {

    const gastosByMonth = gastos.filter(({ fechaGasto }) => {
        const fecha = new Date(fechaGasto)
        const ahora = new Date()

        return fecha.getFullYear() === ahora.getFullYear() && fecha.getMonth() === ahora.getMonth()
    })



    const showGastos = gastosByMonth.map(({ nombre, descripcion, fechaGasto, valor }) => {
        const fecha = new Date(fechaGasto)
        return (
            <div className="rounded-lg border text-card-foreground shadow-sm">
                <div className="p-4 flex items-center justify-between gap-2" >
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{`Mes ${fecha.getMonth().toLocaleString()}`}</h3>
                    <div>
                        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{nombre.toLocaleUpperCase()}</h3>
                        <p className="text-foreground mt-4 mb-4 leading-none tracking-tight">{descripcion}</p>
                        <p className="text-foreground mt-4 mb-4 leading-none tracking-tight">{fecha.toDateString()}</p>
                        <p className="text-foreground font-bold leading-none tracking-tight whitespace-nowrap ">$ {formatearMoneda(valor.toString())}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {

                showGastos.length > 0
                    ? showGastos
                    : <div className='w-full h-[60vh] flex-col'>
                        <>
                            <p className='text-foreground mt-4 mb-4 leading-none tracking-tight text-center'>No hay gastos este mes</p>
                            {
                                gastos.map((gasto) => {
                                    <div className="rounded-lg border text-card-foreground shadow-sm">
                                        <div className="p-4 flex items-center justify-between gap-2" >
                                            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{`Mes ${new Date(gasto.fechaGasto).getMonth().toLocaleString()}`}</h3>
                                            <div>
                                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{gasto.nombre.toLocaleUpperCase()}</h3>
                                                <p className="text-foreground mt-4 mb-4 leading-none tracking-tight">{gasto.descripcion}</p>
                                                <p className="text-foreground mt-4 mb-4 leading-none tracking-tight">{new Date(gasto.fechaGasto).toDateString()}</p>
                                                <p className="text-foreground font-bold leading-none tracking-tight whitespace-nowrap ">$ {formatearMoneda(gasto.valor.toString())}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </>
                    </div>
            }

        </div>
    )
}

export default ShowGastos
