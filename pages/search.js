import React from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();
    // extraemos lo que se manda por query
    const { query: {q}} = router;
	console.log(q);

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
