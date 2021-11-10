import React  from "react";
import ItemCount from "../ItemCount/ItemCount"
import "../Item/Item.css"



const Item = ({items}) => {


  return(
   
    <li key={items.id} className="contenedorCard">
    <div className= "card">
    <span className="nombre">{items.nombre}</span>
        <div className="headerCard">
           <img src={items.imagen} alt={items.nombre} className="cardimg" />
       </div>
    <span className="precio">${items.precio}</span>
    <ItemCount 
   stockLimit={10} initial={1} 
   />
   </div>
</li>
 
  )
}

export default Item;