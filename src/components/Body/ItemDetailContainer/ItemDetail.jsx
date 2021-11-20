import React, {useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "../Item/Item.css"

const ItemDetail = ({ item }) => {

  const  [value, setValue] = useState(false)

    const handleAdd = (cantidad) => {
       setValue(cantidad)
    }



    return (
        <div key={item?.id} className="contenedorCard">
            <div className="card">
                <span className="nombre">{item.nombre}</span>
                <div className="headerCard">
                    <img src={item.imagen} alt={item.nombre} className="cardimg" />
                </div>
                <span className="precio">${item.precio}</span>
                <p className="descripcion">{item.descripcion}</p>
                <span className="descripcion">{item.categoria}</span>
                {value === false 
                
                ?  <ItemCount
                    stockLimit={10} initial={1} onAdd={handleAdd}
                />
                :<Link to="/cart"><button className="irAlCarrito">Ir al carrito</button></Link>
                
                 }
                
            </div>
        </div>
    )
}


export default ItemDetail;