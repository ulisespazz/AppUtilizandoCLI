import React from 'react';
import { createBuyOrder} from '../services/firestore';
import useCartContext from '../components/CartContext';
import { useState } from 'react';


function UserForm(){ /*Formulario para enviar datos a la db */

    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newProduct, setnewProduct] = useState("")

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }
    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }
    const productHandler = (event) => {
        setnewProduct(event.target.value)
    }
    
    const { cart, totalCart, clearCart, alertClearCart } = useCartContext();
    
    function Buy(){   
        const cantItems = cart.map((item) => ({
            title: item.descripcion,
            cant: item.cant,
            price: item.precio,
            id: item.id,
            } 
        ))
        
        const buyOrder = {
            buyer: {
                name: newName,
                phone: newProduct,
                email: newEmail,
            },
            items: cantItems,
            date: new Date(),
            total: totalCart()
            }
        alertClearCart()
        createBuyOrder(buyOrder)
        clearCart()
    }

return( 
    <form className="bg-light container w-25" >
        <h4 className='m-3'>Ingrese sus datos para finalizar la compra.</h4>
        <div className="m-3">
            <label className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" value={newName} onChange={nameHandler} />
        </div>
        <div className="m-3">
            <label className="form-label ">Email</label>
            <input className="form-control" value={newEmail} onChange={emailHandler}/>
        </div>
        <div className="m-3">
            <label className="form-label fuente-blanca">Telefono</label>
            <input type="text" className="form-control" value={newProduct} onChange={productHandler}/>
        </div>
        <button type="button" class="btn btn-outline-danger m-1" onClick={Buy}>Finalizar pedido</button>
    </form>
    )
    
}
export default UserForm;