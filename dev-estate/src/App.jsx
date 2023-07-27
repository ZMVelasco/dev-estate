// import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Admin from './components/admin/Admin.jsx'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
      <div className='App'>
        <header>
      <nav>
        <Flex flexDir="row">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
            <li style={{ marginRight: '10px' }}><Link to='/'>Home</Link></li>
            <li style={{ marginRight: '10px' }}><Link to='/login'>Login</Link></li>
            <li style={{ marginRight: '10px' }}><Link to='/catalog'>Catalog</Link></li>
            <li style={{ marginRight: '10px' }}><Link to='/admin'>Admin</Link></li>
          </ul>
        </Flex>
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
