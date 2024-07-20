import Loading from "../common/Loading"
import { PDFViewer } from "@react-pdf/renderer"
import GenerarFacturas from "../common/GenerarFacturas"
import { useUsuariosConFactura } from "../../hooks/useUsuarios"

const Facturas = () => {

    const usuarios = useUsuariosConFactura()


    if (!usuarios.data) {
        return <Loading />
    }

    if (usuarios.isLoading) {
        return <Loading />
    }

    if (usuarios.isError) {
        return <p>Error al cargar los datos</p>;
    }

    if (!usuarios.data || usuarios.data.length === 0) {
        return <p>No se encontraron usuarios con factura</p>;
    }
    return (
        <>
            {
                !usuarios.data ? <Loading /> :
                    (
                        <div className='flex justify-center items-center w-full h-[80vh]'>

                            <PDFViewer
                                style={{ width: '100%', height: '100%', border: '24px' }}

                            >
                                <GenerarFacturas usuarios={usuarios.data} />

                            </PDFViewer>


                        </div>
                    )
            }
        </>
    )
}

export default Facturas
