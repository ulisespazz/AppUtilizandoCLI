import './Item.css'
import ItemCount from './ItemCount';


function ItemDetail( { producto } ) {
    return(
        <div className="card">
            <div className="card-body">
                <h5 class="card-title">{producto.producto}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo producto: {producto.tipoProducto}</li>
                <li className="list-group-item">Precio: {producto.precio}</li>
                <li className="list-group-item"> <ItemCount/> </li>
            </ul>
        </div>
    )
}

export default ItemDetail;