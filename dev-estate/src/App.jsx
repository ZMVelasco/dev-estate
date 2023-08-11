import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Admin from './components/admin/Admin.jsx'
import Signup from './components/signup/Signup.jsx'
import Filters from './components/home/Filters.jsx'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/filters' element={<Filters />} />
      </Routes>
    </div>
  )
}

export default App
