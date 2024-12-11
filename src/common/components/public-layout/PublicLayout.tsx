import React from 'react'

interface Props {
    children?: React.ReactNode
}
const PublicLayout = ({ children }: Props) => {
    return (
        <div className='flex w-full h-screen'>
            {children}
        </div>
    )
}

export default PublicLayout
