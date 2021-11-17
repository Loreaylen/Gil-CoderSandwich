import React, {useState} from "react";
import "../ItemCount/ItemCount.css"


const ItemCount = ({stockLimit , initial, onAdd}) => { 
const [contador, setContador] = useState(initial)

const add = () => {
    if(contador === stockLimit){
        return 
    }
    setContador(contador + 1)
}

const sub =  () => {
    if(contador === 1){
        return 
    }
    setContador(contador - 1)
}

    return (
        <div className="container">
            <span className="text">Cantidad</span>
         <div className="btnContainer">
             <button 
             className={contador === 1 ? "disabled" : "active"}
             onClick={() => sub()}
             >-</button>
             <span>{contador}</span>
             <button
             className={contador === 10 ? "disabled" : "active"}
             onClick={() => add()}
             >+</button>
         </div>

        <button className="botonCarrito" onClick={() => onAdd(contador)}>Añadir al carrito</button>

         </div>
    )
}

export default ItemCount;