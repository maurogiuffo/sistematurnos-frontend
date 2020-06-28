import React, { createContext, useState, useEffect } from 'react';

// Crear context
export const AuthContext = createContext();
// Siempre que se crea un context se tiene que crear un Provider
// Que va a ser de donde van a salir los datos y las funciones

const AuthProvider = (props) => {

    // crear state del context
    const [ isLogged, setIsLogged ] = useState(false);
    const [ name, setName ] = useState("");
    
    // ejecutar llamado a la api
    useEffect(() => {
        
    }, [isLogged]); // El array vacio para que solo se ejecute una vez para cargar todas las categorias

    console.log(isLogged);
    return (
        <AuthContext.Provider
            value= {{ 
                setName,
                setIsLogged,
                isLogged,
                name
            }}
        >   
            {props.children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider;