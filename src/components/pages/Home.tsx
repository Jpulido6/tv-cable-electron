
import Tabla from '../common/Tabla'

const Home = () => {
    return (
        <>
            <div className="flex justify-center items-center h-full w-full ">
                <div className="h-1/2 w-full">
                    <div className="w-full mt-8 ">
                        <Tabla columns={colums} row={rows} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home

const colums = [
    {
        name: 'id',
        type: 'string'
    },
    {
        name: 'Nombres',
        type: 'string'
    },
    {
        name: 'Dirección',
        type: 'string'
    },
    {
        name: 'Email',
        type: 'string'
    },
    {
        name: 'Saldo',
        type: 'string'
    },
]

const rows = [
    {
        name: 'Carlos',
    },
    {
        name: 'Pedro',
    }
]
