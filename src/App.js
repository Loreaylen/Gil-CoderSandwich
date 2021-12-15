import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "./components/Context/CartContext";
import Cart from "../src/components/Body/Cart/Cart.jsx"
import NavBar from "./components/Header/NavBar"
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Body/ItemDetailContainer/ItemDetailContainer"
import Modal from "../src/components/Modal/Modal.jsx"

function App() {

  const [isOpen, setIsopen] = useState(false)



  return (
    <div className="App">
      <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido a Coder Sandwich!" />
          </Route>
          <Route exact path="/categories/:categoryID">
            <ItemListContainer greeting="Productos" />
          </Route>
          <Route exact path="/detail/:id" component={ItemDetailContainer} />
          <Route exact path="/cart">
          <Cart setIsopen={setIsopen}/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Modal show={isOpen} handleClose= {setIsopen} />

      </CartContext>
    </div>
    
  );
}

export default App;
