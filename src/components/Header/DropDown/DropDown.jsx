import React, {useContext} from "react";
import {auth} from "../../../service/getFirestore";
import { AppUserContext } from "../../Context/UserContext";
import "./DropDown.css";

const DropDown = ({setIslogged}) => {

  const {logout, setToggle} = useContext(AppUserContext);

  return(
    <div className="dropCtn" >
      <h4 className="currentName">{auth.currentUser?.displayName}</h4>
      <h6 className="currentEmail">{auth.currentUser?.email}</h6>
      <button onClick={() => {logout(setIslogged); setToggle(false)}}>Cerrar sesión</button>
    </div>
  )}

export default DropDown;
