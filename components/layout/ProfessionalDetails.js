import React, { useContext, useState, useEffect } from "react";
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

const ProfessionalDetails = ({ professional }) => {
	const { id, firstName, lastName, email, professionalTurns } = professional;

	useEffect(() => {}, []);

	return (
		<Content>
			<Description>
				<Link href="/professionals/[id]" as={`/professionals/${id}`}>
					<Name>
						{firstName} {lastName}
					</Name>
				</Link>
				<div class="rg-container">
					<table class="rg-table zebra" summary="Hed">
						<caption className="rg-header">
							<span className="rg-hed">Turnos</span>
							
						</caption>
						<thead>
							<tr>
							
							</tr>
						</thead>
						<tbody>
						<tr class="">
						
						</tr>
							{professionalTurns
								? professionalTurns.map((turn) => (
										<TurnDetails
											key={turn.id}
											turn={turn}
										/>
								  ))
								: null}
						</tbody>
								</table>
									<div class="rg-source">
						<span class="pre-colon">SOURCE</span>:{" "}
						<span class="post-colon">Sources</span>
					</div>
				
				</div>
			</Description>
		</Content>
	);
};

export default ProfessionalDetails;
