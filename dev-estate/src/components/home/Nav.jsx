import { Link } from 'react-router-dom'
import logo from '../../assets/DE_logo.png'

function Nav() {
    return (
        <header>
            <nav className='flex justify-around font-manrope mt-1 md:mt-4 lg:mt-2'>
                <img src={logo} alt='Dev Estate Logo' className='w-1/4 md:w-1/6 lg:w-1/12' />
                <ul className='flex justify-end gap-2 items-end '>
                    <li className='hover:text-gray-400 duration-500'><Link to='/'>Home</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/login'>Login</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/catalog'>Catalog</Link></li>
                    <li className='hover:text-gray-400 duration-500'><Link to='/admin'>Admin</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav