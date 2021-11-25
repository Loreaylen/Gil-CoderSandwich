import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import CartWidget from "./CartWidget"
import {AppContext} from "../Context/CartContext"
import logo from "./logoSanguche.png"
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';


const NavBar = () => {

const {carrito, totalItems} = useContext(AppContext)

    return (
        <header className="NavBar">
            <nav>
            <Link to="/" style={{ textDecoration: 'none' }} ><div className="contenedor">
             <img src={logo} className="logo" alt="Logo"></img>
             <h1>Coder Sandwich</h1>
                        
                </div>
                </Link>
                <div className="buscador">
                    <Input type="text" placeholder="Buscar" disableUnderline={true} />
                    <SearchIcon className="lupa" />
                </div>
                <ul className="listaMenu">
                        <Link to="/" style={{ textDecoration: 'none' }}><li key={0}>INICIO</li></Link> 
                        <Link to="/categories/baguette" style={{ textDecoration: 'none' }}><li key={1}>BAGUETTES</li></Link>
                        <Link to="/categories/miga" style={{ textDecoration: 'none' }}><li key={2}>MIGA</li></Link> 
                        <Link to="/" style={{ textDecoration: 'none' }}><li key={3}>CONTACTO</li></Link>
                    
                </ul>
                <div className="cartContainer">
                <Link to="/cart">   
                <CartWidget />
                <span className="totalItems"  >{totalItems === 0 ? "" : totalItems}</span>
                </Link> </div>
            </nav>
        </header>
    );
}

export default NavBar;