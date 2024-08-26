import {  PDFViewer } from '@react-pdf/renderer'
import { useListadoSanjose } from '../../hooks/listados/useListadoUsuarios'
import Loading from '../common/Loading'
import GenerarListado from '../common/GenerarListado'

const ListadoSanjose = () => {

    const { data } = useListadoSanjose()    

    const barrio: string = "San Jose de oriente"
    return (
        <div>

            {
                !data ? <Loading /> :
                (
                    <div className='flex justify-center items-center w-full h-[80vh]'>

                        <PDFViewer
                            style={{ width: '100%', height: '100%', border: '24px' }}

                        >
                            <GenerarListado
                                data={data}
                                barrio={barrio}
                            />

                        </PDFViewer>


                    </div>
                )
            }

        </div>
    )
}

export default ListadoSanjose
