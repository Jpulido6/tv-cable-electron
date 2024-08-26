import { api } from "./api"

interface ServicioData{
    descripcion:string
    idUsuario: number
    idTecnico: number
}

interface ServicioResponse{
    id?: number;
    fecha: Date;
    descripcion: string;
    completado: boolean;
    id_tecnico: number;
    id_usuario: number;
}

interface Response{
    tecnico:{
        nombres:string
    }
    usuario:{
        nombre:string
        direccion:string
    }
    id?: number;
    fecha: Date;
    descripcion: string;
    completado: boolean;
    id_tecnico: number;
    id_usuario: number;

}

export const crearServicio = async (data: ServicioData):Promise<ServicioResponse>=>{
    const response = await api.post<ServicioResponse>("/servicios/crear_servicio", data)

    return response.data
}

export const obtenerServicios = async ():Promise<Response[]> =>{
    const response =  await api.get<Response[]>("/servicios/servicios")

    return response.data
}