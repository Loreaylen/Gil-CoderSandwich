import React from "react";
import Item from "../Item/Item"
import "../Item/Item.css"

const ItemList = ({listaProductos}) => {
   
    return( 
        <ul className="contenedorLista">
             {listaProductos?.map(producto => <Item key={producto.id} items={producto}/>)}
        </ul>
       
    )
}



export default ItemList