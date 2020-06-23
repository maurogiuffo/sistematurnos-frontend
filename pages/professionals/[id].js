import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import ProfessionalDetails from "../../components/layout/ProfessionalDetails";
import Error404 from "../../components/layout/Error404";
import axios from "axios";

const Professional = () => {
    const [professional, setProfessional] = useState({});
    const [ error, setError ] = useState(false);
	const router = useRouter();
	//console.log(router);
	const {
		query: { id },
	} = router;

	console.log(id);
	useEffect(() => {
		if (id) {
            try {
                const profQuery = async () => {
                    const url = `http://localhost:8080/user/${id}`;
                    const getProfessional = await axios.get(url);
                    setProfessional(getProfessional.data);
                    console.log(getProfessional.data);
                    
                };
                profQuery();
            } catch (error) {
                // Hay que controlar el error cuando se ingresa un id inexistente desde la url
                console.log(error);
            }
			
		}
	}, [id]);

	return (
		<>
			<h1> Desde Ficha de Profesional </h1>
			<ProfessionalDetails professional={professional} />
			<h2> Aca se mostraria la agenda con disponibilidad de turnos </h2>
			<div className="professionals-list">
				<div className="container">
					<ul className="bg-white">
						<h1> Probando Listado </h1>
						{turns
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
		</>
	);
};

export default Professional;
