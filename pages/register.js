import React from "react";
import Layout from "../components/layout/Layout";
import { Form } from "../components/ui/Form";

//import styled from "@emotion/styled";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Register = () => (
	<div>
		<Layout>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<h1> Registro </h1>
			<Form>
				<div>
					<label htmlFor="name"> Nombre </label>
					<input
						type="text"
						id="name"
						placeholder="Tu nombre"
						name="name"
					/>
				</div>

				<div>
					<label htmlFor="lastname"> Apellido </label>
					<input
						type="text"
						id="lastname"
						placeholder="Tu apellido"
						name="lastname"
					/>
				</div>
				<div>
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						id="email"
						placeholder="Email de contacto"
						name="email"
					/>
				</div>

				<div>
					<label htmlFor="password"> Password </label>
					<input
						type="password"
						id="password"
						placeholder="password"
						name="password"
						minLength="6"
						maxLength="10"
					/>
				</div>

				<input type="submit" value="Crear Cuenta" />
			</Form>
		</Layout>
	</div>
);

export default Register;
