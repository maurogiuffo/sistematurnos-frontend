import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
// En estos componentes tenemos los estilos
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";

import useValidation from "../hooks/useValidation";
import validateRegister from "../validation/validateRegister";
import axios from "axios";
//import styled from "@emotion/styled";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'

// hacer validaciones
const Register = () => {
	const INITIAL_STATE = {
		name: "",
		lastname: "",
		//birthday: "",
		email: "",
		password: "",
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
	} = useValidation(INITIAL_STATE, validateRegister, createAccount);

	// Extraemos los values ( faltaria el birthday)
	const { name, lastname, email, password } = values;

	async function createAccount() {
		try {
			const addProfessionals = async () => {
				const url = "http://localhost:8080/costumer/";
	
				const res = await axios.post(url,{"firstName": name, "lastName": lastname, "username": email, "password": password } );
				console.log(res);
			};
			addProfessionals();
		} catch (error) {
			console.log(error)
		}
	
	}

	return (
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
				<Form onSubmit={handleSubmit} novalidate>
					<Field>
						<label htmlFor="name"> Nombre </label>
						<input
							type="text"
							id="name"
							placeholder="Tu nombre"
							name="name"
							value={name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Field>

					{errors.name ? <Error>{errors.name}</Error> : null}

					<Field>
						<label htmlFor="lastname"> Apellido </label>
						<input
							type="text"
							id="lastname"
							placeholder="Tu apellido"
							name="lastname"
							value={lastname}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Field>
					{errors.lastname ? <Error>{errors.lastname}</Error> : null}
					{/* 				
					<Field>
						<label htmlFor="birthday"> Fecha de Nacimiento </label>
						<input type="date" id="birthday" name="birthday" 	value={birthday}
							onChange={handleChange}
							onBlur={handleBlur} />
					</Field> */}

					<Field>
						<label htmlFor="email"> Email </label>
						<input
							type="email"
							id="email"
							placeholder="Email de contacto"
							name="email"
							value={email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Field>
					{errors.email ? <Error>{errors.email}</Error> : null}

					<Field>
						<label htmlFor="password"> Password </label>
						<input
							type="password"
							id="password"
							placeholder="password"
							name="password"
							value={password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Field>
					{errors.password ? <Error>{errors.password}</Error> : null}

					<InputSubmit type="submit" value="Crear Cuenta" />
				</Form>
			</Layout>
		</div>
	);
};

export default Register;
