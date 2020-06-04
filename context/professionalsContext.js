import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
// los datos de los profesionales van a salir de este componente

export const ProfessionalsContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProfessionalsProvider = (props) => {
	// state del context
	const [professionals, setProfessionals] = useState([]);
	
	// Una vez que se cargue este context en el que estamos se va a ejecutar el useEffect
	// Y ahi se hace el llamado a la API
	useEffect(() => {
		const getProfessionals = async () => {
			const url = 'http://localhost:8080/user/';

			const professionals = await axios.get(url);
	
			setProfessionals(professionals.data);
		}
		getProfessionals();
	
	}, [])

	return (
		// todo lo que se incluya aca es lo que se va a enviar
		<ProfessionalsContext.Provider
			value={{
				professionals	
			}}
		>
			{props.children}
		</ProfessionalsContext.Provider>
	)
}
export default ProfessionalsProvider;
