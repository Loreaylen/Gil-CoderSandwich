import React, {useContext, useState} from "react"
import { Link } from "react-router-dom";
import {AppContext} from "../../Context/CartContext"
import {getFirestore} from "../../../service/getFirestore"
import "../Cart/Cart.css"

const Cart = () => {

    const {carrito, totalPrecio, removeItem, clear} = useContext(AppContext) 

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")


const generateOrder = () => {
   
    const order = {}

    order.buyer = {nombre: name, email: mail, tel: tel}
    order.total = totalPrecio
    order.items = carrito.map(cartItem => {
        const id= cartItem.id
        const nombre = cartItem.nombre
        const cantidad = cartItem.cantidad
        const precio = cartItem.precioTotal
        return {id, nombre, cantidad, precio}
    })

    const dataBase = getFirestore()
    dataBase.collection('orders').add(order)
    .then(resp => alert(`¡Su compra se ha realizado correctamente! \n ID de su compra: ${resp.id}`))
    .catch(err => console.log(err))
    .finally(
        setName(""),
        setMail(""),
        setTel(""))
}


  

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
             <td><button className="terminarCompra" onClick={() => generateOrder()}>Terminar mi compra</button></td>
            </tr>  
        </tbody>
      
       </table>

       <div className="inputs">
           <label htmlFor="nombre">Nombre:</label>
           <input type="text" id="nombre" value={name} onChange={(e) => setName(e.target.value)}/>
           <label htmlFor="mail">Mail:</label>
           <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
           <label htmlFor="telefono">Teléfono:</label>
           <input type="number"  id="telefono" value={tel} onChange={(e) => setTel(e.target.value)}/>


       </div>

       </div> 
    )

}

export default Cart