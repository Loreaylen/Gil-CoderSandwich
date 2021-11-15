import React, {useState} from "react";
import products from "../../../products.json"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"



const ItemDetailContainer = () => {



    const getItem = new Promise ((resolve, reject) =>
    setTimeout(() => resolve(products.products), 2000)
    )

    const [item, setItem] = useState([])

    getItem.then(result => setItem(result.filter(item => item.id === id)))

    

return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
)
}


export default ItemDetailContainer;