import React  from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/detail/${items.id}`}><button className="verMas">Ver más</button></Link>

   </div>
</li>
 
  )
}

export default Item;