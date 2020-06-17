import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// los datos de los profesionales van a salir de este componente

export const UsersContext = createContext();

// Provider es donde se encuentran las funciones y state
const UsersProvider = (props) => {
	// state del context
	const [users, setUsers] = useState([]);
	const [professionals, setProfessionals] = useState([]);
	const [clients, setClients] = useState([]);
	// Una vez que se cargue este context en el que estamos se va a ejecutar el useEffect
	// Y ahi se hace el llamado a la API
	useEffect(() => {
		const getUsers = async () => {
			const url = "http://localhost:8080/user/";

			const users = await axios.get(url);
			console.log(users);
			setUsers(users.data);

			const getProfessionals = users.data.filter(
				(user) => user.usertype === "PROFESSIONAL"
			);

			setProfessionals(getProfessionals);
			console.log(professionals);

			const getClients = users.data.filter(
				(user) => user.usertype === "CUSTOMER"
			);
			setClients(getClients);
			console.log(clients);
		};
		getUsers();
	}, []);

	return (
		// todo lo que se incluya aca es lo que se va a enviar
		<UsersContext.Provider
			value={{
				professionals,
				clients,
				users,
			}}
		>
			{props.children}
		</UsersContext.Provider>
	);
};
export default UsersProvider;
