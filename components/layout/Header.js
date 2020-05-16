import React from 'react';
import Search from '../ui/Search';

// Este Header se pegará en el Layout 

const Header = () => {
    return ( 
        <header>
            <div>
                <div>
                    <p> Imagen Logo </p>

                    <Search />

                    {/* Nav aca */}
                </div>

                <div>
                    {/* Menu administracion Login, Register, Cerrar sesion */}
                </div>
            </div>


        </header>
     );
}
 
export default Header;