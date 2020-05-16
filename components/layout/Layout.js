import React from 'react'
// El uso de Next nos provee del componente Link para realizar la navegación
import Link from 'next/link';

// Este va a ser el componente principal 
//Todo lo que este fuera del <main> es el contenido que se 
// va a repetir en las distintas vistas, como por ej header nav y footer

const Layout = props => {
    return (    
        // Como solo se puede retornar un elemento en react, se utiliza
        // '<> </>' que es una abreviacion de <Fragment> </Fragment> pero para usarlo de 
        //de esa manera hay que hacer el import, de esta forma nos ahorramos el import
        <>
           <h1> Aca se pegaria el componente header </h1>

            
            <nav>
                <Link href='/'> Inicio </Link>
                <Link href='/register'> Registro</Link>
            </nav>
           <main>
               {props.children}
           </main>
        </>
      );
}
 
export default Layout;