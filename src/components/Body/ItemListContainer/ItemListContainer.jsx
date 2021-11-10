import React, {useState} from "react";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../Item/ItemList"
import products from "../../../products.json"




const ItemListContainer = ({greeting}) =>{


const itemLoaded = new Promise((resolve,reject) => 
        setTimeout(() => resolve(products.products), 2000)
)

const [listado, setListado] = useState()
    itemLoaded.then(listadoDeProductos => setListado(listadoDeProductos))

 return (
        <div>
            <h2 className="greeting">{greeting}</h2>
            
            <ItemList listaProductos={listado}/>
        </div>
        
    )
}

export default ItemListContainer;

