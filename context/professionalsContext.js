import React, { createContext, useState } from "react";

// los datos de los profesionales van a salir de este componente

export const ProfessionalsContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProfessionalsProvider = (props) => {
	// state del context
	const [hola, setHola] = useState('hola');

	return (
		// todo lo que se incluya aca es lo que se va a enviar
		<ProfessionalsContext.Provider
			value={{
				hola	
			}}
		>
			{props.children}
		</ProfessionalsContext.Provider>
	)
}
export default ProfessionalsProvider;
