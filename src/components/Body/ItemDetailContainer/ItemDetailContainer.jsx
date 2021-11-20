import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import products from "../../../products.json"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])

   useEffect(() => {
    setItem(products.products.find(p => p.id === Number(id)))
   }, [id])
     
   


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer;