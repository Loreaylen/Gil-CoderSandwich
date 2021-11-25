import React, {createContext, useState} from "react"

export const AppContext = createContext()

const Context = ({ children }) => {

   const [carrito, setCarrito] = useState([])

   const [totalItems, setTotalItems] = useState(0)

   const [total, setTotal] = useState(0)

   const addItem = (product) => {
      const isInCart = carrito.find(x => x.id === product.id)



      if (typeof isInCart !== "undefined") {
         isInCart.cantidad += product.cantidad
         isInCart.precioTotal = isInCart.precio * isInCart.cantidad
         setCarrito([...new Set([...carrito, isInCart])])
         setTotalItems(totalItems + isInCart.cantidad)
         setTotal(total + isInCart.precioTotal)
         return;
      }

      setCarrito([...carrito, product])
      setTotalItems(totalItems + product.cantidad)
      setTotal(total + product.precioTotal)

   }

   const removeItem = (item) => {
      const removed = carrito.filter(x => x.id !== item.id)
      setCarrito(removed)
      setTotalItems(totalItems - item.cantidad)
      setTotal(total - item.precioTotal)
   }

   const clear = () => {
      setCarrito([])
      setTotalItems(0)
      setTotal(0)
   }



const contextValue = {
   addItem: addItem,
   removeItem: removeItem,
   clear: clear,
   carrito: carrito,
   totalItems: totalItems,
   totalPrecio: total

}

return(
<AppContext.Provider value={contextValue}>
   {children} 
</AppContext.Provider>

)
}

export default Context