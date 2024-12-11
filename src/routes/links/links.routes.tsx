interface LinksProps{
    label: string;
    href: string;
    icon: JSX.Element;
    subItem?: LinksProps[];
}

export const linksAdmin: LinksProps[]=[
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
    }
]

export const linksUser: LinksProps[]=[
  { label: "Inicio", href: "/home", icon: (<i className="pi pi-home h-5 w-5" />) },
    { label: "Pagos", href: "/pagos", icon: (<i className="pi pi-wallet h-5 w-5" />) },
    { label: "Servicios", href: "/servicios", icon: (<i className="pi pi-file-edit h-5 w-5" />),subItem: [
      { label: 'Crear Servicio', href: '/servicios', icon: (<i className="pi pi-pencil h-5 w-5" />) },
      { label: 'Ver Servicio', href: '/ver-servicios', icon: (<i className="pi pi-eye h-5 w-5" />) },
    ] },
    {
      label: "Registro", href: "", icon: (<i className="pi pi-user-plus  h-5 w-5" />), subItem: [
        { label: 'Registrar Técnico', href: '/tecnico', icon: (<i className="pi pi-user-plus h-5 w-5" />) },
      ]
    },    
    { label: "Facturación", href: "/facturas", icon: (<i className="pi pi-file-pdf h-5 w-5" />), subItem:[
      { label: 'Buscar Factura', href: '/factura', icon: (<i className="pi pi-search h-5 w-5" />) },
    ]},
    {
      label: "Listados", href: "", icon: (<i className="pi pi-users h-5 w-5" />), subItem: [
        { label: 'Listado Sanjose', href: '/listado-sanjose', icon: (<i className="pi pi-users h-5 w-5" />) },
        { label: 'Listado Betania', href: '/listado-betania', icon: (<i className="pi pi-users h-5 w-5" />) },
      ],
    },
]