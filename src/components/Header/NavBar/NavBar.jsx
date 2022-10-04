import React, {useContext} from "react";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown.jsx";
import CartWidget from "../CartWidget/CartWidget";
import {AppContext} from "../../Context/CartContext";
import {AppUserContext} from "../../Context/UserContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../logoSanguche.png";
import "./NavBar.css";

const NavBar = ({isLogged, setIslogged}) => {

  const { totalItems} = useContext(AppContext),
				{toggle, setToggle, user,userProv} = useContext(AppUserContext);

	return (
    <header className="NavBar">
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="contenedor">
            <img src={logo} className="logo" alt="Logo"></img>
            <h1>Coder Sandwich</h1>
          </div>
        </Link>

        <ul className="listaMenu">
          <Link to="/" style={{ textDecoration: 'none' }}><li key={0}>INICIO</li></Link>
          <Link to="/categories/baguette" style={{ textDecoration: 'none' }}><li key={1}>BAGUETTES</li></Link>
          <Link to="/categories/miga" style={{ textDecoration: 'none' }}><li key={2}>MIGA</li></Link>
        </ul>

        <div className="cartContainer">
          <Link to="/cart">   
            <CartWidget />
            <span className="totalItems"  >{totalItems === 0 ? "" : totalItems}</span>
          </Link>
        </div>
      
        <div>
          {isLogged 
            ? <div className="userCtn" onClick={() => setToggle(!toggle)}>
                <AccountCircleIcon className="userIcon"></AccountCircleIcon><span className="nombreDeUsuario">
                {userProv || user?.displayName?.toUpperCase()}</span>
              </div> 
          : <Link to="/authentication" style={{textDecoration: "none"}}>
              <span className="ingresar">INGRESAR</span>
            </Link>
          }

        </div>
      </nav>
      {toggle && <DropDown setIslogged={setIslogged}/>}
    </header>
)}

export default NavBar;
