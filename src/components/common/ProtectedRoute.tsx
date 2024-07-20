
import React from 'react'
import { getToken } from '../../services/token.services'
import { useNavigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}

const isAuthenticated = (): boolean => {
    const token = getToken()
    return token !== null && token.trim().length > 0 && token !== ''
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {


    const navigate = useNavigate()
    React.useEffect(() => {
        if (!isAuthenticated()) navigate('/')
    }, [navigate])
    return isAuthenticated() ? children : <NotAuthorize/>
}

export default ProtectedRoute

const NotAuthorize = () => (

    <div className='flex justify-center items-center h-screen w-full'>
        <span className='text-center text-2xl'>Not Authorize</span>
    </div>
)
