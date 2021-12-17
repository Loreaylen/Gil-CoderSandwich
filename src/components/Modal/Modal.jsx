import React, {useContext} from "react"
import {AppContext} from "../Context/CartContext"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../Modal/Modal.css"

const Modal = ({show, handleClose}) => {

    
    const { obj } = useContext(AppContext)
    

    return (
        <div className={show ? "modal display-block" : "modal display-none" }>
           <div className="modalCtn">
            <div className="modalSecCtn">
            <button type="button" onClick={() => handleClose(false) } className="closeBtn">X</button>    
            <h2 className="graciasPorSuCompra">Gracias por tu compra, { obj?.order?.buyer?.nombre}</h2>
            <p className="datosDeCompra">Se enviarán los datos de tu compra al siguiente correo electrónico: <strong>{ obj?.order?.buyer?.email}</strong></p>
             <p key={obj.orderID} className="datosDeCompra">El ID de tu compra es: <strong>{obj.orderID}</strong></p> 
            <h4 className="totalDeCompra">El total de tu compra es: ${obj?.order?.total}</h4> 

            <LocalMallIcon className="bolsa" style={{fontSize: '48px'}}/>


            </div>
            </div> 
        </div>
    )
}

export default Modal;