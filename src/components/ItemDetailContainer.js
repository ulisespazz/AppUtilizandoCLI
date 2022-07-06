import './ItemListContainer.css'
import productosDB from "../data/productos";
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function getProducto(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const productoFound = productosDB.find((producto)=>{
                return parseInt(id) === producto.id
            })
            resolve(productoFound);
        }, 500);
    });
}
function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const { iditem } = useParams()
    useEffect( () =>{
        getProducto(iditem).then(rtaPromise => {
            setProducto(rtaPromise);
        });
    }, [iditem]);
    return(
        <ItemDetail producto={producto}/>
    );
}

export default ItemDetailContainer;