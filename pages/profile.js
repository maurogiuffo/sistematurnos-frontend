import React, { useContext, useState, useEffect } from "react";
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

////////////////// Manejo de Fechas
import moment from "moment";
import "date-fns";

import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";

// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// por lo tanto no ponemos 'return'

// hacer validaciones
const Profile = () => {
	const INITIAL_STATE = {
		// Pasar a ingles
		selectedDate: moment(),
		selectedTime: moment(),
		daysQuantity: "0",
		turnsQuantity: "0",
		duration: "15",
		client: null,
	};

	const {
		values,
		errors,
		handleSubmit,
		handleChange,
		handleBlur,
		handleDateChange,
		handleTimeChange,
		selectedDate,
		selectedTime
	} = useValidation(INITIAL_STATE, validateTurnsLote, createLote);

	// Extraemos los values

	const { daysQuantity, turnsQuantity, duration, client } = values;

	useEffect(() => {
		const getTurnsLote = async () => {
			const url = "http://localhost:8080/turn/createLote";

			let json = {
				fechaDesde: selectedDate,
				horaDesde: selectedTime,
				cantDias: daysQuantity,
				cantTurnos: turnsQuantity,
				duracionTurno: duration,
				cliente: client,
			};

			const lote = await axios.post(url, json);
		};
		getTurnsLote();
	}, []);

	async function createLote() {
		try {
			const addTurnsLote = async () => {
				const url = "http://localhost:8080/turn/createLote";

				const res = await axios.post(url, json);
			};
			addProfessionals();
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			<Layout>
				<h1
					css={css`
						text-align: center;
						margin-top: 5rem;
					`}
				>
					Crear Lote de Turnos
				</h1>

				<Form onSubmit={handleSubmit} novalidate>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<Grid container justify="space-around">
							<KeyboardDatePicker
								margin="normal"
								id="selectedDate"
								label="Ingrese Día de Inicio"
								format="yyyy-MM-DD"
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									"aria-label": "change date",
								}}
							/>
							<KeyboardTimePicker
								margin="normal"
								id="selectedTime"
								label="Hora Inicio"
								value={selectedTime}
								onChange={handleTimeChange}
								KeyboardButtonProps={{
									"aria-label": "change time",
								}}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
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
			</Layout>
		</div>
	);
};

export default Profile;
