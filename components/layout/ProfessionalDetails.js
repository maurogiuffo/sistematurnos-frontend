import React , { createContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const Content = styled.li`
	padding: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e1e1e1;
`;

const Description = styled.div`
	flex: 0 1 600px;
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 2rem;
`;

const Name = styled.a`
	font-size: 2rem;
	font-weight: bold;
	margin: 0;

	:hover {
		cursor: pointer;
	}
`;

const ProfessionalDetails = ({ professional,isLogged }) => {

	
	//const [isLogged, setIsLogged] = useState(undefined);
		
	const { id, firstName, lastName, email ,professional_turns} = professional;

	useEffect(() => {
		//setIsLogged(sessionStorage.getItem("isLogged"))	
	}, [isLogged])


	return (
		<Content>
			<Description>
				<Link href="/professionals/[id]" as={`/professionals/${id}`}>
					<Name>
						{firstName} {lastName}
					</Name>
				</Link>
				<div>
					<p>{email}</p>	
				</div>
				<div>
					<p>
						<table>
						<th>
							<td >Fecha</td>
							<td>Hora</td>
							<td>Asignado</td>
						</th>	
						<tr>
					{professional_turns
								? 
								professional_turns.map( (turn,isLogged) => (
									<TurnDetails
											key={turn.id}
											turn={turn}
										/>
									 ))
								: null}
					</tr>
					</table>

					</p>
				</div>
			</Description>
		</Content>
	);
};


const TurnDetails = ({ turn, isLogged}) => {

	const { id, turnDate} = turn;

	return (
			
			<div>
				<td>
					{turnDate.substr(0,10) }
				</td>		
				<td>
					{turnDate.substr(11,5)}
				</td>
				{isLogged === "true" ? (
					<td><Button variant="contained" type="submit">
						Solicitar	</Button>
				</td>
				) : null}
			</div>
	);
};


export default ProfessionalDetails;
