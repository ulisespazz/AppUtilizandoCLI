import './Item.css'
import ItemCount from './ItemCount';

function ItemDetail( { producto } ) {
    return(
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{producto.producto}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipo producto: {producto.tipoProducto}</li>
                <li class="list-group-item">Precio: {producto.precio}</li>
                <li class="list-group-item"> <ItemCount/> </li>
            </ul>
        </div>
    )
}

export default ItemDetail;