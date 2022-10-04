import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { AppUserContext } from "../../Context/UserContext.jsx";

const Auth = ({setIslogged}) => {

const { login, loginUser, setLoginuser,loginPass, setLoginpass } = useContext(AppUserContext);

return(
    <div className="loginCtn">
      <h2 className="iniciarSesion">Iniciar sesión</h2>

      <label htmlFor="email" className="loginLabel">Email:</label>
      <input type="email" id="email" className="loginInput" value={loginUser} onChange={(e) => setLoginuser(e.target.value)}/>

      <label htmlFor="pass" className="loginLabel">Contraseña:</label>
      <input type="password" id="pass" className="loginInput" value={loginPass} onChange={(e) => setLoginpass(e.target.value)}/>

      <button className="iniciarBtn" onClick={() => login(setIslogged)}>Iniciar sesión</button>
      <h6 className="noTienesCuenta">¿No tienes una cuenta?</h6>

      <Link to="/newuser" style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
        <button>Registrarse</button>
      </Link>
    </div>
)}

export default Auth;
