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
	const { id_user, firstName, lastName,  email } = professional;

	return (
		<Content>
			<Description>
				<Link href="/professionals/[id]" as={`/professionals/${id_user}`}>
					<Name>
						{firstName} {lastName}
					</Name>
				</Link>
				<div>
					<p>{email}</p>
					
				</div>
			</Description>
		</Content>
	);
};

export default ProfessionalDetails;
