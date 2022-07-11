import { useState } from 'react';
import './Item.css'
import ItemCount from './ItemCount';

function ItemDetail( { producto } ) {

    const [isInCart, setIsInCart] = useState(false);

    function onAdd(count){
        console.log(`Agregaste al carrito ${count} prodcutos`);
        setIsInCart(true);
    }

    return(
        <div className="card">
            <div className="card-body">
                <h5 class="card-title">{producto.producto}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo producto: {producto.tipoProducto}</li>
                <li className="list-group-item">Precio: {producto.precio}</li>
                 
                {isInCart?
                    <li className="list-group-item">
                        <button type="button" className="btn btn-outline-secondary" >Comprar</button>
                    </li>
                :
                    <li className="list-group-item"><ItemCount onAdd={onAdd} /></li>
                }

            </ul>
        </div>
    )
}

export default ItemDetail;