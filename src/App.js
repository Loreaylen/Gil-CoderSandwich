import React from "react"
import NavBar from "./components/Header/NavBar"
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Body/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
    <NavBar 
    menu={["INICIO", "PRODUCTOS", "LOCALES", "CONTACTO"]}
    />
    <ItemListContainer greeting="¡Bienvenido a Coder Sandwich!"/>
    <ItemDetailContainer />
    </div>
  );
}

export default App;
