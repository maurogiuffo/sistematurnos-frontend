import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ProfessionalDetails from "../components/layout/ProfessionalDetails";
import { useRouter } from "next/router";
import axios from 'axios';

const Search = () => {
	const router = useRouter();



	const {
		query: { q },
	} = router;

	const [ professionalsTurns, setData ] = useState([]);

	function getData()  {
		const url = 'http://localhost:8080/user/category?categoryName='+q;

		console.log(url);
		const res = axios.get(url);
		return res;
	}

	useEffect(() => {
			getData().then(res => {
				console.log(res);
				setData(res.data);
			});
	}, [q]);

	return (
		<div>
			<Layout>
				<div className="professionals-list">
					<div className="container">
						<ul className="bg-white">
							<h1> Probando Listado </h1>

							{professionalsTurns
								? 
							
								professionalsTurns.map( (professional) => (
									
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
