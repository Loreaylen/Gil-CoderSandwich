import React from "react";


const NavBar = ({ menu, carrito }) => {
    

    return (
        <header className="NavBar"> 
            <nav>
                <ul>
                    { 
                     menu.map((item, indice) => <li key={indice}>{item}</li>)
                    }
                    
                </ul>

                <div>
                    {carrito}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;