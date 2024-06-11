import React from 'react'
import SideBar from '../common/SideBar'

interface Props{
    children: React.ReactNode
}
const Layout:React.FC<Props> = ({ children }) => {
    return (
        <div className="flex  w-full h-screen justify-center items-center ">
            <SideBar />
            {/* <main className="main -ml-48 flex w-full justify-center items-center flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                <div className="flex h-full w-full justify-center items-center shadow-md">{children}</div>
            </main> */}

            <main className='w-full h-screen flex p-5 justify-center items-center'>
                <div > { children }</div>
            </main>
        </div>
    )
}

export default Layout