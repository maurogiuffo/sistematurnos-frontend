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
	const [turns, setTurns] = useState([]);
	// Una vez que se cargue este context en el que estamos se va a ejecutar el useEffect
	// Y ahi se hace el llamado a la API

	useEffect(() => {
		const getTurnsLote = async () => {
			const url = 'http://localhost:8080/turn/createLote';
	
			const lote = await axios.get(url);
			console.log(lote);
			setTurns(lote.data);
		}
		getTurnsLote();
		
		
	}, [])


	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();

		const getUsers = () => {
			const url = "http://localhost:8080/user/";
			try {
				axios.get(url, { cancelToken: source.token }).then((data) => {
					setUsers(data.data);
				});
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log("cancelled");
				} else {
					throw error;
				}
			}
		};
		getUsers();
		if(users) {
			
			const getProfessionals = users.filter(
				(user) => user.usertype === "PROFESSIONAL"
			);

			setProfessionals(getProfessionals);

			const getClients = users.filter(
				(user) => user.usertype === "CUSTOMER"
			);
			setClients(getClients);
		}

		return () => {
			source.cancel();
		};
	}, []);

	/* const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        axios.get(RANDOM_USER_API, { cancelToken: source.token }).then(data => {
          setUser(data.data);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };*/

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
