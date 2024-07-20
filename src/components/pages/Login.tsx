import React, { useState } from 'react'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Input, Button, Image } from '@nextui-org/react'

import logo from "../../assets/images/TV.webp"
import { useLoginMutation } from '../../hooks/useLoginMutation'
import { Toast } from 'primereact/toast'

interface FormInput {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const { control, handleSubmit } = useForm<FormInput>()
    const mutation = useLoginMutation()

    const onSubmit: SubmitHandler<FormInput> = (data) => mutation.mutate( data )
    
    const toggleVisible = () => setIsVisible(!isVisible)


    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <Toast/>
                <div className="w-1/2 h-screen hidden lg:flex lg:items-center lg:justify-center ">
                    <Image
                        alt="tv cable San Jose"
                        src={logo}
                        className="w-full h-[600px] object-cover"
                    />

                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Iniciar Sesión</h1>
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

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
                        </div>

                        <div className="mb-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

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

                        </div>

                        <div className="mb-10 flex items-center">

                        </div>

                        <Button
                            type="submit"                            
                            className="bg-foreground text-background w-full"
                            size="lg"
                        >
                            Iniciar sesión
                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login
