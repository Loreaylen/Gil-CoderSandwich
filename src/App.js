import {BrowserRouter, Switch, Route} from "react-router-dom"

import NavBar from "./components/Header/NavBar"
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
    <NavBar 
    menu={["INICIO", "PRODUCTOS", "LOCALES", "CONTACTO"]}
    />
    <ItemListContainer greeting="¡Bienvenido a Coder Sandwich!"/>
    </div>
  );
}

export default App;
