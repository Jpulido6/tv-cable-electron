
import { useEffect } from 'react'
import { useUsuarios } from '../../hooks/useUsuarios'
import { GridCard } from '../common/GridCard'
import { LatestUser } from '../common/LatestUser'
import Tabla from '../common/Tabla'
import { useIngresosMensuales, useIngresosDiarios } from '../../hooks/useIngresos'
import { formatearMoneda } from '../../utils/formatMoneda'
import Loading from '../common/Loading'


const Home = () => {

    const usuarios = useUsuarios()
    const ingresosDiarios = useIngresosDiarios()
    const ingresosMensuales = useIngresosMensuales()

    useEffect(() => {
        usuarios.refetch()
    }, [usuarios])

    useEffect(() => {
        ingresosDiarios.refetch()
    }, [ingresosDiarios])

    useEffect(() => {
        ingresosMensuales.refetch()
    }, [ingresosMensuales])

    if (usuarios.isLoading || ingresosDiarios.isLoading || ingresosMensuales.isLoading) {
        return (
            <Loading />
        )
    }

    if (!usuarios.data || typeof ingresosDiarios.data !== 'number' || typeof ingresosMensuales.data !== 'number') {
        return (
            <Loading />
        )
    }


    return (
        <>
            <div className="grid">
                <div className="p-6 flex items-center justify-start gap-4">
                    <GridCard title="Total clientes" subtitle={usuarios.data.length.toString()} icon="users" />
                    <GridCard title="Pagos diarios" subtitle={'$' + formatearMoneda(ingresosDiarios.data.toString())} icon="dollar" />
                    <GridCard title="Pagos Mensuales" subtitle={'$' + formatearMoneda(ingresosMensuales.data.toString())} icon="credit-card" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-4 h-[450px] overflow-y-auto'>
                        <Tabla users={usuarios.data} />
                    </div>
                </div>

                <div className='col-span-1'>
                    <LatestUser user={usuarios.data} />

                </div>
            </div>

        </>
    )
}

export default Home