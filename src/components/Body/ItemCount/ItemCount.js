import React, {useState} from "react";
import "../ItemCount/ItemCount.css"


const ItemCount = ({stockLimit , initial}) => { 
const [contador, setContador] = useState(initial)

const onAdd = () => {
    if(contador === stockLimit){
        return 
    }
    setContador(contador + 1)
}

const onSub =  () => {
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
             onClick={() => onSub()}
             >-</button>
             <span>{contador}</span>
             <button
             className={contador === 10 ? "disabled" : "active"}
             onClick={() => onAdd()}
             >+</button>
         </div>

        <button className="botonCarrito">Añadir al carrito</button>

         </div>
    )
}

export default ItemCount;