import React from "react";
import useCartContext from './CartContext';
import { Link } from 'react-router-dom';
import './CartView.css'

function CartView(){
    const { cart, clearCart, removeFromCart } = useCartContext();
    console.log("cart:", cart)
    if (cart.length === 0){
        return <>
            <h4>No hay prodcutos en el carrito.</h4>
            <Link to='/'> 
                <button type="button" className="btn btn-outline-secondary" > Volver al Catálogo </button> 
            </Link>
            </> 
    }else { 
        return<div class="cards">
                {cart.map(itemCart =>{
                        return <div class="card cards2" key={itemCart.id}>
                                    <img src={itemCart.img}/>
                                    <h2>{itemCart.producto}</h2>
                                    <h2>{itemCart.precio}</h2>
                                    <h2>{itemCart.cant}</h2>
                                    <h3>${itemCart.precio * itemCart.cant}</h3>
                                    <button onClick={() => removeFromCart(itemCart.id)} type="button" class="btn btn1 btn-outline-danger">X</button>
                                </div>
                    })}
                    <button onClick={clearCart} className="btn btn-danger btn-sm">Vaciar Carrito</button>
                </div>
    } 
}

export default CartView;