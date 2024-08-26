import React from 'react'
import { motion } from "framer-motion";
import { Image, User } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, SidebarBody, SidebarLink } from '../common/SideBar';
import { Footer } from '../common/Footer';
import logo from '../../assets/images/logo.png'
import { useStoreApp } from '../../store/useStore';

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {

  const navigate = useNavigate()
  const nameUser = useStoreApp((state)=> state.userName)
  const roleUser = useStoreApp((state)=> state.roleUSer)

  
  const [open, setOpen] = React.useState(false);
  const linksAdmin = [
    { label: "Inicio", href: "/inicio", icon: (<i className="pi pi-home h-5 w-5" />) },
    { label: "Pagos", href: "/pagos", icon: (<i className="pi pi-wallet h-5 w-5" />) },
    { label: "Contabilidad", href: "/contabilidad", icon: (<i className="pi pi-chart-bar h-5 w-5" />) },
    { label: "Servicios", href: "", icon: (<i className="pi pi-file-edit h-5 w-5" />),subItem: [
      { label: 'Crear Servicio', href: '/servicios', icon: (<i className="pi pi-pencil h-5 w-5" />) },
      { label: 'Ver Servicio', href: '/ver-servicios', icon: (<i className="pi pi-eye h-5 w-5" />) },
    ] },
    {
      label: "Registro", href: "", icon: (<i className="pi pi-user-plus  h-5 w-5" />), subItem: [
        { label: 'Registrar usuario', href: '/customers', icon: (<i className="pi pi-user-plus h-5 w-5" />) },
        { label: 'Registrar Técnico', href: '/tecnico', icon: (<i className="pi pi-user-plus h-5 w-5" />) },
      ]
    },
    {
      label: "Gastos", href: "", icon: (<i className="pi pi-dollar h-5 w-5" />), subItem: [
        { label: 'Crear Gastos', href: '/gastos', icon: (<i className="pi pi-pencil h-5 w-5" />) },
        { label: 'Ver Gastos', href: '/ver-gastos', icon: (<i className="pi pi-eye h-5 w-5" />) },
      ]
    },
    { label: "Facturación", href: "", icon: (<i className="pi pi-file-pdf h-5 w-5" />), subItem:[
      { label: 'Buscar Factura', href: '/factura', icon: (<i className="pi pi-search h-5 w-5" />) },
      { label: 'Crear Facturas', href: '/facturas', icon: (<i className="pi pi-pencil h-5 w-5" />) },
    ]},
    {
      label: "Listados", href: "", icon: (<i className="pi pi-users h-5 w-5" />), subItem: [
        { label: 'Listado Sanjose', href: '/listado-sanjose', icon: (<i className="pi pi-users h-5 w-5" />) },
        { label: 'Listado Betania', href: '/listado-betania', icon: (<i className="pi pi-users h-5 w-5" />) },
      ],
    },
  ]

  const linksUser = [
    { label: "Inicio", href: "/inicio", icon: (<i className="pi pi-home h-5 w-5" />) },
    { label: "Pagos", href: "/pagos", icon: (<i className="pi pi-wallet h-5 w-5" />) },
    { label: "Servicios", href: "", icon: (<i className="pi pi-file-edit h-5 w-5" />),subItem: [
      { label: 'Crear Servicio', href: '/servicios', icon: (<i className="pi pi-pencil h-5 w-5" />) },
      { label: 'Ver Servicio', href: '/ver-servicios', icon: (<i className="pi pi-eye h-5 w-5" />) },
    ] },
    {
      label: "Registro", href: "", icon: (<i className="pi pi-user-plus  h-5 w-5" />), subItem: [
        { label: 'Registrar Técnico', href: '/tecnico', icon: (<i className="pi pi-user-plus h-5 w-5" />) },
      ]
    },    
    { label: "Facturación", href: "", icon: (<i className="pi pi-file-pdf h-5 w-5" />), subItem:[
      { label: 'Buscar Factura', href: '/factura', icon: (<i className="pi pi-search h-5 w-5" />) },
    ]},
    {
      label: "Listados", href: "", icon: (<i className="pi pi-users h-5 w-5" />), subItem: [
        { label: 'Listado Sanjose', href: '/listado-sanjose', icon: (<i className="pi pi-users h-5 w-5" />) },
        { label: 'Listado Betania', href: '/listado-betania', icon: (<i className="pi pi-users h-5 w-5" />) },
      ],
    },
  ]

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <div className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">                
                {
                  roleUser === "ADMIN" ? linksAdmin.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))
                    :
                    linksUser.map((link, idx) => (
                      <SidebarLink key={idx} link={link} />
                    ))
                }
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Cerrar Sesión",
                  href:"/",                  
                  icon: (
                    <i className='pi pi-sign-out h-5 w-5' onClick={handleSignOut} />
                  ),
                }}
              />
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "",
                  href: "",
                  icon: (
                    <User
                    name={nameUser.toLocaleUpperCase()} 
                    description={roleUser}                     
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/114049725?v=4"
                      }}
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          {children}
        </div>
      </div>
      <div className='mx-10'>
        <Footer />
      </div>
    </>
  )
}
export default Layout

const Logo = () => {
  return (
    <Link
      to={"/inicio"}
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={logo} alt="logo" width="20" height="24" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        TV CABLE SANJOSE
      </motion.span>
    </Link>
  );
}
const LogoIcon = () => {
  return (
    <Link
      to={"/inicio"}
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={logo} alt="logo" width="40" height="30" />
    </Link>
  );
};