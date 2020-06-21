import React, { useContext, useState, useEffect } from "react";
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
import Router from "next/router";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// por lo tanto no ponemos 'return'

// hacer validaciones
const Register = () => {
	const { categories } = useContext(CategoriesContext);

	const INITIAL_STATE = {
		name: "",
		lastname: "",
		dni: "",
		email: "",
		usertype: 0,
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


	async function createAccount() {
		try {
			const addProfessionals = async () => {
				const url = "http://localhost:8080/user/";
				var json= "";
				if(usertype == '0')
				{
					json=
					{
						firstName: name,
						lastName: lastname,
						dni: dni,
						email: email,
						username: email,
						password: password,
						usertype: usertype
					}
				}

				if(usertype == '1')
					{
						json=
						{
							firstName: name,
							lastName: lastname,
							dni: dni,
							email: email,
							username: email,
							password: password,
							usertype: usertype,
							category: {"id": category }
						}
					}
				const res = await axios.post(url, json);
			};
			addProfessionals();
			Router.push('/login');

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
					<TextField
						id="name"
						name="name"
						label="Nombre"
						placeholder="Tu nombre"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{/* {errors.name ? <Error>{errors.name}</Error> : null} */}
					<TextField
						id="lastName"
						name="lastname"
						label="Apellido"
						placeholder="Tu apellido"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
										{/* {errors.lastname ? <Error>{errors.lastname}</Error> : null} */}

					<TextField
						id="dni"
						name="dni"
						label="D.N.I"
						placeholder="Tu dni"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
						{/* {errors.dni ? <Error>{errors.dni}</Error> : null} */}

					<TextField
						id="email"
						name="email"
						label="Email"
						placeholder="Tu email"
						type="email"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
						{/* {errors.email ? <Error>{errors.email}</Error> : null} */}

					<TextField
						id="password"
						name="password"
						label="Password"
						placeholder="Tu contraseña"
						type="password"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
											{/* {errors.password ? <Error>{errors.password}</Error> : null} */}

					<FormControl component="fieldset">
						<FormLabel component="legend">
							Registrarse como:
						</FormLabel>
						<RadioGroup
							aria-label="Registrarse como:"
							value={usertype}
							onChange={handleChange}
						>
							<FormControlLabel
								value="0"
								checked={usertype === "0"}
								control={<Radio name="usertype" />}
								label="Cliente"
							/>
							<FormControlLabel
								value="1"
								checked={usertype === "1"}
								control={<Radio name="usertype" />}
								label="Profesional"
							/>
						</RadioGroup>
					</FormControl>

					{usertype === "1" && (
						<FormControl>
							<FormLabel id="categoryLabel">Categoria:</FormLabel>
							<Select
								labelId="categoryLabel"
								id="categorySelector"
								name="category"
								value={category}
								onChange={handleChange}
							>
								{categories.map((category) => (
									<MenuItem
										key={category.id}
										value={category.id}
									>
										{category.categoryName}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					)}

					<Button variant="contained" type="submit">
						Registrarse
					</Button>
				</Form>
				
			</Layout>
		</div>
	);
};

export default Register;
