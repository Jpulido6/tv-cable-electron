import { Layout } from "@/components"
import { IUser } from "@/pages/public/auth/domain/user/user.interface"
import { Navigate, Outlet } from "react-router-dom"
interface Props {
    user?: IUser
}
export const AuthGuard = ({ user }: Props) => {
    return user ? (
        <Layout>
            <Outlet />
        </Layout>
    ) : (
        <Navigate replace to={'auth'} />
    )
}

export default AuthGuard