import { UsuarioResponse } from '@/services/actions.usuarios'
import { Avatar } from 'primereact/avatar'
import React from 'react'


interface Props {
    user: UsuarioResponse[]
}

export const LatestUser: React.FC<Props> = ({ user }) => {

    const usuarioDelMes = user.filter(({ fechaInscripcion }) => {
        const fecha = new Date(fechaInscripcion)
        const ahora = new Date()

        return fecha.getFullYear() === ahora.getFullYear() && fecha.getMonth() === ahora.getMonth()
    })


    const usuariosOrdenados = usuarioDelMes.sort((a, b) => {
        const fechaA = new Date(a.fechaInscripcion)
        const fechaB = new Date(b.fechaInscripcion)

        const hoy = new Date()

        const esHoyA = fechaA.getDate() === hoy.getDate() && fechaA.getMonth() === hoy.getMonth() && fechaA.getFullYear() === hoy.getFullYear();
        const esHoyB = fechaB.getDate() === hoy.getDate() && fechaB.getMonth() === hoy.getMonth() && fechaB.getFullYear() === hoy.getFullYear();

        if (esHoyA && !esHoyB) return -1;
        if (!esHoyA && esHoyB) return 1;

        return fechaB.getTime() - fechaA.getTime();

    })

    const mostrarUsuarios = usuariosOrdenados.map(({ fechaInscripcion, nombre, id })=>{
        const fecha = new Date(fechaInscripcion);
        return(
            <div className="flex items-center" key={id}>
                <Avatar label={nombre.charAt(0)} size='large' shape='circle' style={{ backgroundColor: '#121212', color: '#ffffff' }} />
                <div className='ml-3'>
                    <div className='font-semibold'> {nombre} </div>
                    {fecha.getDate() === new Date().getDate()
                        ? <div className="text-sm text-gray-500">Hoy</div>
                        : <div className="text-sm text-gray-500">{fecha.toLocaleDateString()}</div>
                    }
                </div>
            </div>        
        )
    })


    return (
        <>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-y-auto h-[450px]">
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="whitespace-nowrap text-2xl font-poppins-bold leading-none tracking-tight">Últimos usuarios</h3>
                </div>
                <div className="p-4 space-y-4">                    
                    {
                        mostrarUsuarios.length > 0
                            ? mostrarUsuarios
                            : <div className="text-center text-gray-500">No hay usuarios registrados este mes.</div>
                    }

                </div>
            </div>
        </>
    )
}