import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useBuscarFacturas } from '../../hooks/useFacturas'
import { formatearMoneda } from '../../utils/formatMoneda'
import { formatearFecha2 } from '../../utils/formatearFecha'
import { usePagosMutation } from '../../hooks/usePagosMutation'
import { Toast } from 'primereact/toast'

interface FormInput {
    codigoFactura: string,
    montoPagado: number
}

const Pagos = () => {

    const toast = useRef<Toast>(null)
    const { control, handleSubmit } = useForm<FormInput>()
    const [codigo, setCodigo] = useState<string>()

    const { data, isLoading } = useBuscarFacturas(codigo!)
    const { mutate, error } = usePagosMutation()

    const onSubmit: SubmitHandler<FormInput> = (data) => {

        const newData = {
            ...data,
            montoPagado: Number(data.montoPagado)
        }
        mutate(newData)
        if (error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Error al registrar pago', life: 3000 });
        } else {
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Pago registrado', life: 3000 });
        }
        control._reset()
        setCodigo('')

    }
    useEffect(() => {
        if (codigo) setCodigo(codigo)
    }, [codigo])

    

    const datosFactura = data
        ? (
            <div className='flex flex-col gap-2'>
                <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight">Cliente: <span className='text-foreground font-extrabold'>{data.resultado.usuario.nombre}</span> </span>
                <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight">N° Factura: {data.resultado.codigoFactura}</span>
                <span className="whitespace-nowrap text-md font-bold leading-none tracking-tight ">Fecha Factura: {formatearFecha2(data.resultado.fechaEmision.toString())}</span>
                <span className="text-md font-bold leading-none tracking-tight">Valor: ${formatearMoneda(data.resultado.montoTotal?.toString())}</span>
                {
                    data.resultado.pagos.length > 0 ? (
                        <p className='text-green-500'>Factura fue pagada</p>
                    ) : (
                        <p className='text-red-500'>Factura no fue pagada</p>
                    )
                }
            </div>
        ) : (
            <p className="whitespace-nowrap text-md font-semibold leading-none tracking-tight text-center">No hay datos</p>
        )

    return (
        <div className='flex justify-center items-center h-[80vh] '>
            <Toast ref={toast} />
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                <div className='flex flex-col space-y-1.5 p-4'>
                    <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Registrar Pago</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
                    <div className="mb-4">
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Controller
                                control={control}
                                name='codigoFactura'
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Escribe el código de la factura"
                                        type="text"
                                        label="Código factura"
                                        variant="bordered"
                                        className="w-full"
                                        value={field.value}
                                        onChange={field.onChange}
                                        endContent={
                                            <Button onClick={() => setCodigo(field.value)}><i className='pi pi-search' /></Button>
                                        }
                                    />
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
                                    type='submit'
                                    className="w-full mt-8 bg-foreground text-background"
                                    isDisabled={data?.resultado.pagos.length > 0 ? true : false}
                                >
                                    Registrar Pago
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
