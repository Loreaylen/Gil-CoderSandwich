import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import {getFirestore} from "../../../service/getFirestore"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState({})

   useEffect(() => {
    const dataBase = getFirestore()

    dataBase.collection("products").doc(id).get()
   .then(resp => setItem({id: resp.id, ...resp.data()}))

    
    
   }, [id])
     
   


    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
}


export default ItemDetailContainer;