import { useAuthStore } from "@/common/infrastructure/config/zustand/auth/useAuth.store"
import { IUser, RoleUser } from "../user/user.interface"


export interface IAuthResponse {
    accessToken: string
    refreshToken: string
    user: IUser
}
interface ILogin{
    email:string,
    password:string
}
const useLogin =() =>{

    const { login, setRole }= useAuthStore()

    const loginHandler = async (data: ILogin) => {
        const { email, password} = data
        if(email === 'cj@gmail.com' && password === '12345'){
            const user:IUser= {
                id:1,
                name:'Carlos',
                email,
                password,
                role: RoleUser.ADMIN
                
            }
            login(user)
            setRole(user.role)
        }
    }
    return {
        loginHandler
    }
}

export default useLogin