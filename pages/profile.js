import React , { useContext, useState, useEffect }from "react";
import Layout from "../components/layout/Layout";

import { css } from "@emotion/core";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";

import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Profile = () => {

	const INITIAL_STATE = {
		fechaDesde: "2020-01-20",
		horaDesde: "",
		cantidadDias: "",
		cantidadTurnos: "",
		duracionTurno: 0

	};
	
	function handleSubmit(){
		createAccount();
	}

	const [ values, setValues ] = useState(INITIAL_STATE);

	const { fechaDesde, horaDesde, cantidadDias, cantidadTurnos, duracionTurno } = values;
	
	async function createAccount() {

		const id =sessionStorage.getItem("userId");

		try {
			const addProfessionals = async () => {
				const url = "http://localhost:8080/turn/createLote/";
	
				const  json={
					userId: id,
					fechaDesde: fechaDesde,
					horaDesde: horaDesde,
					cantidadDias: cantidadDias,
					cantidadTurnos: cantidadTurnos,
					duracionTurno: duracionTurno
				};

				const res = await axios.post(url, json);
			};
			addProfessionals().then(res => {
				console.log(res);
			});
		} catch (error) {
			console.log('error ' + error);
		}
	}
	
	
	const handleChange = e => {
		e.preventDefault();
		 setValues({
			 ...values,
			[e.target.name] : e.target.value
		 })
	 }
	

	function handleBlur(){
		
	}
	

	return (

<div>
			<Layout>
			<h2> Crear Turnos </h2>
				{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
				<h1
					css={css`
						text-align: center;
						margin-top: 5rem;
					`}
				>
					Agregar Turnos
				</h1>

				<Form onSubmit={handleSubmit} novalidate>
				<TextField
						id="fechaDesde"
						name="fechaDesde"
						label="Fecha"
						type="date"
						defaultValue="2020-01-20"
						
						InputLabelProps={{
						shrink: true,
						}}
						onChange={handleChange}
						/>
					<TextField
						id="cantidadDias"
						name="cantidadDias"
						label="cantidadDias"
						placeholder="cantidadDias"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
						{/* {errors.dni ? <Error>{errors.dni}</Error> : null} */}

					{/* {errors.name ? <Error>{errors.name}</Error> : null} */}
					<TextField
						id="horaDesde"
						name="horaDesde"
						label="Hora Inicial"
						placeholder="Hora Inicial"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
										{/* {errors.lastname ? <Error>{errors.lastname}</Error> : null} */}

			
					<TextField
						id="duracionTurno"
						name="duracionTurno"
						label="duracionTurno"
						placeholder="duracionTurno"
						type="number"						
						onChange={handleChange}
						onBlur={handleBlur}
					/>
						{/* {errors.email ? <Error>{errors.email}</Error> : null} */}

					<TextField
						id="cantidadTurnos"
						name="cantidadTurnos"
						label="cantidadTurnos"
						placeholder="cantidadTurnos"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
											{/* {errors.password ? <Error>{errors.password}</Error> : null} */}


					<Button variant="contained" type="submit">
						Guardar
					</Button>
				</Form>
				
			</Layout>
		</div>
	);
};

export default Profile;
