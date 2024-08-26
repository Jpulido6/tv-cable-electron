
import { Autocomplete, AutocompleteItem, Button, Textarea } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Toaster } from 'sonner';
import { useUsuarios } from '../../hooks/usuarios/useUsuarios';
import { useState } from 'react';
import { useTecnicos } from '../../hooks/tecnico/useTecnicos';
import Loading from '../common/Loading';
import { useServiciosMutation } from '../../hooks/servicios/useServiciosMutation';

interface FormInput {
    descripcion: string
    idUsuario: number
    idTecnico: number

}

const Servicios = () => {
    const [selectedIdUsuario, setSelectedIdUsuario] = useState<number>()
    const [selectedIdTecnico, setSelectedIdTecnico] = useState<number>()
    const { control, handleSubmit } = useForm<FormInput>()

    const usuario = useUsuarios()
    const tecnico = useTecnicos()

    const mutate = useServiciosMutation()
    

    if(!usuario.data || !tecnico.data){
        return <Loading />
    }

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        if (selectedIdUsuario && selectedIdTecnico) {
            data.idUsuario = selectedIdUsuario
            data.idTecnico = selectedIdTecnico
            mutate.mutate(data)
        }

    }

    const onSelectionIdUsuario = (key: React.Key) => {
        setSelectedIdUsuario(Number(key))
    }
    const onSelectionIdTecnico = (key: React.Key) => {
        setSelectedIdTecnico(Number(key))
    }
    return (
        <>
            <Toaster />
            <div className='flex justify-center items-center h-[80vh] '>
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                    <div className='flex flex-col space-y-1.5 p-4'>
                        <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Registrar Servicio</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
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
                                name='idUsuario'
                                render={({ field }) => (
                                    <Autocomplete
                                        label="Selecciona el usuario"
                                        defaultItems={usuario.data}
                                        onSelectionChange={onSelectionIdUsuario}
                                        value={field.value}
                                        onChange={field.onChange}
                                    >
                                        {
                                            (item) => <AutocompleteItem key={item.id}>{item.nombre}</AutocompleteItem>
                                        }

                                    </Autocomplete>

                                )}
                            />

                        </div>
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='idTecnico'
                                render={({ field }) => (
                                    <Autocomplete
                                        label="Selecciona el técnico"
                                        defaultItems={tecnico.data}
                                        onSelectionChange={onSelectionIdTecnico}
                                        value={field.value}
                                        onChange={field.onChange}
                                        
                                    >
                                        {
                                            (item) => <AutocompleteItem key={item.id} >{item.nombres}</AutocompleteItem>
                                        }

                                    </Autocomplete>

                                )}
                            />

                        </div>
                        <Button type='submit' className='w-full bg-foreground text-background' >
                            Agregar servicio
                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Servicios
