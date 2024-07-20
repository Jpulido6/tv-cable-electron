import { Button, Input, Textarea } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { formatearMoneda } from '../../utils/formatMoneda';
import { useGastosMutation } from '../../hooks/useGastosMutation';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';

interface FormInput {
    nombre: string;
    descripcion: string;
    valor: number;
}
const Gastos = () => {
    const toast = useRef<Toast>(null)

    const { control, handleSubmit } = useForm<FormInput>()

    const mutation = useGastosMutation()

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        data.valor = parseInt(data.valor.toString())
        mutation.mutate( data )     

    }
    return (
        <>
        <Toast  ref={toast} />
            <div className='flex justify-center items-center h-[80vh] '>
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                    <div className='flex flex-col space-y-1.5 p-4'>
                        <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Registrar gasto</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='nombre'
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder='Nombre'
                                        className='input input-bordered w-full'
                                        {...field}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                        </div>

                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='descripcion'
                                render={({ field }) => (
                                    <Textarea
                                        type="text"
                                        placeholder='Escribe la descripción'
                                        className='input input-bordered w-full'
                                        {...field}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                        </div>

                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='valor'
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder='Valor del gasto'
                                        className='input input-bordered w-full'
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">$</span>
                                            </div>
                                        }
                                        {...field}
                                        value={field.value ? formatearMoneda(field.value.toString()) : ''}
                                        onChange={(e) => {
                                            const valorNumerico = e.target.value.replace(/\D/g, '');
                                            field.onChange(valorNumerico);
                                        }}
                                    />
                                )}
                            />

                        </div>
                        <Button type='submit' className='w-full bg-foreground text-background' >
                            Agregar gasto
                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Gastos
