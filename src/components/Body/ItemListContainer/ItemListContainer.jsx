import React, {useState, useEffect, useMemo} from "react";
import { useParams } from "react-router";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../Item/ItemList"
import products from "../../../products.json"
import Loading from "../../Loading"

const ItemListContainer = ({greeting}) =>{

    
const [listado, setListado] = useState()
const [loading, setLoading] = useState(true)

    const itemLoaded  = useMemo(() =>  new Promise((resolve,reject) => {
        setTimeout(() => resolve(products.products), 2000)
        setLoading(true)
    }), [])


const {categoryID} = useParams()

useEffect(() => {
    if(categoryID) {
        itemLoaded.finally(() => setLoading(false))
        itemLoaded.then(listadoDeProductos => setListado(listadoDeProductos.filter(p => p.categoria === categoryID)))
        itemLoaded.catch(err => console.log(err))   
    }
    else {
        itemLoaded.finally(setLoading(false))
        itemLoaded.then(listadoDeProductos => setListado(listadoDeProductos))
        itemLoaded.catch(err => console.log(err))
    
    }
}, [categoryID, itemLoaded, setListado])

 return (
        <div className="itemListContainer">
             

            <h2 className="greeting">{greeting}</h2>

            <Loading/>
            
            <ItemList listaProductos={listado}/>
               
        </div>
        
    )
}

export default ItemListContainer;

