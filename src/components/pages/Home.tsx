
import { GridCard } from '../common/GridCard'
import { LatestUser } from '../common/LatestUser'
import Tabla from '../common/Tabla'


const Home = () => {
    return (
        <>
            <div className="grid">
                <div className="p-6 flex items-center justify-between">
                    <GridCard title="Clientes activos" subtitle="24" icon="users" />
                    <GridCard title="Pagos diarios" subtitle="24" icon="paypal" />
                    <GridCard title="Ingresos diarios" subtitle="24" icon="credit-card" />
                    <GridCard title="New Customers" subtitle="24" icon="users" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-4'>
                        <Tabla />
                    </div>
                </div>

                <div className='col-span-1'>
                    <LatestUser user={user} />

                </div>
            </div>

        </>
    )
}

export default Home

const user = [
    {   
        id: 1,
        nombre: 'Carlos',
        fechaInscripcion: new Date()
    },
    {
        id: 2,
        nombre: 'Pedro',
        fechaInscripcion: new Date()
    },
    {
        id: 3,
        nombre: 'Maria',
        fechaInscripcion: new Date()
    },
    {
        id: 4,
        nombre: 'Luis',
        fechaInscripcion: new Date()
    }
]

const columns = [
    {
        name: 'id',
        key: 'id'
    },
    {
        name: 'Nombres',
        key: 'nombres'
    },
    {
        name: 'Dirección',
        key: 'direccion'
    },
    {
        name: 'Email',
        key: 'email'
    },
    {
        name: 'Saldo',
        key: 'saldo'
    },
]

const rows = [
    {
        id: '1',
        nombres: 'Carlos',
        direccion: 'San Jose',
        email: 'carlos@tv.com',
        saldo: 100
    },
    {
        id: '2',
        nombres: 'Pedro',
        direccion: 'San Jose',
        email: 'pedro@tv.com',
        saldo: 200
    },
    {
        id: '3',
        nombres: 'Maria',
        direccion: 'San Jose',
        email: 'maria@tv.com',
        saldo: 300
    }
]
