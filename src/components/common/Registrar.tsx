import React from 'react'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { Control, Controller } from 'react-hook-form'


interface FormInput {
    nombre: string,
    direccion: string,
    telefono: string,
    email: string,
}
const barrio = [
    { key: 1, label: 'San José de oriente' },
    { key: 2, label: 'Betania' },

]
interface Props {
    control: Control<FormInput>,
    onSubmit?: () => void
}
const Registrar: React.FC<Props> = ({ control, onSubmit }) => {


    return (
        <div className="flex w-full p-4">
            <form onSubmit={onSubmit} className='w-full'>

                <div className="mb-4">
                    <div className="flex w-full">
                        <Controller
                            control={control}
                            name='nombre'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Escribe el nombre del usuario"
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
                </div>
                <div className="mb-4">
                    <Controller
                        control={control}
                        name='direccion'
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select

                                {...field}
                                className='text-white'
                                label="Selecciona el barrio"
                            >
                                {
                                    barrio.map((item) =>
                                        <SelectItem key={item.label} value={field.value} onChange={field.onChange}>{item.label}</SelectItem>)
                                }

                            </Select>
                        )}
                    />
                </div>
                <div className="mb-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Controller
                            control={control}
                            name='email'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Escribe el email del usuario"
                                    type="email"
                                    label="Email"
                                    variant="bordered"
                                    className="w-full"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                    </div>
                </div>


                <div className="mb-4">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Controller
                            control={control}
                            name='telefono'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Escribe el teléfono del usuario"
                                    type="text"
                                    label="Teléfono"
                                    variant="bordered"
                                    className="w-full"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />

                    </div>
                </div>



            </form>

        </div>
    )
}

export default Registrar
