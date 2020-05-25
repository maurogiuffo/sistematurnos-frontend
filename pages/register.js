import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit } from "../components/ui/Form";

//import styled from "@emotion/styled";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Register = () => (
	<div>
		<Layout>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<h1
				css={css`
					text-align: center;
					margin-top: 5rem;
				`}
			>
				Registro
			</h1>
			<Form>
				<Field>
					<label htmlFor="name"> Nombre </label>
					<input
						type="text"
						id="name"
						placeholder="Tu nombre"
						name="name"
					/>
				</Field>

				<Field>
					<label htmlFor="lastname"> Apellido </label>
					<input
						type="text"
						id="lastname"
						placeholder="Tu apellido"
						name="lastname"
					/>
				</Field>

				<Field>
					<label htmlFor="birthday"> Fecha de Nacimiento </label>
					<input type="date" id="birthday" name="birthday" />
				</Field>

				<Field>
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						id="email"
						placeholder="Email de contacto"
						name="email"
					/>
				</Field>

				<Field>
					<label htmlFor="password"> Password </label>
					<input
						type="password"
						id="password"
						placeholder="password"
						name="password"
						minLength="6"
						maxLength="10"
					/>
				</Field>

				<InputSubmit type="submit" value="Crear Cuenta" />
			</Form>
		</Layout>
	</div>
);

export default Register;
