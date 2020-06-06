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
            const url = 'http://localhost:8080/category/'
        
            const categories = await axios.get(url);
            console.log(categories.data);
            setCategories(categories.data);
        }
        getCategories();
    }, []); // El array vacio para que solo se ejecute una vez para cargar todas las categorias
    
    return (
        <CategoriesContext.Provider
            value= {{ 
                categories
            }}
        >   
            {props.children} 
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;