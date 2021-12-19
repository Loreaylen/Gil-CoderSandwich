import React, {useState, useEffect, useContext} from "react";
import {AppContext} from "../../Context/CartContext"
import { useParams } from "react-router";
import {getFirestore} from "../../../service/getFirestore"
import NotFound from "../../NotFound"
import ItemDetail from "./ItemDetail"
import "../ItemDetailContainer/ItemDetailContainer.css"


const ItemDetailContainer = () => {

    const {allID} = useContext(AppContext)

    const {id} = useParams()
    const [item, setItem] = useState({})

   useEffect(() => {
    const dataBase = getFirestore()
    dataBase.collection("products").doc(id).get()
   .then(resp => setItem({id: resp.id, ...resp.data()}))
   }, [id])
   const exist = allID.includes(id)
  return (
        <div className="itemDetailContainer">
            {
             exist ? 
             <ItemDetail item={item} />
                :
                <NotFound/>
            }
        </div>
    )
}


export default ItemDetailContainer;