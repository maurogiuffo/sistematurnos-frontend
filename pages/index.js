import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

import ProfessionalDetails from "../components/layout/ProfessionalDetails";
import { UsersContext } from "../context/usersContext";

const Home = () => {
	const { professionals } = useContext(UsersContext);

	return (
		<Layout>
			{/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
			<div className="professionals-list">
				<div className="container">
					<ul className="bg-white">
						<h1> En construccion </h1>
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

			{/* despues pensar que queremos que se vea ni bien se entra a la web */}
		</Layout>
	);
};

export default Home;
