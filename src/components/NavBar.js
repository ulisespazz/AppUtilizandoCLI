import './NavBar.css'

function NavBar() {
    return(
        <header>
            <nav class="Navbar">
                <div class="brand-title">
                    <p>Kiosco</p>  
                </div>
                <div class="navbar-links">
                    <ul>
                        <li><a href="InformacionPersonal.html">Inicio</a></li>
                        <li><a href="TiposMasajes.html">Productos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;