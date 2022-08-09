import CartWidget from './CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    
    return(
        <header>
            <nav className="Navbar">
                <div className="brand-title">
                    <Link to='/'> Kiosco </Link>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><Link activeClassName='active' to="/">Todos los productos</Link></li>
                        <li><Link activeClassName='active' to="/tipoProducto/Bebida">Bebidas</Link></li>
                        <li><Link activeClassName='active' to="/tipoProducto/Golosinas">Golosinas</Link></li>
                        <li><Link activeClassName='active' to="/tipoProducto/Snacks">Snacks</Link></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}

export default NavBar;