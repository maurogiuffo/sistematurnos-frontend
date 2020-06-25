import React, { useState, useEffect } from 'react';
import Router from "next/router";
// Tiene 3 param: estado inicial, que campo vamos a validar y el 3er parametro la funcion que se va ejecutar (login, register...)
const useValidation = (initialState, toValidate, fn ) => {
    
    // lo que el usuario ingrese en los diferentes inputs
    const [ values, setValues ] = useState(initialState);
    // se va a llenar el objeto errors 
    const [ errors, setErrors ] = useState({});
    // cuando se haga submit el estado cambiara a true y usamos un useEffect para ejecutar el codigo
    const [ submitForm, setSubmitForm ] = useState(false);

    // cuando importemos desde pages register, login... al hacer submit
    // submitForm cambiará su estado a true y se ejecutaran las validaciones

    useEffect(() => {
        if( submitForm){
            // verificamos el contenido de errors
            const noErrors = Object.keys(errors).length === 0;

            if(noErrors) {  
                fn(); // Fn = Función que se ejecuta en el componente   
                
                if(fn.name === "login"){
                    Router.push('/');
                }else if(fn.name === "createAccount"){
                    Router.push("/login");
                }else if(fn.name === "createLote"){
                    Router.push("/schedule");
                }
            }
            // reiniciamos el formulario
            setSubmitForm(false);

        }
    }, [errors]);

    // funcion que se ejecuta cada vez que el usuario escribe
    const handleChange = e => {
       e.preventDefault();
        setValues({
            // agarramos una copia de los valores
            ...values,
           [e.target.name] : e.target.value
        })
    }

    // funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        // toValidate() va a tener las reglas de validacion de lo que el usuario escribe
        const validationErrors = toValidate(values);
        // si hay errores los guardamos
        setErrors(validationErrors);
        setSubmitForm(true);
    }

    // cuando hacemos click fuera del campo en el que estamos ingreando datos
    const handleBlur = () => {
        const validationErrors = toValidate(values);
        setErrors(validationErrors);
    }

    return {
        // retorno todo el state y las funciones
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidation;