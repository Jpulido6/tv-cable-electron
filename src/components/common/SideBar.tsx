
// import { Accordion, AccordionItem, Button, Image } from '@nextui-org/react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo.png'


// interface Props {
//     handleClose: () => void,
// }

// const SideBar: React.FC<Props> = ({ handleClose }) => {

//     const itemClasses = {
//         base: "py-0 w-full",
//         title: "font-normal text-medium",
//         trigger: "px-2 py-0 data-[hover=true]:bg-gray-200 rounded-lg h-10 flex items-center",
//         indicator: "text-medium",
//         content: "text-small px-2",
//     };

//     const handleCerrarSesion = () => {
//         localStorage.removeItem('token');
//         window.location.reload();
//     }

//     return (
//         <div className="fixed w-2/3  top-0 left-0 z-40 transition-transform h-screen  ">
//             <div className="hidden w-1/3 bg-gray-100 p-6 dark:bg-gray-950 md:block h-screen ">
//                 <div className="flex items-center justify-between gap-2">
//                     <Image src={logo} alt="logo" width="40" height="30" />
//                     <span className="flex items-center text-center text-lg font-bold">TV CABLE SANJOSE</span>
//                     <Button isIconOnly aria-label="Like" className="flex-shrink-0" onClick={handleClose}>
//                         <i className="pi pi-times "></i>
//                     </Button>
//                 </div>
//                 <nav className="mt-8 space-y-4">
//                     <div>
//                         <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Menu</h3>

//                         <div className="mt-4 space-y-1">
//                             <Link
//                                 to={"/inicio"}
//                                 className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                             >
//                                 <i className="pi pi-home h-5 w-5" />
//                                 Inicio
//                             </Link>
//                             <div className="mt-4 space-y-1">
//                                 <Link
//                                     to={"/pagos"}
//                                     className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                 >
//                                     <i className="pi pi-wallet h-5 w-5" />
//                                     Pagos
//                                 </Link>
//                             </div>
//                             <div className="mt-4 space-y-1">
//                                 <Link
//                                     to={"/contabilidad"}
//                                     className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                 >
//                                     <i className="pi pi-wallet h-5 w-5" />
//                                     Contabilidad
//                                 </Link>
//                             </div>
//                         </div>
//                         <div>
//                             <Accordion
//                                 showDivider={false}
//                                 className="flex flex-col w-full max-w-[300px] "
//                                 variant="light"
//                                 itemClasses={itemClasses}
//                             >
//                                 <AccordionItem
//                                     key="1"
//                                     aria-label="Registro"
//                                     startContent={<i className="pi pi-file-import" />}
//                                     title="Gastos"
//                                 >
//                                     <Link
//                                         to={"/gastos"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-pencil h-5 w-5" />
//                                         Registrar gastos
//                                     </Link>
//                                     <Link
//                                         to={"/ver-gastos"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-eye h-5 w-5" />
//                                         Ver gastos
//                                     </Link>
//                                 </AccordionItem>
//                             </Accordion>
//                         </div>
//                         <div>
//                             <Accordion
//                                 showDivider={false}
//                                 className="flex flex-col w-full max-w-[300px] "
//                                 variant="light"
//                                 itemClasses={itemClasses}
//                             >
//                                 <AccordionItem
//                                     key="1"
//                                     aria-label="Registro"
//                                     startContent={<i className="pi pi-user-plus" />}
//                                     title="Registro"
//                                 >
//                                     <Link
//                                         to={"/pagos"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-user-plus h-5 w-5" />
//                                         Registro Usuario
//                                     </Link>
//                                     <Link
//                                         to={"/pagos"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-user-plus h-5 w-5" />
//                                         Registro Cliente
//                                     </Link>
//                                 </AccordionItem>
//                             </Accordion>
//                         </div>
//                         <div>
//                             <Accordion
//                                 showDivider={false}
//                                 className="flex flex-col w-full max-w-[300px] "
//                                 variant="light"
//                                 itemClasses={itemClasses}
//                             >
//                                 <AccordionItem
//                                     key="1"
//                                     aria-label="Facturacion"
//                                     startContent={<i className="pi pi-file-pdf" />}
//                                     title="Facturación"
//                                 >
//                                     <Link
//                                         to={"/factura"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-search h-5 w-5" />
//                                         Buscar Factura
//                                     </Link>
//                                     <Link
//                                         to={"/facturas"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-pencil h-5 w-5" />
//                                         Crear Factura
//                                     </Link>
//                                 </AccordionItem>
//                             </Accordion>
//                         </div>
//                         <div>
//                             <Accordion
//                                 showDivider={false}
//                                 className="flex flex-col w-full max-w-[300px] "
//                                 variant="light"
//                                 itemClasses={itemClasses}
//                             >
//                                 <AccordionItem
//                                     key="1"
//                                     aria-label="Listados"
//                                     startContent={<i className="pi pi-book" />}
//                                     title="Listado usuario"
//                                 >
//                                     <Link
//                                         to={"/listado-sanjose"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-book h-5 w-5" />
//                                         Listado San José
//                                     </Link>
//                                     <Link
//                                         to={"/listado-betania"}
//                                         className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                                     >
//                                         <i className="pi pi-book h-5 w-5" />
//                                         Listado Betania
//                                     </Link>
//                                 </AccordionItem>
//                             </Accordion>
//                         </div>
//                     </div>


//                     <div>
//                         <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Cuenta</h3>
//                         <div className="mt-4 space-y-1">

//                             <span                                
//                                 onClick={handleCerrarSesion}
//                                 className="flex items-center cursor-pointer gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

//                             >
//                                 <i className="pi pi-power-off h-5 w-5" />
//                                 Cerrar Sesión
//                             </span>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     )
// }
// export default SideBar

"use client";
import { cn } from "../../utils/utils";

import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkProps } from "@nextui-org/react";
import { Link } from "react-router-dom";

export interface Links {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
    subItem?: Links[]
}

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const Sidebar = ({
    children,
    open,
    setOpen,
    animate,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    return (
        <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
            {children}
        </SidebarProvider>
    );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
    return (
        <>
            <DesktopSidebar {...props} />
            <MobileSidebar {...(props as React.ComponentProps<"div">)} />
        </>
    );
};

export const DesktopSidebar = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.div>) => {
    const { open, setOpen, animate } = useSidebar();
    return (
        <>
            <motion.div
                className={cn(
                    "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
                    className
                )}
                animate={{
                    width: animate ? (open ? "250px" : "60px") : "250px",
                }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                {...props}
            >
                {children}
            </motion.div>
        </>
    );
};

export const MobileSidebar = ({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) => {
    const { open, setOpen } = useSidebar();
    return (
        <>
            <div
                className={cn(
                    "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
                )}
                {...props}
            >
                <div className="flex justify-end z-20 w-full">
                    <i
                        className="pi pi-bars text-neutral-800 dark:text-neutral-200 text-2xl cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={cn(
                                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                                className
                            )}
                        >
                            <div
                                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                                onClick={() => setOpen(!open)}
                            >
                                <i className="pi pi-cog" />
                            </div>
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export const SidebarLink = ({
    link,
    className,
    ...props
}: {
    link: Links;
    className?: string;
    props?: LinkProps;
}) => {
    const { open, animate } = useSidebar();
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const hasSubItem = link.subItem && link.subItem.length > 0
    return (
        <>
            <Link
                to={link.href}
                className={cn(
                    "flex items-center justify-between gap-2 group/sidebar py-2 cursor-pointer",
                    className
                )}
                onClick={() => hasSubItem && setIsOpen(!isOpen)}
                {...props}
            >
                <div className="flex items-center">
                    {link.icon}
                    <motion.span
                        animate={{
                            display: animate ? (open ? "inline-block" : "none") : "inline-block",
                            opacity: animate ? (open ? 1 : 0) : 1,
                        }}
                        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
                    >
                        {link.label}
                    </motion.span>
                </div>
                {hasSubItem && (
                    <motion.div
                        animate={{
                            display: animate ? (open ? "flex" : "none") : "flex",
                            opacity: animate ? (open ? 1 : 0) : 1,
                            rotate: isOpen ? 180 : 0,
                        }}
                        className="flex items-center justify-end mr-8"
                    >
                        <i className="pi pi-chevron-down" />
                    </motion.div>
                )}
            </Link>
            {hasSubItem && isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-6"
                >
                    {link.subItem?.map((subLink, idx) => (
                        <SidebarLink key={idx} link={subLink} className="py-1" />
                    ))}
                </motion.div>
            )}
        </>
    );
};