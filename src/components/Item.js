import './Item.css'
import ItemCount from './ItemCount';
import img from "../assets/img/default.jpg"


function Item( { productos } ) {
    return(
        <div class="card">
            <img src={img} class="card-img-top" alt=''></img>
            <div class="card-body">
                <h5 class="card-title">{productos.producto}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipo producto: {productos.tipoProducto}</li>
                <li class="list-group-item">Precio: {productos.precio}</li>
                <li class="list-group-item"> <ItemCount/> </li>
            </ul>
        </div>
    )
}

export default Item;