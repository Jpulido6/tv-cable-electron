import { useState } from "react"
import { useForm } from "react-hook-form"
interface IFormInput {
    codigoFactura: string,
}
interface IResponse {
    nombreCliente: string
    numeroFactura: string,
    valorTotal: number
}
const usePagos = () => {
    const [cargando, setCargando] = useState<boolean>(false)
    const [factura, setFactura] = useState<IResponse>()
    const [ codigo, setCodigo]=useState<string>('')

    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            codigoFactura: '',
        }
    })

    const buscarFactura = (codigo: string): Promise<IResponse> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    nombreCliente: "Juan Pérez",
                    numeroFactura: "F-" + codigo,
                    valorTotal: 1000000
                })
            }, 5000);
        })
    }

    // const submit: SubmitHandler<IFormInput> = async (data) => {
    //     setCargando(true)
        
    //     try{
    //         const resultado = await buscarFactura(data)
    //         setFactura(resultado)
    //     }catch(error){         
    //         console.log(error)
    //     }
    //     setCargando(false)
    // }
    const handleSearch = async () =>{
        setCargando(true)
        
            try{
                const resultado = await buscarFactura(codigo)
                setFactura(resultado)
            }catch(error){         
                console.log(error)
            }
            setCargando(false)
    }


    return {
        cargando,
        control,
        factura,
        handleSubmit,
        handleSearch,
        setCodigo
    }
}

export default usePagos