import React, {useState} from "react";
import products from "../../../products.json"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"



const ItemDetailContainer = () => {



    const getItem = new Promise ((resolve, reject) =>
    setTimeout(() => resolve(products.products[0]), 2000)
    )

    const [item, setItem] = useState([])

    getItem.then(itemProducto => setItem(itemProducto))

    

return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
)
}


export default ItemDetailContainer;