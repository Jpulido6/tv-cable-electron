export interface IUser{
    id?:number,
    name?:string,
    email:string,
    password:string,
    role:RoleUser,    
}
export enum RoleUser {
    ADMIN='admin',
    USER='user'
}