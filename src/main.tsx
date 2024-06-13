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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <Layout><Home /></Layout>
  },
  {
    path: "/pagos",
    element: <Layout><Pagos /></Layout>
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
