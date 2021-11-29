import React, {useContext} from "react"
import { Link } from "react-router-dom";
import {AppContext} from "../../Context/CartContext"
import "../Cart/Cart.css"

const Cart = () => {

const {carrito, totalPrecio, removeItem, clear} = useContext(AppContext)   

if(carrito.length === 0) {
    return (<div className="noItems">
        <h3>No tienes items en el carrito</h3>
        <Link to="/"><h4>Buscar productos</h4></Link>
    </div>)
}

    return(   
     <div className="cartBody"> 
       <table>
           <thead>
               <tr>
                <td></td>
                <td>Nombre</td>
                <td>Cantidad</td>
                <td>Precio</td>
                <td></td>   
               </tr>
           </thead>
           <tbody>  
            {carrito?.map(item => 
            <tr key={item.id}>
                <td><img src={item.imagenUrl} alt="" /></td>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>${item.precioTotal}</td>
                <td><button onClick={() => removeItem(item)}>Eliminar</button></td>
            </tr>
            
              )}
            <tr>
             <td>Total: ${totalPrecio}</td>   
             <td><button onClick={() => clear()} >Eliminar todo</button></td>   
             <td><button className="terminarCompra">Terminar mi compra</button></td>
            </tr>  
        </tbody>
      
       </table>

       </div> 
    )

}

export default Cart