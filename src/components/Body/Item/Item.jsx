import React, { useState} from "react";
import ItemCount from "../ItemCount/ItemCount"
import "../Item/Item.css"



const Item = ({itemLoaded}) => {

const [productos, setProductos] = useState()
itemLoaded.then(items => setProductos(items))
  return(
      <ul className="contenedorLista">
         {productos?.map( producto => 
         <li key={producto.id} className="contenedorCard">
             <div className= "card">
             <span className="nombre">{producto.nombre}</span>
                 <div className="headerCard">
                    <img src={producto.imagen} alt={producto.nombre} className="cardimg" />
                </div>
             <span className="precio">${producto.precio}</span>
            <p className="descripcion">{producto.descripcion}</p>
             <ItemCount 
            stockLimit={10} initial={1} 
            />
            </div>
         </li>
         )
         }
         
      </ul>
  )
}

export default Item;