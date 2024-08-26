import Loading from "../common/Loading"
import { PDFViewer } from "@react-pdf/renderer"
import { useUsuarioById, useUsuarios, } from "../../hooks/usuarios/useUsuarios"
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react"
import React, { useState } from "react"
import GenerarFactura from "../common/GenerarFactura"
// import { DatosUsuario } from "../../services/actions.usuarios"
import { enviarEmail } from "../../services/enviarEmail"

const Factura = () => {

    const [selectedId, setSelectedId] = useState<number>()

    const usuario = useUsuarios()
    const usuarios = useUsuarioById(selectedId ? selectedId : 1)

    if (!usuarios.data) {
        return <Loading />
    }

    if (usuarios.isLoading) {
        return <Loading />
    }

    if (usuarios.isError) {
        return <p>Error al cargar los datos</p>;
    }


    const onSelectionChange = (key: React.Key) => {
        setSelectedId(Number(key))
    }


    // const generateBlob = async (user: DatosUsuario): Promise<Blob> => {
    //     const blob = await pdf(<GenerarFactura user={user} />).toBlob()

    //     return blob
    // }

    return (
        <>
            <div className='flex justify-center items-center w-full h-[80vh] flex-col'>

                <div className="w-full h-40 flex justify-center items-center ">
                    <Autocomplete
                        className="max-w-xs"
                        label="Selecciona el usuario"
                        defaultItems={usuario.data}
                        onSelectionChange={onSelectionChange}
                    >
                        {
                            (item) => <AutocompleteItem key={item.id} >{item.nombre}</AutocompleteItem>
                        }
                    </Autocomplete>
                </div>
                {
                    !usuarios.data ? <Loading /> :
                        (
                            <>
                                <div className="flex w-full h-16">
                                    <Button onClick={async () => {
                                        

                                        await enviarEmail()
                                    }} className="bg-foreground text-background">Enviar emails</Button>
                                </div>
                                <PDFViewer
                                    style={{ width: '100%', height: '100%', border: '24px' }}

                                >
                                    <GenerarFactura user={usuarios.data} />

                                </PDFViewer>

                            </>
                        )}

            </div >

        </>
    )
}

export default Factura
