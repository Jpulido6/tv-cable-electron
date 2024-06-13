
import React, { useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';


interface Props {    
    handleVisible: () => void,
    visible: boolean
}

const SideBar: React.FC<Props> = ({  handleVisible, visible }) => {
    
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    return (
        <div className="card flex justify-content-center animate-none ">
            <Sidebar
                visible={visible}
                onHide={handleVisible}
                content={({ hide }) => (
                    <div className=" min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none" style={{ width: '300px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex items-center justify-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex items-center gap-2">
                                        <Image src={logo} width='50' />
                                        <span className=" text-2xl text-black">
                                            TV CABLE</span>
                                    </span>
                                    <Button icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" onClick={hide} />

                                </div>
                                <div className="flex-grow-1 overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>

                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <Link to={"/inicio"} >
                                                    <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Inicio</span>
                                                        <Ripple />
                                                    </a>
                                                </Link>
                                                <li>
                                                    <Link to={"/pagos"} className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-dollar mr-2"></i>
                                                        <span className="font-medium">Pagos</span>
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef1} className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Facturas</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">

                                                        <li>
                                                            <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-pencil mr-2"></i>
                                                                <span className="font-medium">Generar facturas</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-search mr-2"></i>
                                                                <span className="font-medium">Buscar facturas</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-money-bill mr-2"></i>
                                                            <span className="font-medium">Gastos</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">

                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-folder mr-2"></i>
                                                                <span className="font-medium">Registrar gastos</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-search mr-2"></i>
                                                                <span className="font-medium">Buscar gastos</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-book mr-2"></i>
                                                            <span className="font-medium">Listado usuarios</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">

                                                        <li>
                                                            <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-users mr-2"></i>
                                                                <span className="font-medium">Listado San Jose</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-users mr-2"></i>
                                                                <span className="font-medium">Listado Bétania</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
                }
            ></Sidebar >           
        </div >
      
    )
}
export default SideBar

