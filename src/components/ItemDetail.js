import { useState } from 'react';
import './Item.css'
import ItemCount from './ItemCount';
import useCartContext from './CartContext';
import { Link } from 'react-router-dom';

function ItemDetail( { producto } ) {

    const { addToCart } = useCartContext();

    const [isInCart, setIsInCart] = useState(false);

    function onAdd(count){
        console.log(`Agregaste al carrito ${count} prodcutos`);
        console.log('Agregaste al cart', producto, count);
        setIsInCart(true);
        addToCart(producto, count)
    }

    if (!producto){
        return <h4> Cargando . . .</h4>
    }else{
    return(
        <div className="card">
            <img src={producto.img} class="card-img-top" alt=''></img>
            <div className="card-body">
                <h5 class="card-title">{producto.producto}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo producto: {producto.tipoProducto}</li>
                <li className="list-group-item">Precio: {producto.precio}</li>
                 
                {isInCart?
                    <li className="list-group-item">
                        <Link to='/cart'> 
                            <button type="button" className="btn btn-outline-secondary" >Comprar</button> 
                        </Link>
                    </li>
                :
                    <li className="list-group-item"><ItemCount onAdd={onAdd} /></li>
                }

            </ul>
        </div>
    )
}
}

export default ItemDetail;