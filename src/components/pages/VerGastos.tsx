import { useGastos } from '../../hooks/useGastos'
import { formatearMoneda } from '../../utils/formatMoneda'
import Loading from '../common/Loading'
// import { formatearFecha } from '../../utils/formatearFecha'

const VerGastos = () => {
    const { data, isLoading } = useGastos()

    if (isLoading) {
        return(
            <Loading/>
        )
    }

    if (!data) {
        return
    }


    const gasto = data.flatMap((gasto) => (
        <div className="rounded-lg border text-card-foreground shadow-sm">
            <div className="p-4 flex items-center justify-between gap-2" >
                <div>
                
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">{gasto.nombre.toLocaleUpperCase()}</h3>
                    <p className="text-foreground mt-4 mb-4 leading-none tracking-tight">{gasto.descripcion}</p>
                    <p className="text-foreground font-bold leading-none tracking-tight whitespace-nowrap ">$ {formatearMoneda(gasto.valor.toString())}</p>
                </div>
            </div>
        </div>
    ))
    

    return (
        <div className='flex w-full h-[80vh] p-5 justify-center mb-10'>
            <div>

                <div className='grid grid-cols-3 gap-2'>

                    {
                        data.length === 0 ? (
                            <p>No hay gastos</p>
                        ) : (
                            gasto
                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default VerGastos
