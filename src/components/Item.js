import { Link } from 'react-router-dom';
import './Item.css'

function Item( { productos } ) {
    return(
        <div class="card">
            <img src={productos.img} class="card-img-top" alt=''></img>
            <div class="card-body">
                <h5 class="card-title">{productos.producto}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipo producto: {productos.tipoProducto}</li>
                <li class="list-group-item">Precio: {productos.precio}</li>
                <li class="list-group-item">
                    <button type="button" className="btn btn-outline-danger">
                        <Link to={`/id/${productos.id}`}>Ver producto</Link> 
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Item;
