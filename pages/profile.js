import React, { useState, useEffect, useContext } from "react";
import { css } from "@emotion/core";
import axios from "axios";
import Layout from "../components/layout/Layout";
// En estos componentes tenemos los estilos
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
// Para las validaciones de formulario hacemos un hook que viene a ser una especie de funcion
// que vamos a reutilizar para todos los formularios que tengamos
import useValidation from "../hooks/useValidation";
import validateTurnsLote from "../validation/validateTurnsLote";

import styled from "@emotion/styled";
import Router from "next/router";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import { AuthContext } from "../context/authContext";


// hacer validaciones
const Profile = () => {
	
	const { id, userType } = useContext(AuthContext);
	const INITIAL_STATE = {
		
		selectedDate: "25/6/2020",
		selectedTime: "20:00",
		daysQuantity: "0",
		turnsQuantity: "0",
		duration: "15",
		//client: null,
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
		
	} = useValidation(INITIAL_STATE, validateTurnsLote, createLote);

	// Extraemos los values
	
	const { selectedDate, selectedTime, daysQuantity, turnsQuantity, duration  } = values;
	console.log(values);
	console.log(id);
	async function createLote() {
		try {
			
			const getTurnsLote = async () => {
				const url = "http://localhost:8080/turn/createLote";

				let json = {
					userId: id,
					fechaDesde: selectedDate + "T" + selectedTime,
					cantidadDias: daysQuantity,
					cantidadTurnos: turnsQuantity,
					duracionTurno: duration,
					//cliente: client,
				};

				const lote = await axios.post(url, json);
				console.log(lote);
			};
			getTurnsLote();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		
			<Layout >
			

{userType == 'PROFESSIONAL'? (
<>
				<h1
					css={css`
						text-align: center;
						margin-top: 5rem;
					`}
				>




					Crear Lote de Turnos
				</h1>



				<Form onSubmit={handleSubmit} novalidate>
					<TextField
						id="selectedDate"
						name="selectedDate"
						label="Fecha"
						type="date"
						InputLabelProps={{
							shrink: true,
						}}
						onChange={handleChange}
						onBlur={handleBlur}
					/>

					<TextField
						id="selectedTime"
						name="selectedTime"
						label="Hora Inicial"
						placeholder="Hora Inicial"
						type="time"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{/* {errors.lastname ? <Error>{errors.lastname}</Error> : null} */}

					<TextField
						id="daysQuantity"
						name="daysQuantity"
						label="Cantidad Dias"
						placeholder="Días que quiere fijar turnos"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{/* {errors.dni ? <Error>{errors.dni}</Error> : null} */}

					<TextField
						id="turnsQuantity"
						name="turnsQuantity"
						label="Cantidad de Turnos"
						placeholder="Turnos a fijar por día"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{/* {errors.email ? <Error>{errors.email}</Error> : null} */}

					<TextField
						id="duration"
						name="duration"
						label="Duracion "
						placeholder="Duración de cada Turno"
						type="number"
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{/* {errors.password ? <Error>{errors.password}</Error> : null} */}

					<Button variant="contained" type="submit">
						Crear Lote
					</Button>
				</Form>
				</>
) : null}
			</Layout>
		
	);
};

export default Profile;