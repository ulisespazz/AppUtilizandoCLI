import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {
    return(
        <header>
            <nav className="Navbar">
                <div className="brand-title">
                    <p>Kiosco</p>  
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><a href="InformacionPersonal.html">Inicio</a></li>
                        <li><a href="TiposMasajes.html">Productos</a></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}

export default NavBar;