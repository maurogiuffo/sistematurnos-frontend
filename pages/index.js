//import React, { useContext } from "react";
import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
//import styled from "@emotion/styled";

// Entonces en este index que es el que primero se va a cargar cuando
// ejecutemos el servidor pegamos el Layout
import ProfessionalDetails from "../components/layout/ProfessionalDetails";
import { UsersContext } from "../context/usersContext";

//import styled from "@emotion/styled";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Home = () => {
	const { professionals } = useContext(UsersContext);
	const [state, setState] = useState(undefined);

	useEffect(() => {
		//setState(props);

		setState({
			firstName: sessionStorage.getItem("firstName"),
			isLogged: sessionStorage.getItem("isLogged")
		})
	}, []);

	return (
		<Layout {...state}>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<div className="professionals-list">
				<div className="container">
					<ul className="bg-white">
						<h1> En construccion </h1>
						{professionals
							? professionals.map((professional) => (
									// Cuando mapeamos nos pide una key que va a ser un identificador único
									<ProfessionalDetails
										key={professional.id}
										professional={professional}
									/>
							  ))
							: null}
					</ul>
				</div>
			</div>

			{/* despues pensar que queremos que se vea ni bien se entra a la web */}
		</Layout>
	);
};

export default Home;
