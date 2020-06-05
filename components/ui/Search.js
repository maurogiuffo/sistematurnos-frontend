import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Router from "next/router";
import Button from "../ui/Button";

import { ProfessionalsContext } from "../../context/professionalsContext";
import { CategoriesContext } from "../../context/categoriesContext";

const Form = styled.form`
	position: relative;
`;

const Select = styled.select`
	border: 1px solid var(--grey3);
	padding: 1rem;
	min-width: 200px;
`;

// Este Search se va a pegar en el Header
const Search = () => {
	
	const [search, setSearch] = useState({
		category: "",
	});

	  // Toma lo que devuelve el create context y tendremos disponible
  // todo lo que este en el value

	// VERIFICAR QUE PASA ACÁ
	const categories  = useContext(CategoriesContext);
	
	const { setSearchProfessionals, setQuery } = useContext(
		ProfessionalsContext
	);

	  // función para leer los contenidos
	const getProfessionals = (e) => {
		e.preventDefault();

		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});

		//redireccionar al usuario a /buscar
		Router.push({
			pathname: "/search",
			query: { q: search },
		});
	};

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				setSearchProfessionals(search);
				setQuery(true);
			}}
		>
			<div>
				{ <Select
					name="category"
					placeholder="Buscar Profesionales"
					onChange={(e) => setSearch(e.target.value)}
				>
					<option value=""> -- Categorias --</option>
					{categories.map( category => (
						<option key="id" value="categoryName">
							console.log(category);
						</option>
					))}
				</Select> }

				<Button
					bgColor="true"
					type="submit"
					onChange={getProfessionals}
				>
					{" "}
					Buscar{" "}
				</Button>
			</div>
		</Form>
	);
};

export default Search;
