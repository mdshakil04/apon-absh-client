import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound/NotFound.jsx'
import Home from './Home/Home.jsx'
import Property from './Property/Property.jsx'
import ContactUs from './ContactUs/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    errorElement:<NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/property',
        element:<Property/>
      },
      {
        path: '/contact',
        element:<ContactUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
