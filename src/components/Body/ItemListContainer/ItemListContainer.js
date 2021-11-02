import React from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2 className="greeting">{greeting}</h2>
            <ItemCount 
            stockLimit={10} initial={1} 
            />
        </div>
        
    )
}

export default ItemListContainer;

