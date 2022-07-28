import './ItemListContainer.css'
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getData } from '../services/firestore'
//import { dataToFirebase} from '../services/firestore'
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
        <section>
            <ItemList productos={productos}/>
            
        </section>
        //<button onClick={dataToFirebase} >Add to firebase</button>
    );
}
export default ItemListContainer;