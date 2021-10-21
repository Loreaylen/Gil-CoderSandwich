import NavBar from "./components/Header/NavBar"

function App() {
  return (
    <div className="App">
    <NavBar 
    menu={["INICIO", "PRODUCTOS", "LOCALES", "CONTACTO"]}
    
    />
    </div>
  );
}

export default App;
