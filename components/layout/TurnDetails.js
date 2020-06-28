import React from "react";
import Button from "@material-ui/core/Button";

const TurnDetails = () => {

	const { id, turnDate } = turn;

	return (
		<div>
			<td>{turnDate.substr(0, 10)}</td>
			<td>{turnDate.substr(11, 5)}</td>
			{isLogged === "true" ? (
				<td>
					<Button variant="contained" type="submit">
						Solicitar{" "}
					</Button>
				</td>
			) : null}
		</div>
	);
};

export default TurnDetails;
