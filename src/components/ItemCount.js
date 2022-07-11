import React, { useState } from "react";
import './ItemCount.css'

function ItemCount({ onAdd }) {
    const [count, setCount] = useState(1);

    function sumaCantidad(){
        setCount(count + 1)
    }
    function restarCantidad(){
        if (count > 1){
            setCount(count- 1)
        }
    }
    function handleClick(){
        onAdd(count);
    }

    return(
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <p className="sm:text-3x1 text-2x1 font-bold title-font mb" >
                    <strong>Compra tus Productos</strong> 
                </p>
                <div>
                    <div className="btnSyR">
                        <button type="button" className="btn btn-outline-secondary" onClick={restarCantidad}>-</button>
                        <span>    { count }    </span>
                        <button type="button" className="btn btn-outline-secondary" onClick={sumaCantidad}>+</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;