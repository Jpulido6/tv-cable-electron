import { useServicios } from '../../hooks/servicios/useServicios'
import Loading from '../common/Loading'
import { Button } from '@nextui-org/react'
import { Avatar } from 'primereact/avatar'

const VerServicios = () => {

    const servicio = useServicios()

    if (!servicio.data) {
        return <Loading />
    }

    const uppercase = (str:string): string=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className='flex justify-center h-[80vh] overflow-y-auto'>
            <div className='flex flex-col p-4'>
                <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Servicios</span>                
                <div className='grid grid-cols-3 gap-4 mt-10 '>
                    {
                        servicio.data.map((servicio) => (
                            <div className="w-full max-w-md h-64 p-6 grid gap-4 rounded-lg border text-card-foreground shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-md p-3 flex items-center justify-center">
                                        <Avatar label={servicio.usuario.nombre.charAt(0)} size='large' shape='circle' style={{ backgroundColor: '#121212', color: '#ffffff' }} />

                                    </div>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-poppins-bold">{servicio.usuario.nombre}</h3>
                                        <p className="text-muted-foreground">{uppercase(servicio.descripcion)}</p>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="text-muted-foreground font-poppins-bold">Dirección</div>
                                        <div>{servicio.usuario.direccion}</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-muted-foreground font-poppins-bold">Fecha</div>
                                        <div>{new Date(servicio.fecha).toLocaleDateString("es-ES",{
                                            year: '2-digit',
                                            month: 'short',
                                            day: 'numeric',                                            
                                        })}</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-muted-foreground font-poppins-bold">Realizado por:</div>
                                        <div>{servicio.tecnico.nombres}</div>
                                    </div>
                                </div>
                                <Button className="w-full bg-foreground text-background">{servicio.completado ? 'Servicio completado': 'Servicio sin completar'}</Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VerServicios
