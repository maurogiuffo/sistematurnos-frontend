import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// Crear context
export const CategoriesContext = createContext();
// Siempre que se crea un context se tiene que crear un Provider
// Que va a ser de donde van a salir los datos y las funciones

const CategoriesProvider = (props) => {

    // crear state del context
    const [ categories, setCategories ] = useState([]);

    // ejecutar llamado a la api
    useEffect(() => {
        const getCategories = async () => {
            const url = 'http://localhost/categories/'
        
            const categories = await axios.get(url);
            console.log(categories);
            setCategories(categories);
        }
        getCategories();
    }, []); // El array vacio para que solo se ejecute una vez para cargar todas las categorias
    
    return (
        <CategoriesContext.Provider
            value= {{ // Todos los valores que se van a compartir en todos los componentes
                categories
            }}
        >
            {props.children} 
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;