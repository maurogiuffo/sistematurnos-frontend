import React, { createContext, useState, useEffect } from 'react';

// Crear context
export const AuthContext = createContext();
// Siempre que se crea un context se tiene que crear un Provider
// Que va a ser de donde van a salir los datos y las funciones

const AuthProvider = (props) => {

    // crear state del context
    const [ isLogged, setIsLogged ] = useState(false);
    const [ name, setName ] = useState("");
    const [id, setId] = useState(null);
    const [userId, setUserId] = useState(null);
    // ejecutar llamado a la api
    useEffect(() => {
        console.log(`En context el isLogged es: ${isLogged}`);
         
    }, [isLogged]); // El array vacio para que solo se ejecute una vez para cargar todas las categorias

    
    return (
        <AuthContext.Provider
            value= {{ 
                setName,
                setIsLogged,
                isLogged,
                name,
                id,
                setId,
                userId,
                setUserId
            }}
        >   
            {props.children} 
        </AuthContext.Provider>
    )
}

export default AuthProvider;