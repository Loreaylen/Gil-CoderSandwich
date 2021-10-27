import React from "react";
import "./NavBar.css"
import CartWidget from "./CartWidget"
import logo from "./logoSanguche.png"
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';


const NavBar = (props) => {

    return (
        <header className="NavBar">
            <nav>
                <div className="contenedor">
                    <img src={logo} className="logo" alt="Logo"></img>
                    <h1>Coder Sandwich</h1>
                </div>
                <div className="buscador">
                    <Input type="text" placeholder="Buscar" disableUnderline={true} />
                    <SearchIcon className="lupa" />
                </div>
                <ul className="listaMenu">
                    {
                        props.menu.map((item, indice) => <li key={indice}>{item}</li>)
                    }
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
}

export default NavBar;