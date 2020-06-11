import React, { useContext, useState } from "react";
import { css } from "@emotion/core";
import axios from "axios";
import Layout from "../components/layout/Layout";
// En estos componentes tenemos los estilos
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
// Para las validaciones de formulario hacemos un hook que viene a ser una especie de funcion
// que vamos a reutilizar para todos los formularios que tengamos
import useValidation from "../hooks/useValidation";
import validateRegister from "../validation/validateRegister";

import { CategoriesContext } from "../context/categoriesContext";

import styled from "@emotion/styled";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// por lo tanto no ponemos 'return'

// hacer validaciones
const Register = () => {
	const Select = styled.select`
		border: 1px solid var(--grey3);
		padding: 1rem;
		min-width: 200px;
	`;

	const { categories } = useContext(CategoriesContext);

	const INITIAL_STATE = {
		name: "",
		lastname: "",
		dni: "",
		email: "",
		usertype: "0",
		category: "",
		password: "",
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
	} = useValidation(INITIAL_STATE, validateRegister, createAccount);

	// Extraemos los values
	const { name, lastname, dni, email, usertype, category, password } = values;
	console.log({ usertype });

	async function createAccount() {
		try {
			const addProfessionals = async () => {
				const url = "http://localhost:8080/user/";

				const res = await axios.post(url, {
					firstName: name,
					lastName: lastname,
					dni: dni,
					email: email,
					password: password,
					usertype: usertype,
					category: category,
				});
				console.log(res);
			};
			addProfessionals();
		} catch (error) {
			console.log(error);
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

					<Field>
						<label htmlFor="dni"> Dni </label>
						<input
							type="number"
							id="dni"
							name="dni"
							value={dni}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Field>
					{errors.dni ? <Error>{errors.dni}</Error> : null}

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
						<div>
	  						{/* MODIFICAR ESTILOS */}
							<p> Seleccione tipo de Usuario : </p>
							<p>
							<label htmlFor="usertype0">
								Cliente
							</label>
							<input
									id="usertype0"
									type="radio"
									name="usertype"
									value="0"
									onChange={handleChange}
									checked={usertype == "0"}
								/>
							</p>
							<p>
							<label htmlFor="usertype1">
								Profesional
							</label>
							
							<input
									id="usertype1"
									type="radio"
									name="usertype"
									value="1"
									onChange={handleChange}
									checked={usertype == "1"}
								/>
							</p>
						</div>
						{console.log(usertype)}
					</Field>

					{usertype == 1 ? (
						<Field>
							{
								<label htmlFor="category">
									Categoria :
									<Select
										name="category"
										onChange={handleChange}
									>
										<option value="">
											{" "}
											-- Categorias --
										</option>
										{categories.map((category) => (
											<option
												key={category.id}
												value={category.categoryName}
											>
												{console.log(category)}
												{category.categoryName}
											</option>
										))}
									</Select>
								</label>
							}
						</Field>
					) : null}

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
