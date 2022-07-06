import { Link } from 'react-router-dom';
import './Item.css'
import ItemCount from './ItemCount';

function Item( { productos } ) {
    return(
        <div class="card">
            <img src={require(`../assets/img/${productos.img}`)} class="card-img-top" alt=''></img>
            <div class="card-body">
                <h5 class="card-title">{productos.producto}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipo producto: {productos.tipoProducto}</li>
                <li class="list-group-item">Precio: {productos.precio}</li>
                <li class="list-group-item"> <ItemCount/> </li>
                <button type="button" className="btn btn-outline-secondary">
                    <Link activeClassName='active' to={`/id/${productos.id}`}>Ver producto</Link> 
                </button>
            </ul>
        </div>
    )
}

export default Item;