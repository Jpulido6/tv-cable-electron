import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../hooks/login/useLoginMutation'
import { Toaster } from 'sonner'

interface FormInput {
    name: string,
    email: string,
    password: string,
    role: string
}
const Customers = () => {
    const [isVisible, setIsVisible] = useState<boolean>()

    const { control, handleSubmit } = useForm<FormInput>()

    const mutation = useRegisterMutation()

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        data.role === "2" ? data.role = "USER" : data.role = "ADMIN" 
        mutation.mutate(data)
    }


    const toggleIsVisible = () => setIsVisible(!isVisible)
    return (
        <div className='w-full h-[80vh] items-center justify-center'>
            <Toaster/>
            <div className="w-96 max-w-md mx-auto rounded-lg border bg-card text-card-foreground p-5 ">
                <div className='flex flex-col'>
                    <span className='text-2xl font-extrabold'>Registrar Usuario</span>
                    <span className='text-sm text-gray-400'>Crear nueva cuenta</span>
                </div>
                <div className='mt-10'>
                    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-2">
                            <Controller
                                control={control}
                                name='name'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Nombres"
                                        placeholder="Escriba el nombre"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                control={control}
                                name='email'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Email"
                                        type="email"
                                        placeholder="Escriba el email"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                control={control}
                                name='password'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label="Contraseña"
                                        type={isVisible ? "text" : "password"}
                                        placeholder="Escriba una contraseña"
                                        value={field.value}
                                        onChange={field.onChange}
                                        endContent={
                                            isVisible
                                                ? <i className='pi pi-eye-slash cursor-pointer' onClick={toggleIsVisible} />
                                                : <i className="pi pi-eye cursor-pointer" onClick={toggleIsVisible} />
                                        }
                                    />
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                control={control}
                                name='role'
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="Rol"
                                        placeholder="Selecciona un rol"
                                        value={field.value}
                                        onChange={field.onChange}
                                    >
                                        <SelectItem key={1} value={"ADMIN"}>Admin</SelectItem>
                                        <SelectItem key={2} value={"USER"}>User</SelectItem>

                                    </Select>
                                )}
                            />

                        </div>
                        <div className="flex justify-end mt-8">
                            <Button type="submit" className='w-full bg-foreground text-background'>Registrar</Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Customers
