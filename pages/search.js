import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ProfessionalDetails from "../components/layout/ProfessionalDetails";
import { useRouter } from "next/router";
import { CategoriesContext } from "../context/categoriesContext";

const Search = () => {
	const router = useRouter();
	// extraemos lo que se manda por query
	const [professionals, setProfessionals] = useState([]);

	const {
		query: { q },
	} = router;
	console.log(q);
	const { categories } = useContext(CategoriesContext);
	console.log(categories);

	useEffect(() => {
		const getProfessionals = categories.filter((category) =>
			category.categoryName.includes(q)
		);
		setProfessionals(getProfessionals[0].users);
	}, [q,categories]);

	return (
		<div>
			<Layout>
				<div className="professionals-list">
					<div className="container">
						<ul className="bg-white">
							<h1> Probando Listado </h1>

							{professionals
								? professionals.map((professional) => (
										// Cuando mapeamos nos pide una key que va a ser un identificador único
										<ProfessionalDetails
											key={professional.id}
											professional={professional}
										/>
								  ))
								: null}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Search;
