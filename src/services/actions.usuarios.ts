import { DatosResponse } from "../components/common/GenerarFacturas";
import { api } from "./api"
export interface UsuarioData {
    nombre: string;
    direccion: string;
    email: string;
    estado? : boolean | string;
    telefono: string;
}

export interface UsuarioResponse {
    id: number
    nombre: string
    direccion: string
    email: string
    telefono: string
    estado: boolean | string
    fechaInscripcion: Date
}

export interface Pago {
    id?: number;
    codigoFactura: string;
    fechaPago?: string;
    montoPagado: string;
}

export interface Factura {
    id: number;
    id_usuario: number;
    codigoFactura: string;
    fechaEmision: string;
    montoTotal: string;
    pagos: Pago[];
}

export interface Usuario {
    id?: number;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    fechaInscripcion: string;
    estado?: boolean | string;
    facturas: Factura[];
    saldo :number;
}

export interface Gasto {
    id?: number;
    nombre: string;
    descripcion: string;
    fechaGasto?: string;
    valor: number;
}

export interface DatosUsuario {
    usuario: Usuario;
    saldo: number;
}


export const crearUsuario = async (data: UsuarioData): Promise<UsuarioResponse> => {
    const response = await api.post<UsuarioResponse>('usuario/registrar_usuario', data)

    return response.data
}

export const actualizarUsuario = async (id: number, data: UsuarioData): Promise<UsuarioResponse> => {
    const response = await api.put<UsuarioResponse>(`usuario/actualizar_usuario/${id}`, data)
    return response.data
}

export const obtenerUsuarios = async (): Promise<UsuarioResponse[]> => {
    const response = await api.get<UsuarioResponse[]>('usuario/')
    return response.data.map(usuario => {
        return {
            ...usuario,
            fechaInscripcion: new Date(usuario.fechaInscripcion)
        }
    })

}

export const verUsuarioId = async (id: number): Promise<DatosUsuario> => {
    const response = await api.get<DatosUsuario>(`usuario/saldo_usuario/${id}`)
    return response.data
}

export const obtenerUsuariosConFactura = async () :Promise<DatosResponse[]>=>{
    const response = await api.get<DatosResponse[]>('usuario/usuarios')
    return response.data
}


