
import { Accordion, AccordionItem, Button, Image } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'


interface Props {
    handleClose: () => void,
}

const SideBar: React.FC<Props> = ({ handleClose }) => {

    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-gray-200 rounded-lg h-10 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    return (
        <div className="fixed w-2/3  top-0 left-0 z-40 transition-transform h-screen  ">
            <div className="hidden w-1/3 bg-gray-100 p-6 dark:bg-gray-950 md:block h-screen ">
                <div className="flex items-center justify-between gap-2">
                    <Image src={logo} alt="logo" width="40" height="30" />
                    <span className="flex items-center text-center text-lg font-bold">TV CABLE SANJOSE</span>
                    <Button isIconOnly aria-label="Like" className="flex-shrink-0" onClick={handleClose}>
                        <i className="pi pi-times "></i>
                    </Button>
                </div>
                <nav className="mt-8 space-y-4">
                    <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Menu</h3>

                        <div className="mt-4 space-y-1">
                            <Link
                                to={"/inicio"}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                            >
                                <i className="pi pi-home h-5 w-5" />
                                Inicio
                            </Link>
                            <div className="mt-4 space-y-1">
                                <Link
                                    to={"/pagos"}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                >
                                    <i className="pi pi-wallet h-5 w-5" />
                                    Pagos
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Accordion
                                showDivider={false}
                                className="flex flex-col w-full max-w-[300px] "
                                variant="light"
                                itemClasses={itemClasses}
                            >
                                <AccordionItem
                                    key="1"
                                    aria-label="Registro"
                                    startContent={<i className="pi pi-user-plus" />}
                                    title="Registro"
                                >
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-user-plus h-5 w-5" />
                                        Registro Usuario
                                    </Link>
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-user-plus h-5 w-5" />
                                        Registro Cliente
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion
                                showDivider={false}
                                className="flex flex-col w-full max-w-[300px] "
                                variant="light"
                                itemClasses={itemClasses}
                            >
                                <AccordionItem
                                    key="1"
                                    aria-label="Facturacion"
                                    startContent={<i className="pi pi-file-pdf" />}
                                    title="Facturación"
                                >
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-search h-5 w-5" />
                                        Buscar Factura
                                    </Link>
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-pencil h-5 w-5" />
                                        Crear Factura
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion
                                showDivider={false}
                                className="flex flex-col w-full max-w-[300px] "
                                variant="light"
                                itemClasses={itemClasses}
                            >
                                <AccordionItem
                                    key="1"
                                    aria-label="Listados"
                                    startContent={<i className="pi pi-book" />}
                                    title="Listado usuario"
                                >
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-book h-5 w-5" />
                                        Listado San José
                                    </Link>
                                    <Link
                                        to={"/pagos"}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                                    >
                                        <i className="pi pi-book h-5 w-5" />
                                        Listado Betania
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Cuenta</h3>
                        <div className="mt-4 space-y-1">

                            <Link
                                to="#"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"

                            >
                                <i className="pi pi-power-off h-5 w-5" />
                                Cerrar Sesión
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default SideBar