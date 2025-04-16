import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route, useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Home from './Page/home'

function App() {

  return (
    <>
<p className='text-blue-500 bg-black'>hello world</p>
    <h1 className='bg-blue-400'>kanon dilam</h1>

    <p className=''>hello world</p>
    <h1>kanon dilam</h1>

    <Routes>
    <Route  path="/home" element={<Home/>} /> 

  </Routes>  
    <div>
      <Link to={'/home'}>
    
    <button>home</button>
      </Link>
      
    </div>
    </>
  )
}

export default App
