import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

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

const ProfessionalDetails = ({ professional }) => {

	const { id, firstName, lastName, email ,professional_turns} = professional;

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

					{professional_turns
								? 
							
								professional_turns.map( (turn) => (
									
									<TurnDetails
											key={turn.id}
											turn={turn}
										/>
									 ))
								: null}
					</p>
				</div>
			</Description>
		</Content>
	);
};


const TurnDetails = ({ turn }) => {

	const { id, turnDate} = turn;

	return (
		<Content>
			<Description>
			
						{turnDate} 

			</Description>
		</Content>
	);
};


export default ProfessionalDetails;
