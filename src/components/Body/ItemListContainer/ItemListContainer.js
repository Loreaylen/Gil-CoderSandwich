import React from "react";
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <h2 className="greeting">{greeting}</h2>
    )
}

export default ItemListContainer;

