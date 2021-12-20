import React, {useState, useEffect, useMemo} from "react";
import { useParams } from "react-router";
import {getFirestore} from "../../../service/getFirestore"
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../Item/ItemList"
import Loading from "../../Loading"

const ItemListContainer = ({greeting}) =>{

    
const [listado, setListado] = useState([])
const [, setLoading] = useState(true)

    
    const dataBase = useMemo(() => {
        setLoading(true)
        return  getFirestore()
    },[]) 
const {categoryID} = useParams()
useEffect(() => {


            if(categoryID){

                dataBase.collection("products").where("categoria", "==", categoryID).get()
            .then(data => setListado(data.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

            }
            else {
                dataBase.collection("products").get()
           .then(data => setListado(data.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

            }
            return () => setListado([])
}, [ categoryID, dataBase])



 return (
        <div className="itemListContainer">
             

            <h2 className="greeting">{greeting}</h2>

            <Loading/>
            
            
                <ItemList listaProductos={listado}/>
            
               
        </div>
        
    )
}

export default ItemListContainer;

