import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProfessionalsTurnsContext = createContext();

const ProfessionalsTurnsProvider = (props) => {

    // crear state del context
    const [ professionalsTurns, setData ] = useState([]);
    
    // ejecutar llamado a la api
    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:8080/user/category?categoryName=cat1'
            const professionalsTurnsres = await axios.get(url);
            console.log(professionalsTurns.data);
            setData(professionalsTurnsres.data);
        }
        getData();
    }, []); // El array vacio para que solo se ejecute una vez para cargar todas las categorias
    
    return (
        <ProfessionalsTurnsContext.Provider
            value= {{ 
                professionalsTurns
            }}
        >   
            {props.children} 
        </ProfessionalsTurnsContext.Provider>
    )
}

export default ProfessionalsTurnsProvider;