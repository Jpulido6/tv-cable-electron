export interface IColumns{
    name:string
    uid:string
    sortable?:boolean
}

export interface ICustomers{
    id: number
    nombres:string
    documento:string
    direccion:string
    email:string
    telefono:string
    deuda:number
    estado:string
    facturas:any
}

export type StatusOption = Pick<IColumns, 'name' | 'uid'>