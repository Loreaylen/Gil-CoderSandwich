import React, {useState,useMemo, useEffect} from "react";
import products from "../../../products.json"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"



const ItemDetailContainer = () => {

    const id = 2 

    const getItem = useMemo(() =>  new Promise ((resolve, reject) =>
    setTimeout(() => resolve(products.products), 2000)
    ), []);

    const [item, setItem] = useState([])

useEffect(() => {getItem.then(result => setItem(result.find(item => item.id === id)))},[getItem])

return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
)
}


export default ItemDetailContainer;