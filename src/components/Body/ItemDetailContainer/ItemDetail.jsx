import React, {useState, useContext} from "react";
import {AppContext} from "../../Context/CartContext";
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../Item/Item.css";

const ItemDetail = ({ item }) => {

  const [, setValue] = useState(1),
        [isBuying, setIsBuying] = useState(false),
        {addItem} = useContext(AppContext);

  const handleAdd = (cantidad) => {
      setValue(cantidad);
      delete item.categoria;
      item.cantidad = cantidad;
      item.precioTotal = item.precio * item.cantidad;
      addItem({...item});
      setIsBuying(true);
  }

  return (
    <div key={item?.id} className="contenedorCard">
      <div className="card">
        <span className="nombre">{item.nombre}</span>
        <div className="headerCard">
            <img src={item.imagenUrl} alt={item.nombre} className="cardimg" />
        </div>

        <span className="precio">${item.precio}</span>

        <p className="descripcion">{item.descripcion}</p>

        <span className="descripcion">{item.categoria}</span>

        {isBuying === false 
        ? <ItemCount stockLimit={item.stock} initial={1} onAdd={handleAdd}/>
        : <div className="btnCtn">
          <Link to="/cart"><button className="irAlCarrito">Ir al carrito</button></Link>
          <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
          </div>
        }

      </div>
    </div>
  )}

export default ItemDetail;
