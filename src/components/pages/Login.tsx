import React, { useState } from 'react'
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'
import logo from "../../assets/images/tvcable .jpg"
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom'



const Login: React.FC = () => {
    const [value, setValue] = useState('')

    const nav = useNavigate()

    return (
        <>
            <div className="flex justify-center items-center h-screen">


                <div className="w-1/2 h-screen hidden lg:flex lg:items-center lg:justify-center ">
                    <Image
                        alt="tv cable San Jose"
                        src={logo}
                        className="w-full h-[600px] object-cover"
                    />

                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-3xl font-semibold mb-4">Iniciar Sesión</h1>
                    <form className="w-full">

                        <div className="mb-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

                                {/* <Controller
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

                                        />
                                    )}
                                /> */}
                                <div className="p-inputgroup flex-1">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Username" />
                                </div>


                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

                                {/* <Controller
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
                                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
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
                                /> */}
                                <div className="p-inputgroup flex-1">

                                    <FloatLabel>
                                        <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
                                        <label htmlFor="password">Password</label>
                                    </FloatLabel>

                                </div>
                            </div>

                        </div>

                        <div className="mb-10 flex items-center">

                        </div>

                        <Button type="submit" onClick={() => { nav("/inicio") }} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8  bg-[#0070f3]  text-white font-light transition duration-200 ease-linear rounded-md py-2  w-full">
                            <span>Iniciar Sesión</span>
                            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login
