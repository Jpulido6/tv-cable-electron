import React from 'react'
import SideBar from '../common/SideBar'
import { Button } from 'primereact/button';
import { Footer } from '../common/Footer';

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => setVisible(true);
  const handleClose = () => setVisible(false);
  
  return (
    <div className='p-5'>
      {
        visible && <SideBar handleClose={handleClose} />
      }
      <div className='flex justify-between items-center mb-2'>
        <div className="flex items-center space-x-4" >
          <div onClick={handleVisible}>
            <Button icon="pi pi-bars" className="p-button-outlined" />
          </div>

          <h1 className="text-xl font-semibold">Tv cable SanJose </h1>
        </div>
        <Button icon="pi pi-ellipsis-v" className="p-button-outlined" />

      </div>
      {children}
      <div>
        <Footer />
      </div>      
    </div>
  )
}

export default Layout