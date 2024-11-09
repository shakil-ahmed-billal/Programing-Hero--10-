import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './components/Home/Home';
import LogIn from './Pages/LogIn/LogIn.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Register from './Pages/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>,
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
