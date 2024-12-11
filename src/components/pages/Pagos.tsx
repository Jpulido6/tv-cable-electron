import { useEffect, useMemo, useState } from 'react'
import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useBuscarFacturas } from '../../hooks/facturas/useFacturas'
import { formatearMoneda } from '../../utils/formatMoneda'
import { formatearFecha2 } from '../../utils/formatearFecha'
import { usePagosMutation } from '../../hooks/pagos/usePagosMutation'
import { toast, Toaster } from 'sonner'

interface FormInput {
    codigoFactura: string,
    montoPagado: number
}

const Pagos = () => {


    const { control, handleSubmit, setValue, getValues } = useForm<FormInput>()
    const [codigo, setCodigo] = useState<string>()
    const [dataPayment, setDataPayment] = useState<FormInput>({
        codigoFactura: '',
        montoPagado: 0
    })

    const { data, isLoading, } = useBuscarFacturas(codigo!)
    const { mutate } = usePagosMutation()

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        // const newData = {
        //     ...data,
        //     montoPagado: Number(data.montoPagado)
        // }
        // mutate(newData)
        // setCodigo('')

        setCodigo(data.codigoFactura)        

    }

    const realizarPago = () => {
        const { montoPagado } = getValues()

        if (montoPagado && Number(montoPagado) > 0) {
            setDataPayment(prev => ({
                ...prev,
                montoPagado: Number(montoPagado)
            }))
            
        mutate( {
            codigoFactura:codigo!,
            montoPagado: dataPayment.montoPagado        
        })

        }else{
            toast.error('Debe ingresar un monto mayor a 0')
        }
    }

        useEffect(() => {
            if (codigo) {
                setValue('codigoFactura', codigo)
            }

            return () => {
                setCodigo('')
            }
        }, [codigo, setValue])



        const datosFactura = useMemo(() => {
            if (!data) {
                return <p className="whitespace-nowrap text-md font-semibold leading-none tracking-tight text-center">No hay datos</p>
            }

            return (
                <div className='flex flex-col gap-2'>
                    <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight font-poppins-bold">
                        Cliente: <span className='text-foreground font-extrabold font-poppins'>{data.resultado.usuario.nombre}</span>
                    </span>
                    <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight font-poppins-bold">
                        N° Factura: <span className='text-foreground font-extrabold font-poppins'>{data.resultado.codigoFactura}</span>
                    </span>
                    <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight font-poppins-bold">
                        Fecha Factura: <span className='text-foreground font-extrabold font-poppins'>{formatearFecha2(data.resultado.fechaEmision.toString())}</span>
                    </span>
                    <span className="text-md font-bold leading-none tracking-tight font-poppins-bold">
                        Valor: <span className='text-foreground font-extrabold font-poppins'>${formatearMoneda(data.resultado.montoTotal?.toString())}</span>
                    </span>
                    {data.resultado.pagos.length > 0
                        ? <p className='text-green-500 font-poppins-bold'>Factura fue pagada</p>
                        : <p className='text-red-500 font-poppins-bold'>Factura no fue pagada</p>
                    }
                </div>
            )


        }, [data])

        return (
            <div className='flex justify-center items-center h-[80vh] '>
                <Toaster />
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                    <div className='flex flex-col space-y-1.5'>
                        <span className="whitespace-nowrap text-2xl font-poppins-bold leading-none tracking-tight">Registrar Pago</span>
                        <span className="text-sm font-poppins leading-none tracking-tight text-gray-500">Ingrese el código de factura para realizar el pago</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-10' >
                        <div className="mb-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                <Controller
                                    control={control}
                                    name='codigoFactura'
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <>
                                            <Input
                                                {...field}
                                                placeholder="Escribe el código de la factura"
                                                type="text"
                                                variant="bordered"
                                                className="w-full"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                            <div>
                                                <Button
                                                    className='bg-foreground text-background h-full'
                                                    // onClick={() => setCodigo(field.value)}
                                                    type='submit'
                                                >
                                                    <i className={`${isLoading ? ' pi pi-spin pi-spinner' : 'pi pi-search'}`} style={{ fontSize: '1rem' }} />
                                                </Button>
                                            </div>

                                        </>
                                    )}
                                />

                            </div>
                        </div>

                        <div className="mb-8">
                            <Accordion defaultExpandedKeys={["1"]}>
                                <AccordionItem
                                    title="Datos de la factura"
                                    aria-label='Datos de la factura'
                                    key="1"
                                    indicator={isLoading ? <div className='flex justify-center items-center'>
                                        <i className="pi pi-spin pi-spinner" style={{ fontSize: '1rem' }}></i>
                                    </div>
                                        : null}
                                >
                                    {datosFactura}
                                </AccordionItem>
                            </Accordion>

                        </div>
                        {
                            data && (
                                <>

                                    <div className="mb-4">
                                        <Controller
                                            control={control}
                                            name='montoPagado'
                                            rules={{ required: true, minLength: 4 }}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    label="Valor a pagar"
                                                    placeholder="0.00"
                                                    labelPlacement="outside"
                                                    startContent={
                                                        <div className="pointer-events-none flex items-center">
                                                            <span className="text-default-400 text-small">$</span>
                                                        </div>
                                                    }
                                                    value={field.value ? formatearMoneda(field.value.toString()) : ''}
                                                    onChange={(e) => {
                                                        const valorNumerico = e.target.value.replace(/\D/g, '');
                                                        field.onChange(valorNumerico);
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>


                                    <Button
                                        onClick={realizarPago}
                                        className="w-full mt-8 bg-foreground text-background"
                                        isDisabled={data?.resultado.pagos.length > 0 ? true : false}
                                    >
                                        Pagar factura
                                    </Button>
                                </>
                            )
                        }
                    </form>
                </div>
            </div>

        )
    }

    export default Pagos
