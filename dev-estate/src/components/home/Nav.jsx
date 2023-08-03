import { Link } from 'react-router-dom'
import { useState, React } from 'react'
import buildingIcon from '../../assets/building-one.svg'

function Nav () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
        <nav className='bg-indigo-300 font-manrope'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-white text-2xl flex font-orelega'>
                        <img src={buildingIcon} alt='Building Icon' />
                        DE
                    </div>
                    <ul className={`hidden md:flex space-x-4 ${isOpen ? '' : 'hidden'}`}>
                        <li className='text-white'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/catalog'>Catalog</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/admin'>Admin</Link>
                        </li>
                        <li>
                            <button className='bg-blue-600 flex rounded-xl p-1 items-center pr-3 pl-3'>
                                Log in
                            </button>
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        <button className='text-white' onClick={toggleMenu}>
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                {isOpen
                                  ? (
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    )
                                  : (
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 6h16M4 12h16m-7 6h7'
                                        />
                                    )}
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className='md:hidden mt-4'>
                        <Link
                            to='/'
                            className='block text-white mt-2 mb-2 font-medium hover:text-indigo-600'
                        >
                            Home
                        </Link>
                        <Link
                            to='/login'
                            className='block text-white mt-2 mb-2 font-medium hover:text-indigo-600'
                        >
                            Login
                        </Link>
                        <Link
                            to='/catalog'
                            className='block text-white mt-2 mb-2 font-medium hover:text-indigo-600'
                        >
                            Catalog
                        </Link>
                        <Link
                            to='/admin'
                            className='block text-white mt-2 mb-2 font-medium hover:text-indigo-600'
                        >
                            Admin
                        </Link>
                        <button className='bg-blue-600 block rounded-xl p-2 text-white w-full mt-4'>
                            Log in
                        </button>
                    </div>
                )}
            </div>
        </nav>
  )
}

export default Nav
