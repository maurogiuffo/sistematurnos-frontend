import React , { useContext , useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { AuthContext } from "../../context/authContext";
import TurnDetails from "../layout/TurnDetails";

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

const ProfessionalDetails = ({ professional}) => {

    const {isLogged} = useContext(AuthContext);	
	const { id, firstName, lastName, email ,professional_turns} = professional;

	useEffect(() => {
		
	}, [])


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
								professional_turns.map( (turn) => (
									<TurnDetails 
											key={turn.id}
											turn={turn}
											isLogged={isLogged}
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

export default ProfessionalDetails;
