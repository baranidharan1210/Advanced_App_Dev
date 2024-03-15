import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
const Contact=lazy(()=>import('./pages/Contact'))
import WebLayout from './layouts/Weblayout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback='Loading...'>

    <Routes>

      <Route element={<WebLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App