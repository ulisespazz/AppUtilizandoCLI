/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import useCartContext from './CartContext';
import { Link } from 'react-router-dom';
import './CartView.css'
import { createBuyOrder } from '../services/firestore';

function CartView(){
    const { cart, clearCart, removeFromCart, totalCart } = useCartContext();
    const [orderDone, setOrderDone] = useState(false)

    function handleBuy(){   
        const cantItems = cart.map((item) => ({
            title: item.descripcion,
            cant: item.cant,
            price: item.precio,
            id: item.id,
        }))

        const buyOrder = {
            buyer: {
                name: "Ulises Paz",
                phone: "1159468980",
                email: "ulises@coder.com",
            },
            items: cantItems,
            date: new Date(),
            total: totalCart()
        }
        createBuyOrder( buyOrder )
        setOrderDone(true)
    }
    

    console.log("cart:", cart)
    if (cart.length === 0){
        return <div>
            {orderDone ? <h3>¡Compra confirmada! ID de su compra:</h3> :
                <div className="text-center">
                    <h4>No hay prodcutos en el carrito.</h4>
                    <Link to='/'> 
                        <button type="button" className="btn btn-outline-secondary" > Volver al Catálogo </button> 
                    </Link>
                </div>
            }
            </div> 
    }else { 
        return<div className="cards">   
                {cart.map(itemCart =>{
                        return <div className="card cards2" key={itemCart.id}>
                                    <img src={itemCart.img}/>
                                    <h2>{itemCart.producto}</h2>
                                    <h2>{itemCart.precio}</h2>
                                    <h2>{itemCart.cant}</h2>
                                    <h3>${itemCart.precio * itemCart.cant}</h3>
                                    <button onClick={() => removeFromCart(itemCart.id)} type="button" className="btn btn1 btn-outline-danger">X</button>
                                </div>
                    })}
                    <button onClick={clearCart} className="btn btn-danger btn-sm">Vaciar Carrito</button>
                    <button onClick={handleBuy} className="btn btn-danger btn-sm">Comprar</button>
                </div>
    } 
}

export default CartView;