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


    <p className=''>hello world</p>

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
