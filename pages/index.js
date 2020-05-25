import React from "react";
import Layout from "../components/layout/Layout";
//import styled from "@emotion/styled";

import ProfessionalsProvider from '../context/professionalsContext';

// Entonces en este index que es el que primero se va a cargar cuando
// ejecutemos el servidor pegamos el Layout

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Home = () => (
	<ProfessionalsProvider>
		<Layout>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<h1> Sistema de Turnos </h1>
			{/* despues pensar que queremos que se vea ni bien se entra a la web */}
		</Layout>
	</ProfessionalsProvider>
);

export default Home;
