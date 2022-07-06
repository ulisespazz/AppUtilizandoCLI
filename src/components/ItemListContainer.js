import './ItemListContainer.css'
import productosDB from "../data/productos";
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';


function getProductos(idcategoria){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (idcategoria !== undefined){
                const arrayFiltered = productosDB.filter((producto)=> {
                    return producto.tipoProducto === idcategoria;
                });
                return resolve(arrayFiltered)
            }else{
                resolve(productosDB);
            }
        }, 500);
    });
}
function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const {idcategoria} = useParams();
    console.log("id :" + idcategoria)

    useEffect( () =>{
        getProductos(idcategoria).then(rtaPromise => {
            setProductos(rtaPromise);
        })
    }, [idcategoria]);
    return(
        <ItemList productos={productos}/>
    );
}
export default ItemListContainer;