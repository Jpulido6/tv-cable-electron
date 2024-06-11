import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './components/pages/Home.tsx'
import Pagos from './components/pages/Pagos.tsx'
import SideBar from './components/common/SideBar.tsx'



import "primereact/resources/themes/md-dark-indigo/theme.css" 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 
import "primereact/resources/primereact.min.css" 
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <SideBar><Home/></SideBar>
  },
  {
    path: "/pagos",
    element:<SideBar><Pagos /></SideBar> 
  },
  {
    path:"*",
    element: <div>404</div>
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
