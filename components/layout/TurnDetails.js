import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/authContext";
import NestedGrid from "../ui/Grid";
import axios from "axios";

const TurnDetails = ({turn}) => {
	const { isLogged } = useContext(AuthContext);
	const { id, turnDate } = turn;


	const post = async (id) => {
		const url = 'http://localhost:8080/turn/addCustomerTurn/'

		var json=
			{
				userId:id,
				turnId:id
			}
		
		const res = await axios.post(url, json);
		return res;
	}



	const solicitar = (id) => {	
		
		alert("solicitar turno " +id );

		post(id).then((res) => {
			alert("respuesta turno " +id );
			console.log(res);
			//setData(res.data);
		});
	}

	useEffect(() => {	
	
	}, [isLogged]);


	return (
		<>
			<NestedGrid />

				{turnDate.substr(0, 10)} - {turnDate.substr(11, 5)}
				{isLogged === "true" ? (<Button variant="contained"  onClick= {()=>solicitar(id)}> Solicitar </Button>) : null}
			
			{/* <thead>
				<tr>
					<th>Fecha</th>
					<th>Hora</th>
					<th>Asignado</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{turnDate.substr(0, 10)}</td>
					<td>{turnDate.substr(11, 5)}</td>
					{isLogged === "true" ? (
						<td>

							<Button variant="contained" type="submit"> Solicitar </Button>
						</td>
					) : null}
				</tr>
			</tbody> */}
	</>
	);
};

export default TurnDetails;
