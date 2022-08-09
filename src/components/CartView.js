/* eslint-disable jsx-a11y/alt-text */
import useCartContext from '../components/CartContext';
import { Link } from 'react-router-dom';
import './CartView.css'
import ExpenseForm from '../components/ExpenseForm';
import { useState } from 'react';

function CartView(){
    const { cart, clearCart, removeFromCart, totalCart, calcPriceCart } = useCartContext();
    const [finalCompra,setFinalCompra] = useState(false);

    /*function handleBuy(){   
        const cantItems = cart.map((item) => ({
            title: item.producto,
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
        alertClearCart()
        
    }
    console.log("cart:", cart)
    */
    const handleBuy = () =>{
        setFinalCompra(true)
    }
    

    if (cart.length === 0){
        return (
            <div className="text-center">
                <div class="alert alert-light container w-25 mt-3" role="alert">
                    No hay Productos en el carrito.
                </div>
                <Link to='/'> 
                    <button type="button" class="btn btn-light" > Volver al Catálogo </button> 
                </Link>
            </div>
        )   
    }else { 
        return  (
            <div>
                <table className='table container mt-4'>
                    <thead>
                        <tr className="bg-light">
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                {cart.map(itemCart =>{
                        return(
                            <tr className="bg-light" key={itemCart.id}>
                                <td>{itemCart.producto}</td>
                                <td>{itemCart.precio}</td>
                                <td>{itemCart.cant}</td>
                                <td><button onClick={() => removeFromCart(itemCart.id)} type="button" className="btn btn-outline-danger">X</button></td>
                            </tr>
                        )
                    })}
                    <tbody>
                        <tr className="bg-light">
                            <td>ToTal:</td>
                            <td>${totalCart()}</td>
                            <td>{calcPriceCart()}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className='d-flex buttons mt-4'>
                        <button onClick={clearCart} className="btn btn-light m-1">Vaciar Carrito</button>
                        <button onClick={handleBuy} className="btn btn-light m-1">Finalizar Compra</button>
                    </div>
                    <div className='d-flex mt-4'>
                        {finalCompra ? <ExpenseForm/> : <></>}
                    </div>
            </div>
            )
    } 
}

export default CartView;