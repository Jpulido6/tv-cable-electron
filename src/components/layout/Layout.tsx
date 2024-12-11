import React from 'react'
import { motion } from "framer-motion";
import { Image, User } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarBody, SidebarLink } from '../common/SideBar';
import { Footer } from '../common/Footer';
import logo from '../../assets/images/logo.png'
import { useStoreApp } from '../../store/useStore';
import { RoleUser } from '@/pages/public/auth/domain/user/user.interface';
import { linksAdmin, linksUser } from '@/routes/links/links.routes';
// import { routesAdmin, routesUser } from '@/routes/private/Routes';
import { useAuthStore } from '@/common/infrastructure/config/zustand/auth/useAuth.store';

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {

  const nameUser = useStoreApp((state)=> state.userName)
  const roleUser = useStoreApp((state)=> state.roleUSer)
  const logout = useAuthStore((state)=> state.logout)
  
  const [open, setOpen] = React.useState(false);
  
  const menuLinks = roleUser === RoleUser.ADMIN ? linksAdmin : linksUser

  const handleSignOut = () => {
    logout()
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
                  menuLinks.map((item, index) => (
                    <SidebarLink
                      key={index}
                      link={{
                        label: item.label,
                        href: item.href,
                        icon: item.icon,
                        subItem:item.subItem ||[]
                      }}
                      

                    />
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