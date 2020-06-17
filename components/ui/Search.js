import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Router from "next/router";
import Button from "@material-ui/core/Button";

import { UsersContext } from "../../context/usersContext";
import { CategoriesContext } from "../../context/categoriesContext";

const Form = styled.form`
	position: relative;
`;

const Select = styled.select`
	border: 1px solid var(--grey3);
	padding: 1rem;
	min-width: 200px;
`;

const Container = styled.div`
	display: block;
`;

// Este Search se va a pegar en el Header
const Search = () => {
	
	const [search, setSearch] = useState({
		category: "",
	});

	  // Toma lo que devuelve el create context y tendremos disponible
  // todo lo que este en el value

	const categories  = useContext(CategoriesContext);
	
	// const { setSearchProfessionals, setQuery } = useContext(
	// 	ProfessionalsContext
	// );

	  // función para leer los contenidos
	const getProfessionals = (e) => {
		e.preventDefault();
		
		if (search.trim() === "")  return ;
		// setSearch({
		// 	...search,
		// 	[e.target.name]: e.target.value,
		// });

		//redireccionar al usuario a /buscar
		Router.push({
			pathname: "/search",
			query: { q: search },
		});
	};

	return (
		<Form
			onSubmit={getProfessionals}
		>
			<div
			
			> 
				{ <Select
					name="category"
					placeholder="Buscar Profesionales"
					onChange={(e) => setSearch(e.target.value)}
				>
					<option value=""> -- Categorias --</option>
					{categories.categories.map( category => (
						<option key={category.id} value={category.categoryName}>
							{category.categoryName}
						</option>
					))}
				</Select> }

				<Button variant="contained" type="submit">
						Buscar
					</Button>
			</div>
		</Form>
	);
};

export default Search;
