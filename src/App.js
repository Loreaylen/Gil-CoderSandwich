import NavBar from "./components/Header/NavBar"

function App() {
  return (
    <div className="App">
    <NavBar 
    menu={["Inicio", "Productos", "Locales", "Contacto"]}
    carrito={"Carrito"}
    />
    </div>
  );
}

export default App;
