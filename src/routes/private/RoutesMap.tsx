import { lazy } from 'react'

export type RoutesMapType = {
    [key: string]: React.LazyExoticComponent<() => JSX.Element> | JSX.Element | RoutesMapType
  }

export const RoutesMap: RoutesMapType ={
    home: lazy(()=> import('@/pages/private/home/presentation/Home.page')),    
    pagos: lazy(() =>import('@/pages/private/pagos/presentation/Pagos.page')),
    facturas: lazy(()=>import('@/pages/private/facturas/presentation/Facturas.page')),
    servicios: lazy(()=> import('@/pages/private/servicios/presentation/Servicios.page'))
    
    
}

export const RoutesMapAdmin: RoutesMapType ={
  ...RoutesMap,  
  contabilidad: lazy(()=> import('@/pages/private/contabilidad/presentation/Contabilidad.page'))

}