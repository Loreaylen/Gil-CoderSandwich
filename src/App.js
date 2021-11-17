import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar"
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Body/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
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
          <Route exact path="/cart" />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
