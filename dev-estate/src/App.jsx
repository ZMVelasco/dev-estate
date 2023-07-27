// import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Admin from './components/admin/Admin.jsx'

function App() {

  return (
      <div className='App'>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/catalog'>Catalog</Link></li>
              <li><Link to='/admin'>Admin</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>    
      </div>
  )
}

export default App
