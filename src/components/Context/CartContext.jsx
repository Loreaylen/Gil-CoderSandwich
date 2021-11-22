import React, {createContext, useState} from "react"

export const AppContext = createContext()

const Context = ({children}) => {

const [carrito, setCarrito] = useState([])

const addItem = (product) => {
   const isInCart = carrito.find(x => x.id === product.id)
  

   if(typeof isInCart !== "undefined") {
      isInCart.cantidad += product.cantidad
      isInCart.precioTotal = isInCart.precio * isInCart.cantidad
      setCarrito([ ...new Set([...carrito, isInCart]) ]
      )
return;
   }
   setCarrito([...carrito, product])

}

// const removeItem = (productId) => {
//    const removed = carrito.filter(x => x.id !== productId)
//    setCarrito(removed)
// }

const contextValue = {
   addItem: addItem
}

return(
<AppContext.Provider value={contextValue}>
   {children} 
</AppContext.Provider>

)
}

export default Context