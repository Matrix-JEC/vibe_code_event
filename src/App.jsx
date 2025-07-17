import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './Pages/Home'
import FAQpage from './Pages/FAQpage'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import './App.css'
import "flip-card-wc"

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/faqs',
        Component: FAQpage,
      },
      {
        path: "/contact",
        Component: Contact,
      }
    ]
  },
  {
    path: '/register',
    Component: Register,
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
