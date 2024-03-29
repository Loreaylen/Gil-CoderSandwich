import React, {createContext, useState,useEffect} from "react";
import { getFirestore } from "../../service/getFirestore";

export const AppContext = createContext();

const Context = ({ children }) => {

  const [carrito, setCarrito] = useState([]),
        [totalItems, setTotalItems] = useState(0),
        [total, setTotal] = useState(0),
        [obj, setObj] = useState({}),
        [name, setName] = useState(""),
        [mail, setMail] = useState(""),
        [repMail, setRepmail] = useState(""),
        [allID,setAllID] = useState([]),
        [tel, setTel] = useState("");

  const addItem = (product) => {

    const isInCart = carrito.find(x => x.id === product.id)

    if (typeof isInCart !== "undefined") {
      isInCart.cantidad += product.cantidad;
      isInCart.precioTotal = isInCart.precio * isInCart.cantidad;
      setCarrito([...new Set([...carrito, isInCart])]);
      setTotalItems(totalItems + isInCart.cantidad);
      setTotal(total + isInCart.precioTotal);
      return;
    }

    setCarrito([...carrito, product]);
    setTotalItems(totalItems + product.cantidad);
    setTotal(total + product.precioTotal);
  }

  const removeItem = (item) => {
    const removed = carrito.filter(x => x.id !== item.id);
    setCarrito(removed);
    setTotalItems(totalItems - item.cantidad);
    setTotal(total - item.precioTotal);
  }

  const clear = () => {
    setCarrito([]);
    setTotalItems(0);
    setTotal(0);
  }

  useEffect(() => {
    const dataBase = getFirestore();
    dataBase.collection("products").get()
    .then(data => setAllID(data.docs.map(prod => ( prod.id ))))
    }, []);

  const contextValue = {
    addItem,
    removeItem,
    clear,
    carrito,
    totalItems,
    totalPrecio: total,
    obj,
    setObj,
    name,
    setName,
    mail,
    setMail,
    repMail,
    setRepmail,
    tel,
    setTel,
    allID
  }

  return(
  <AppContext.Provider value={contextValue}>
    {children} 
  </AppContext.Provider>

)}

export default Context;
