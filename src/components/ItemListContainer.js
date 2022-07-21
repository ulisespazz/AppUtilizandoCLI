import './ItemListContainer.css'
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getData } from '../services/firestore'

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const {idcategoria} = useParams();
    useEffect( () =>{
        getData().then(rtaPromise => {
        if (idcategoria === undefined){
            setProductos(rtaPromise)
        }else {
            let findProduct = rtaPromise.filter((rta)=> rta.tipoProducto === idcategoria)
            setProductos(findProduct);
        }
        })
    }, [idcategoria]);
    return(
        <ItemList productos={productos}/>
    );
}
export default ItemListContainer;