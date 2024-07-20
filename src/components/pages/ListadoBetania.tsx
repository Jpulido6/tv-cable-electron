
import { useListadoBetania } from '../../hooks/useListadoUsuarios'
import Loading from '../common/Loading'
import {  PDFViewer } from '@react-pdf/renderer'
import GenerarListado from '../common/GenerarListado'


const ListadoBetania = () => {

    const { data } = useListadoBetania()

    const barrio: string = "Betania"
    
    return (
        <>
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


        </>
    )
}

export default ListadoBetania
