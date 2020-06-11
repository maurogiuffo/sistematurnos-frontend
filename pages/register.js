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


import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Formik} from 'formik';

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
	console.log( values );

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

					<TextField id="name" name="name" label="Nombre" placeholder="Tu nombre" onChange={handleChange} onBlur={handleBlur}/>

					<TextField id="lastName" name="lastname" label="Apellido" placeholder="Tu apellido" onChange={handleChange} onBlur={handleBlur}/>

					<TextField id="dni" name="dni" label="D.N.I" placeholder="Tu dni" type="number" onChange={handleChange} onBlur={handleBlur}/>

					<TextField id="email" name="email" label="Email" placeholder="Tu email" type="email" onChange={handleChange} onBlur={handleBlur}/>

					<TextField id="password" name="password" label="Password" placeholder="Tu contraseña" type="password" onChange={handleChange} onBlur={handleBlur}/>

					<FormControl component="fieldset">
						<FormLabel component="legend">Registrarse como:</FormLabel>
						<RadioGroup aria-label="Registrarse como:" value={usertype} onChange={handleChange}>
							<FormControlLabel value="0" checked={usertype === "0"} control={<Radio name="usertype"/>} label="Cliente" />
							<FormControlLabel value="1" checked={usertype === "1"} control={<Radio name="usertype"/>} label="Profesional" />
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
									<MenuItem key={category.id} value={category.categoryName}> 
										{category.categoryName}
								</MenuItem>))}
							</Select>
						</FormControl>
								)}
					
				<Button variant="contained" type="submit">Registrarse</Button>


				</Form>

				{/* 
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
	  						{/* MODIFICAR ESTILOS }
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
			*/}
			</Layout>
		</div>
	);
};

export default Register;
