import React from "react";
import Layout from "../components/layout/Layout";
//import styled from "@emotion/styled";

// Entonces en este index que es el que primero se va a cargar cuando
// ejecutemos el servidor pegamos el Layout

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Home = () => (
	<div>
		<Layout>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<h1> Sistema de Turnos </h1>
		</Layout>
	</div>
);

export default Home;
