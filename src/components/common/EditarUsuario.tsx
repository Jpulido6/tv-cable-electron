// import { Input, Select, SelectItem } from '@nextui-org/react';
// import React from 'react';
// import { Control, Controller, useForm } from 'react-hook-form';
// import { useUsuarioById } from '../../hooks/useUsuarios';

// interface FormInput {
//     nombre: string;
//     direccion: string;
//     telefono: string;
//     estado: string;
//     email: string;
// }

// interface Props {
//     id: number;
//     control: Control<FormInput>;
//     onSubmit?: () => void;
// }
// interface SelectItem {
//     key: string;
//     label: string;
// }

// const EditarUsuario: React.FC<Props> = ({ id, control, onSubmit }) => {

//     const { data, isLoading, isFetching } = useUsuarioById(id);    

//     const { reset } = useForm<FormInput>({
//         defaultValues: {
//             nombre: '',
//             direccion: '',
//             telefono: '',
//             estado: '',
//             email: '',

//         }
//     })

//     React.useEffect(() => {

//         if (data) {

//             const { usuario } = data
//             console.log('USUARIO =>',usuario)
//             reset({
//                 nombre: usuario.nombre,
//                 direccion: usuario.direccion,
//                 telefono: usuario.telefono,
//                 estado: usuario.estado === true ? 'Activo' : 'Inactivo',
//                 email: usuario.email,
//             });            
//         }
//     }, [data, id,reset])

//     if (isLoading || !data) {
//         return <div className='w-full h-[50vh] flex justify-center items-center'>
//             <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
//         </div>
//     }
//     if(isFetching){
//         return <div className='w-full h-[50vh] flex justify-center items-center'>
//             <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
//         </div>
//     }
//     return (
//         <div>
//             <div className="flex w-full p-4">
//                 <form onSubmit={onSubmit} className='w-full'>
//                     <div className="mb-4">
//                         <div className="flex w-full">
//                             <Controller
//                                 control={control}
//                                 name="nombre"
//                                 rules={{ required: true }}                                
//                                 render={({ field }) => (
//                                     <Input
//                                         {...field}
//                                         placeholder="Escribe el nombre del usuario"
//                                         type="text"
//                                         label="Nombres"
//                                         variant="bordered"
//                                         className="w-full"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                     />
//                                 )}
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <Controller
//                             control={control}
//                             name="direccion"
//                             rules={{ required: true }}
//                             render={({ field }) => (
//                                 <Select
//                                     {...field}
//                                     className='text-white'
//                                     label="Selecciona el barrio"                                    
//                                     selectedKeys={[field.value]}
//                                 >
//                                     {barrios.map((item) => (
//                                         <SelectItem
//                                             key={item.key}
//                                             value={item.label}
//                                         >
//                                             {item.label}
//                                         </SelectItem>
//                                     ))}
//                                 </Select>
//                             )}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <Controller
//                             control={control}
//                             name="telefono"
//                             rules={{ required: true }}
//                             render={({ field }) => (
//                                 <Input
//                                     {...field}
//                                     placeholder="Escribe el teléfono del usuario"
//                                     type="text"
//                                     label="Teléfono"
//                                     variant="bordered"
//                                     className="w-full"
//                                     value={field.value}
//                                     onChange={field.onChange}
//                                 />
//                             )}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
//                             <Controller
//                                 control={control}
//                                 name="email"
//                                 rules={{ required: true }}                                
//                                 render={({ field }) => (
//                                     <Input
//                                         {...field}
//                                         placeholder="Escribe el email del usuario"
//                                         type="email"
//                                         label="Email"
//                                         variant="bordered"
//                                         className="w-full"
//                                         value={field.value}
//                                         onChange={field.onChange}
//                                     />
//                                 )}
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
//                             <Controller
//                                 control={control}
//                                 name="estado"
//                                 rules={{ required: true }}
//                                 render={({ field }) => (
//                                     <Select
//                                         {...field}
//                                         className='text-white'
//                                         label="Selecciona el estado del usuario"
//                                         defaultSelectedKeys={[field.value]}
//                                     >
//                                         {estado.map((item) => (
//                                             <SelectItem
//                                                 key={item.key}
//                                                 value={item.label}
//                                             >
//                                                 {item.label}
//                                             </SelectItem>
//                                         ))}
//                                     </Select>
//                                 )}
//                             />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditarUsuario;

// const barrios: SelectItem[] = [
//     { key: 'San Jose de oriente', label: 'San Jose de oriente' },
//     { key: 'Betania', label: 'Betania' },
// ]

// const estado : SelectItem[] =[
//     { key: 'Activo', label: 'Activo' },
//     { key: 'Inactivo', label: 'Inactivo' },
// ]

import { Input, Select, SelectItem } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useForm, Controller, Control } from 'react-hook-form';
import { useUsuarioById } from '../../hooks/usuarios/useUsuarios';
import Loading from './Loading';

interface FormInput {
    nombre: string;
    direccion: string;
    telefono: string;
    estado: string;
    email: string;
}

interface Props {
    id: number;
    control: Control<FormInput>;
    onSubmit?: () => void;
}

interface SelectItem {
    key: string;
    label: string;
}

const EditarUsuario: React.FC<Props> = ({ id, onSubmit, control }) => {
    const { reset } = useForm<FormInput>({
        defaultValues: {
            nombre: '',
            direccion: '',
            telefono: '',
            estado: '',
            email: '',
        }
    });

    const { data, isLoading, isFetching } = useUsuarioById(id);

    useEffect(() => {
        if (data) {
            const { usuario } = data;
            console.log('USUARIO =>', usuario);
            control._reset({
                nombre: usuario.nombre,
                direccion: usuario.direccion,
                telefono: usuario.telefono,
                estado: usuario.estado ? 'Activo' : 'Inactivo',
                email: usuario.email,
            });
        }
    }, [data, reset, control]);

    if (isLoading || !data || isFetching) {
        return (
            <Loading/>
        );
    }

    return (
        <div>
            <div className="flex w-full p-4">
            <form onSubmit={onSubmit} className='w-full'>
                    <div className="mb-4">
                        <Controller
                            control={control}
                            name="nombre"
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

                    <div className="mb-4">
                        <Controller
                            control={control}
                            name="direccion"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="text-white"
                                    label="Selecciona el barrio"
                                    selectedKeys={[field.value]}
                                    onChange={(value) => field.onChange(value)}
                                >
                                    {barrios.map((item) => (
                                        <SelectItem
                                            key={item.key}
                                            value={item.label}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>

                    <div className="mb-4">
                        <Controller
                            control={control}
                            name="telefono"
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

                    <div className="mb-4">
                        <Controller
                            control={control}
                            name="email"
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

                    <div className="mb-4">
                        <Controller
                            control={control}
                            name="estado"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    className="text-white"
                                    label="Selecciona el estado del usuario"
                                    selectedKeys={[field.value]}
                                    onChange={(value) => field.onChange(value)}
                                >
                                    {estado.map((item) => (
                                        <SelectItem
                                            key={item.key}
                                            value={item.label}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarUsuario;

const barrios: SelectItem[] = [
    { key: 'San jose de oriente', label: 'San jose de oriente' },
    { key: 'Betania', label: 'Betania' },
];

const estado: SelectItem[] = [
    { key: 'Activo', label: 'Activo' },
    { key: 'Inactivo', label: 'Inactivo' },
];
