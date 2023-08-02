import { Link } from 'react-router-dom'
import buildingIcon from '../../assets/building-one.svg'
import userIcon from '../../assets/user.svg'

function Nav() {
    return (
        <nav className='bg-indigo-300 font-manrope'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='text-white text-2xl flex font-orelega'>
                        <img src={buildingIcon} alt='Building Icon'/>
                    DE</div>
                    <ul className='hidden md:flex space-x-4'>
                        <li href='#' className='text-white'><Link to='/'>Home</Link></li>
                        <li href='#' className='text-white'><Link to='/login'>Login</Link></li>
                        <li href='#' className='text-white'><Link to='/catalog'>Catalog</Link></li>
                        <li href='#' className='text-white'><Link to='/admin'>Admin</Link></li>
                    </ul>
                    {/* Add a responsive hamburger menu for mobile */}
                    <div className='md:hidden'>
                        <button className='text-white'>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* <img src={logo} alt='Dev Estate Logo' className='w-1/4 md:w-1/6 lg:w-1/12' />
                <ul className='flex justify-end gap-2 items-center '>
                    <li className='hover:text-gray-400 duration-500'><Link to='/'>Home</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/login'>Login</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/catalog'>Catalog</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/admin'>Admin</Link></li>
                    <li>
                    <button  className='bg-blue-600 flex rounded-xl p-1 items-center'>
                    <img src={userIcon} alt='User Icon' className='w-5 h-4 mr-1'/>
                    Log in</button>
                    </li> */}
            {/* </ul> */}
        </nav>
    )
}

export default Nav
