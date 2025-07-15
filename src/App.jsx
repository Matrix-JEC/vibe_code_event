import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './Pages/Home'
import './App.css'

function App() {

  return (
    <>
      <MainLayout>
        <Home/>
      </MainLayout>

    </>
  )
}

export default App
