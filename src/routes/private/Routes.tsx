// import {
//     ProtectedRoute,
//     Layout,
//     Contabilidad,
//     Customers,
//     Factura,
//     Facturas,
//     Gastos,
//     Home,
//     ListadoBetania,
//     ListadoSanjose,
//     Pagos,
//     Servicios,
//     Tecnico,
//     Usuario,
//     VerGastos,
//     VerServicios
// } from '@/components/index'


export interface IRoute {
    path: string
    title: string
    icon?: JSX.Element
    parent?: string
}

export const routesAdmin: IRoute[] = [
    // {
    //     path: "/inicio",
    //     element: <ProtectedRoute> <Layout><Home /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/pagos",
    //     element: <ProtectedRoute> <Layout><Pagos /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/gastos",
    //     element: <ProtectedRoute><Layout><Gastos /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/ver-gastos",
    //     element: <ProtectedRoute><Layout><VerGastos /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/factura",
    //     element: <ProtectedRoute><Layout><Factura /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/facturas",
    //     element: <ProtectedRoute><Layout><Facturas /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/listado-sanjose",
    //     element: <ProtectedRoute><Layout><ListadoSanjose /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/listado-betania",
    //     element: <ProtectedRoute><Layout><ListadoBetania /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/contabilidad",
    //     element: <ProtectedRoute><Layout><Contabilidad /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/servicios",
    //     element: <ProtectedRoute><Layout><Servicios /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/ver-servicios",
    //     element: <ProtectedRoute><Layout><VerServicios /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/tecnico",
    //     element: <ProtectedRoute><Layout><Tecnico /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/customers",
    //     element: <ProtectedRoute><Layout><Customers /></Layout></ProtectedRoute>
    // },
    // {
    //     path: "/usuario",
    //     element: <ProtectedRoute><Layout><Usuario /></Layout></ProtectedRoute>
    // }
    {
        path: "home",
        title: "Inicio",
        icon: <i className="pi pi-home h-5 w-5" />,        
    },

    {
        path: "pagos",
        title: "Pagos",
        icon: <i className="pi pi-wallet h-5 w-5" />,        
    },
    {
        path: "gastos",
        title: "Gastos",
        icon: <i className="pi pi-dollar h-5 w-5" />,
        
    },
    {
        path: "ver-gastos",
        title: "Ver Gastos",
        icon: <i className="pi pi-pencil h-5 w-5" />,
        parent: "gastos"
    },
    {
        path: "facturas",
        title: "Factura",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,        
    },
    {
        path: "ver-facturas",
        title: "ver Facturas",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "facturas"
    },
    {
        path: "ver-factura",
        title: "Busvar Factura",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "facturas"
    },
    {
        path: "listados",
        title: "Listados",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        
    },
    {
        path: "listado-sanjose",
        title: "Listado San jose",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "listados"
    },
    {
        path: "listado-betania",
        title: "Listado Betania",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "listados"
    },
    {
        path: "contabilidad",
        title: "Contabilidad",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,        
    },
    {
        path: "servicios",
        title: "Servicios",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/ver-servicios",
        title: "Ver Servicios",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/tecnico",
        title: "Tecnico",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/customers",
        title: "Clientes",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "usuario",
        title: "Usuario",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,      
    }
]

export const routesUser: IRoute[] = [
    {
        path: "home",
        title: "Inicio",
        icon: <i className="pi pi-home h-5 w-5" />,        
    },
    {
        path: "pagos",
        title: "Pagos",
        icon: <i className="pi pi-wallet h-5 w-5" />,        
    },   
    {
        path: "facturas",
        title: "Factura",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,        
    },
    {
        path: "ver-facturas",
        title: "ver Facturas",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "facturas"
    },
    {
        path: "ver-factura",
        title: "Buscar Factura",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "facturas"
    },
    {
        path: "listados",
        title: "Listados",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        
    },
    {
        path: "listado-sanjose",
        title: "Listado San jose",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "listados"
    },
    {
        path: "listado-betania",
        title: "Listado Betania",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "listados"
    },    
    {
        path: "servicios",
        title: "Servicios",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/ver-servicios",
        title: "Ver Servicios",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/tecnico",
        title: "Tecnico",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },
    {
        path: "/customers",
        title: "Clientes",
        icon: <i className="pi pi-file-pdf h-5 w-5" />,
        parent: "Inicio"
    },   

]