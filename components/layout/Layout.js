import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/core";
import Head from "next/head";


// Este va a ser el componente principal
//Todo lo que este fuera del <main> es el contenido que se
// va a repetir en las distintas vistas, como por ej header nav y footer

const Layout = (props) => {


	return (
		<>
			{/* Estilos que se van a aplicar en toda la App por eso globales */}
			<Global
				styles={css`
					:root {
						--grey: #3d3d3d;
						--grey2: #6f6f6f;
						--grey3: #e1e1e1;
						--orange: #da552f;
					}

					html {
						/* para poder utilizar medidas rem como pixeles y hacerlo responsive*/
						/* En este caso cuando pongamos 1.6 rem seria igual a decir 16px */
						/*MODIFIQUE EL FONT SIZE PORQUE INTERFERIA CON LOS ESTILOS DE MATERIAL, PARA RESPONSIVE SE PUEDE FIJAR UN FONT SIZE MAS CHICO Y TODO EL RESTO SE ADAPTA USANDO REM */
						font-size: 16px;
						box-sizing: border-box;
					}
					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}
					body {
						font-size: 1rem;
						/* Interlineado */
						line-height: 1.5;
						font-family: "PT Sans", sans-serif;
					}
					h1,
					h2,
					h3 {
						/* se aplicó solo margen hacia abajo */
						margin: 0, 0, 2rem, 0;
						line-height: 1.5;
					}
					h1,
					h2 {
						font-family: "Roboto Slab", serif;
						font-weight: 700;
					}
					h3 {
						font-family: "PT Sans", sans-serif;
					}
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					}
					a {
						/* le quitamos la linea de subrayado a los enlaces */
						text-decoration: none;
					}
				`}
			/>
			{/* ////////////////////////////////////////////////////////// */}

			<Head>
				<html lang="es" />
				<title> Sistema de Turnos </title>


				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"

				/>
				<link href="/static/css/app.css" rel="stylesheet" />
			</Head>

			<Header />

			<main>{props.children}</main>
		</>
	);
};

export default Layout;
