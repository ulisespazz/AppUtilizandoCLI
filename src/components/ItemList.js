import Item from "./Item";

function ItemList( { productos } ) {
    return(
        <>
        { productos.map(thisproductos =>{
            return(
                <Item productos={thisproductos} key={thisproductos.id} />
            )
        })
    }
    </>
    )
}

export default ItemList;