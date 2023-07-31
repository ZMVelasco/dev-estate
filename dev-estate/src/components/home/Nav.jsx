import { Link } from 'react-router-dom'
import logo from '../../assets/DE_logo.png'

function Nav() {
    return (
        <header>
            <nav className='flex justify-around font-manrope mt-1 md:mt-4 lg:mt-2'>
                <img src={logo} alt='Dev Estate Logo' className='w-1/4 md:w-1/6 lg:w-1/12' />
                <ul className='flex justify-end gap-2 items-end '>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav