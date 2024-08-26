import { useState } from 'react'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Toaster } from 'sonner'
enum RolUser {
    Admin,
    user
}

interface FormInput {
    nombre: string
    email: string
    password: string
    rol: RolUser
}
const Usuario = () => {
    const [isVisible, setIsVisible] = useState<boolean>()

    const toggleVisible = () => setIsVisible(!isVisible)

    const { control, handleSubmit } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data)

    }
    return (
        <>
            <Toaster />
            <div className='flex justify-center items-center h-[80vh] '>
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 w-96 m-auto'>
                    <div className='flex flex-col space-y-1.5 p-4'>
                        <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-center">Registrar Usuario</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5' >
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='nombre'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Escribe los nombres"
                                        type="text"
                                        label="Nombres"
                                        variant="bordered"
                                        className="w-full"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                        </div>

                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='email'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        placeholder="Escribe tu Email"
                                        type="email"
                                        label="Email"
                                        variant="bordered"
                                        className="w-full"
                                        value={field.value}
                                        onChange={field.onChange}
                                        startContent={<i className="pi pi-envelope text-default-400 "
                                        />}
                                    />
                                )}
                            />

                        </div>
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='password'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Contraseña"
                                        variant="bordered"
                                        placeholder="••••••••"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisible}>
                                                {isVisible ? (
                                                    <i className="pi pi-eye  text-lg text-default-400 pointer-events-none" />
                                                ) : (
                                                    <i className="pi pi-eye-slash text-lg  text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="w-full"
                                        value={field.value}
                                        onChange={field.onChange}
                                        isRequired

                                    />
                                )}
                            />
                        </div>
                        <div className='mb-4'>
                            <Controller
                                control={control}
                                name='rol'
                                render={({ field }) => (
                                    <Select
                                        label="Selecciona el rol"                                        
                                        value={field.value}
                                        onChange={field.onChange}
                                    >

                                        <SelectItem key={RolUser.Admin}>{RolUser.Admin}</SelectItem>
                                        <SelectItem key={RolUser.user}>{RolUser.user}</SelectItem>
                                    </Select>
                                )}
                            />
                        </div>
                        <Button type='submit' className='w-full bg-foreground text-background' >
                            Agregar Usuario
                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Usuario
