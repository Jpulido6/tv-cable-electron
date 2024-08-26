
import { useEffect } from 'react'
import { useUsuarios } from '../../hooks/usuarios/useUsuarios'
import { GridCard } from '../common/GridCard'
import { LatestUser } from '../common/LatestUser'
import Tabla from '../common/Tabla'
import { useIngresosMensuales, useIngresosDiarios } from '../../hooks/ingresos/useIngresos'
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
                <div className="flex items-center justify-start gap-4">
                    <GridCard title="Total clientes" subtitle={usuarios.data.length} icon="users" />
                    <GridCard title="Pagos diarios" subtitle={ingresosDiarios.data} icon="dollar" />
                    <GridCard title="Pagos Mensuales" subtitle={ingresosMensuales.data} icon="credit-card" />
                </div>
            </div>
            <div className="grid grid-cols-[3fr,1fr] gap-6">
                <div className="">
                    <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-4 h-[450px] overflow-y-auto'>
                        <Tabla users={usuarios.data} />
                    </div>
                </div>
                <div className=''>
                    <LatestUser user={usuarios.data} />

                </div>
            </div>

        </>
    )
}

export default Home