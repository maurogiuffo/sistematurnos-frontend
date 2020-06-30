import React from "react";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../context/authContext";

const TurnDetails = () => {
	const { isLogged } = useContext(AuthContext);
	const { id, turnDate } = turn;

	return (
		<table>
			<thead>
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
							<Button variant="contained" type="submit"></Button>
						</td>
					) : null}
				</tr>
			</tbody>
		</table>
	);
};

export default TurnDetails;
