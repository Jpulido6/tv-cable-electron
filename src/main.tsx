import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import Home from './components/pages/Home.tsx'
import Pagos from './components/pages/Pagos.tsx'
import Layout from './components/layout/Layout.tsx'

import 'primeicons/primeicons.css';
import './index.css'
import ProtectedRoute from './components/common/ProtectedRoute.tsx'
import Gastos from './components/pages/Gastos.tsx'
import VerGastos from './components/pages/VerGastos.tsx'
import Facturas from './components/pages/Facturas.tsx'
import ListadoSanjose from './components/pages/ListadoSanjose.tsx'
import ListadoBetania from './components/pages/ListadoBetania.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <ProtectedRoute> <Layout><Home /></Layout></ProtectedRoute>
  },
  {
    path: "/pagos",
    element: <ProtectedRoute> <Layout><Pagos /></Layout></ProtectedRoute>
  },
  {
    path: "/gastos",
    element: <ProtectedRoute><Layout><Gastos /></Layout></ProtectedRoute>
  },
  {
    path: "/ver-gastos",
    element: <ProtectedRoute><Layout><VerGastos /></Layout></ProtectedRoute>
  },
  {
    path:"/facturas",
    element: <ProtectedRoute><Layout><Facturas /></Layout></ProtectedRoute>
  },
  {
    path:"listado-sanjose",
    element: <ProtectedRoute><Layout><ListadoSanjose /></Layout></ProtectedRoute>
  },
  {
    path:"listado-betania",
    element: <ProtectedRoute><Layout><ListadoBetania /></Layout></ProtectedRoute>
  },
  {
    path: "*",
    element: <div>404</div>
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
