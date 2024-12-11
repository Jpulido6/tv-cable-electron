import { lazy, Suspense } from 'react'
import { useAuthStore } from '../common/infrastructure/config/zustand/auth/useAuth.store'
import { createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider } from 'react-router-dom'
import PublicLayout from '@/common/components/public-layout/PublicLayout'
import RecoverPasswordPage from '@/pages/public/recover-password/presentation/RecoverPassword.page'
import { addNotFound, buildPrivateRoutes } from './custom/router.helpers'
import NotFoundPage from '@/pages/public/not-found/presentation/NotFound.page'
import Loading from '@/components/common/Loading'
import AuthGuard from './guard/AuthGuard'
import { routesAdmin, routesUser } from './private/Routes'
import { RoleUser } from '@/pages/public/auth/domain/user/user.interface'

const AuthPage = lazy(() => import('@/pages/public/auth/presentation/Auth.page'))
const MAIN_ROUTES: string = 'home'
const MainRouter = () => {
    const user = useAuthStore((state) => state.user)
    const role = useAuthStore((state) => state.role)
    console.log('user=>', user)
    console.log('role=>', role)
    
    const  privateRoute = role === RoleUser.ADMIN ? buildPrivateRoutes(routesAdmin, role) : buildPrivateRoutes(routesUser, role)

    const allRoutes: RouteObject[] = [
        {
            path: '/',
            element: (
                <PublicLayout>
                    <Outlet />
                </PublicLayout>
            ),
            children: [
                {
                    path: '/',
                    element: <Navigate replace to={MAIN_ROUTES} />
                },
                {
                    path: 'auth',
                    element: user ? <Navigate replace to={`/${MAIN_ROUTES}`} /> : <AuthPage />
                },
                {
                    path: 'recover-password',
                    element: user ? <Navigate replace to={`/${MAIN_ROUTES}`} /> : <RecoverPasswordPage />
                }
            ]
        },
        {
            element: <AuthGuard user={user} />,
            children: addNotFound(privateRoute,NotFoundPage)
        }
    ]

    const routesWithNotFound = addNotFound(allRoutes, NotFoundPage)
    const router = createBrowserRouter(routesWithNotFound)

    console.log(router.routes)
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default MainRouter