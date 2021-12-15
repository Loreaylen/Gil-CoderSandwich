import React, {useContext} from "react"
import { Link } from "react-router-dom";
import Form from "../Form/Form"
import {AppContext} from "../../Context/CartContext"
import {getFirestore} from "../../../service/getFirestore"
import "../Cart/Cart.css"

const Cart = ({setIsopen}) => {

    const {carrito, totalPrecio, removeItem, clear, setObj, name, setName, mail, setMail, repMail, setRepmail, tel, setTel} = useContext(AppContext) 



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
    .then(resp => setObj({orderID:resp.id, order:order}))
    .catch(err => console.log(err))
    .finally( 
        setName(""),
        setMail(""),
        setRepmail(""),
        setTel(""))
        clear()
        setIsopen(true)
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
             <td className="totalCell">Total: ${totalPrecio}</td>   
             <td><button onClick={() => clear()} >Eliminar todo</button></td>   
             </tr>
              
        </tbody>
      
       </table>

        <Form generateOrder={generateOrder}/>

       </div> 
    )

}

export default Cart