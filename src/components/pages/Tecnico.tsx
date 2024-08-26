import { Button, Input } from '@nextui-org/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Toaster } from 'sonner'
import { useTecnicoMutation } from '../../hooks/tecnico/useTecnicoMutation'
interface FormInput{
    nombre:string
}
const Tecnico = () => {

    const mutate = useTecnicoMutation()

    const { control, handleSubmit} = useForm<FormInput>()
    const onSubmit: SubmitHandler<FormInput> = (data)=>{
        mutate.mutate(data)
    } 
    return (
        <>
        <Toaster />
            <div className='flex justify-center items-center h-[80vh] '>
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                    <div className='flex flex-col space-y-1.5 p-4'>
                        <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Registrar Técnico</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='nombre'
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        label="Nombres"
                                        placeholder='Escribe los nombres del técnico'
                                        className='input input-bordered w-full'
                                        {...field}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                        </div>
                        
                        <Button type='submit' className='w-full bg-foreground text-background' >
                            Agregar Técnico
                        </Button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Tecnico
