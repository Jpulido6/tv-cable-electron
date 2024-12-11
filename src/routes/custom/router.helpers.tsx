import { RouteObject } from "react-router-dom";
import { IRoute } from "../private/Routes";
import { LazyExoticComponent } from "react";
import { RoutesMap, RoutesMapAdmin } from "../private/RoutesMap";
import { RoleUser } from "@/pages/public/auth/domain/user/user.interface";


export const addNotFound = (
    routes: RouteObject[],
    NotFoundComponent: () => JSX.Element
): RouteObject[] => {
    return [
        ...routes,
        {
            path: "*",
            element: <NotFoundComponent />
        }
    ]
}

export const buildPrivateRoutes = (
    routes: IRoute[],
    role:RoleUser,
    addRoutes: string[] = [],
    parentPath?: string
): RouteObject[] => {    
    const privateRoutes :RouteObject[]=[]

    const routesMapUse = role === RoleUser.ADMIN ? RoutesMapAdmin : RoutesMap

    routes.forEach(({path})=>{
        if (addRoutes.includes(path)) return

        addRoutes.push(path)

        const elementPath = parentPath ? `${parentPath}.${path}` : path        
        const Element = resolve(elementPath,routesMapUse,'value')
        const childRoutes = routes.filter((routes) => routes.parent === path)
        const hasChildRoutes = childRoutes.length > 0

        const routeObject: RouteObject ={
          path,
          ...(isLazyExoticComponent(Element) && { element: <Element/>}),
          ...(hasChildRoutes && {
            children: buildPrivateRoutes(childRoutes,role, addRoutes, elementPath)
          })
        }  
        privateRoutes.push(routeObject)
    })
    return privateRoutes    
}

const resolve = (
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    obj: Record<string, any>,
    returnType: 'object' | 'value' = 'object'
  ) => {
    const value = path.split('.').reduce(function (prev, curr) {
      return prev ? prev[curr] : null
    }, obj || self)
  
    if (returnType === 'object') {
      return { [path]: value }
    }
  
    if (returnType === 'value') {
      return value
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isLazyExoticComponent = (component: any): component is LazyExoticComponent<any> => {
    return component && component.$$typeof === Symbol.for('react.lazy')
  }