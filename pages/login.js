import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

import { css } from "@emotion/core";
import { Form } from "../components/ui/Form";

import useValidation from "../hooks/useValidation";
import validateLogin from "../validation/validateLogin";

import Router from "next/router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = props => {

	const [state, setState] = useState(props);

	const INITIAL_STATE = {
		email: "",
		password: ""
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
	} = useValidation(INITIAL_STATE, validateLogin, login);

	// Extraemos los values
	const {email, password } = values;

	 function login() {
		try {

			const userLogin =  () => {
				const url = "http://localhost:8080/login/";
				
				const res =  axios.post(url, {			
					email: email,
					password: password,
				});
			return res;
			};

			userLogin().then(res => {
				sessionStorage.setItem("authorization", res.data.token);
				//sessionStorage.setItem("user", JSON.stringify(res.data.user));
				sessionStorage.setItem("userId", res.data.user.id);
				sessionStorage.setItem("firstName", res.data.user.firstName);
				sessionStorage.setItem("lastName", res.data.user.lastName);
				sessionStorage.setItem("email", res.data.user.email);
				sessionStorage.setItem("userType", res.data.user.userType);
				sessionStorage.setItem("isLogged", true);

				setState({
					firstName: res.data.user.firstName,
					isLogged : true,
				})
			});
			

		} catch (error) {
			console.log(error);
		}
	}
		
	
	return (
		<div>
			<Layout {...state}>
				{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
				<h1
					css={css`
						text-align: center;
						margin-top: 5rem;
					`}
				>
					Login
				</h1>

				<Form onSubmit={handleSubmit} novalidate>
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
					

					<Button variant="contained" type="submit">
						Iniciar Sesión
					</Button>
				</Form>
				
			</Layout>
		</div>
	);
};

export default Login;
