import { Link } from 'react-router-dom'

function Nav() {
    return (
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
    )
}

export default Nav