import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  return(
    <div>
      <h2 style={{fontSize: 24, fontFamily: "Jura"}}>Not found</h2>
      <p style={{fontSize: 16, fontFamily: "Jura"}}>El producto no existe</p>
      <Link to="/">
        <span style={{fontSize: 14, fontFamily: "Jura"}}>Seguir buscando</span>
      </Link>
    </div>
)}

export default NotFound;
