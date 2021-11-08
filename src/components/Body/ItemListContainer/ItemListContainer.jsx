import React from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../Item/ItemList"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h2 className="greeting">{greeting}</h2>
            
            <ItemList />
        </div>
        
    )
}

export default ItemListContainer;

