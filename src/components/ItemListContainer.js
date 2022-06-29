import './ItemListContainer.css'
import productosDB from "../data/productos";
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function getProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productosDB);
        }, 500);
    });
}
function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    useEffect( () =>{
        getProductos().then(rtaPromise => {
            setProductos(rtaPromise);
        })
    }, []);
    return(
        <ItemList productos={productos}/>
    );
}
export default ItemListContainer;