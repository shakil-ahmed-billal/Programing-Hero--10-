import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './Layout/Home'
import Login from './Layout/Login'
import Register from './Layout/Register'
import AuthProvider from './Provider/AuthProvider'
import Order from './Layout/Order'
import PrivateRoute from './Routes/PrivateRoute'
import Profile from './Layout/Profile'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
