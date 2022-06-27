import React, { useState } from "react";
function ItemCount() {
    const [count, setCount] = useState(1);

    function sumaCantidad(){
        setCount(count + 1)
    }
    function restarCantidad(){
        if (count > 1){
            setCount(count- 1)
        }
    }

    return(
        <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3x1 text-2x1 font-bold title-font mb">
                    Compra tus Productos
                </h1>
                <div>
                    <div>
                        <button type="button" class="btn btn-outline-secondary" onClick={restarCantidad}>-</button>
                        <span>    { count }    </span>
                        <button type="button" class="btn btn-outline-secondary" onClick={sumaCantidad}>+</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-secondary">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;