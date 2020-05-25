import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Nav = styled.nav`
	padding-left: 2rem;

	a {
		font-size: 1.8rem;
		margin-left: 2rem;
		color: var(--grey2);
		font-family: "PT Sans", sans-serif;

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

const Navigation = () => {
	return (
		<Nav>
			<Link href="/"> Home </Link>
			<Link href="/schedule"> Agenda </Link>
			<Link href="/profile"> Mi Perfil </Link>
		</Nav>
	);
};

export default Navigation;
