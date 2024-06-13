import { Avatar } from 'primereact/avatar'
import React from 'react'

interface Props {
    user: {
        id: number
        nombre: string
        fechaInscripcion: Date
    }[]
}

export const LatestUser: React.FC<Props> = ({ user }) => {



    return (
        <>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Últimos usuarios</h3>
                </div>
                <div className="p-4 space-y-4">
                    {
                        user.map(( user) => (
                            <>
                                {
                                    user.fechaInscripcion.getMonth() === new Date().getMonth()
                                        ? <div className="flex items-center" key={user.id}>
                                            <Avatar label={user.nombre.charAt(0)} size='large' shape='circle'style={{ backgroundColor: '#121212', color: '#ffffff' }} />
                                            <div className='ml-3' key={user.id}>
                                                <div className='font-semibold'> {user.nombre} </div>
                                                {
                                                    user.fechaInscripcion.getDate() === new Date().getDate()
                                                        ? <div className="text-sm text-gray-500">Hoy</div>
                                                        : <div className="text-sm text-gray-500">{user.fechaInscripcion.toLocaleDateString()}</div>
                                                }
                                            </div>
                                        </div>
                                        : ''
                                }
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}