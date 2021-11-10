import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import "../Item/Item.css"

const ItemDetail = ({ item }) => {

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
                <ItemCount
                    stockLimit={10} initial={1}
                />
            </div>
        </div>
    )
}


export default ItemDetail;