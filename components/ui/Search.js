import React, { useState } from "react";
import styled from "@emotion/styled";
import Router from "next/router";

const Form = styled.form`
	position: relative;
`;

const InputText = styled.input`
	border: 1px solid var(--grey3);
	padding: 1rem;
	min-width: 300px;
`;

const InputSubmit = styled.button`
	height: 3rem;
	width: 3rem;
	display: block;
	background-size: 4rem;
	background-image: url("/static/img/search.png");
	background-repeat: no-repeat;
	position: absolute;
	right: 1rem;
	top: 1px;
	background-color: white;
	border: none;
	/* esto para quitar el texto de la lupa */
	text-indent: -9999px;

	&:hover {
		cursor: pointer;
	}
`;

// Este Search se va a pegar en el Header
const Search = () => {

	const [ search, setSearch ] = useState('');

	const searchProfessional = e => {
		e.preventDefault();

		if(search.trim() === '') return null;

		//redireccionar al usuario a /buscar
		Router.push({
			pathname:'/search',
			query: { q : search }
		})

	}

	return (
		<Form
			onSubmit={ searchProfessional }
		>
			<InputText 
				type="text" 
				placeholder="Buscar Profesionales"
				onChange= { e => setSearch(e.target.value)}
			/>

			<InputSubmit type="submit"> Buscar </InputSubmit>
		</Form>
	);
};

export default Search;
