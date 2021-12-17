import React, {useState} from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CartContext from "./components/Context/CartContext.jsx";
import UserContext from "./components/Context/UserContext.jsx"
import Cart from "../src/components/Body/Cart/Cart.jsx"
import Auth from "../src/components/Body/Auth/Auth.jsx"
import NewUser from "../src/components/Body/Auth/NewUser.jsx"
import NavBar from "./components/Header/NavBar/NavBar.jsx"
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/Body/ItemDetailContainer/ItemDetailContainer"
import Modal from "../src/components/Modal/Modal.jsx"

function App() {

  const [isLogged, setIslogged] = useState(false)

  const [isOpen, setIsopen] = useState(false)



  return (
    <div className="App">
      <UserContext setIslogged={setIslogged} isLogged={isLogged}>
      <CartContext>
      <BrowserRouter>
        <NavBar isLogged={isLogged} setIslogged={setIslogged}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Bienvenido a Coder Sandwich!" />
          </Route>

          <Route exact path="/categories/:categoryID">
            <ItemListContainer greeting="Productos" />
          </Route>

          <Route exact path="/detail/:id" component={ItemDetailContainer} />
          <Route exact path="/cart">
          <Cart setIsopen={setIsopen} isLogged={isLogged}/>
          </Route>
          <Route exact path="/authentication" > 
           {isLogged ? <Redirect to="/"/> : <Auth setIslogged={setIslogged} />}
          </Route>

          <Route exact path="/newuser">
          {isLogged ? <Redirect to="/"/> : <NewUser setIslogged={setIslogged} />} 
          </Route>
        </Switch>
      </BrowserRouter>
      <Modal show={isOpen} handleClose= {setIsopen} />

      </CartContext>
      </UserContext>
    </div>
    
  );
}

export default App;
