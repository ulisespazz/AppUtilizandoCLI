import './ItemListContainer.css'
import productosDB from "../data/productos";
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function getProducto(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productosDB);
        }, 500);
    });
}
function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);

    useEffect( () =>{
        getProducto().then(rtaPromise => {
            setProducto(rtaPromise[0]);
        });
    }, []);
    return(
        <ItemDetail producto={producto}/>
    );
}
export default ItemDetailContainer