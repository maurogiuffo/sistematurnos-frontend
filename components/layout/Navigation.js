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
	// Segun el usuario que este conectado se le va a  mostrar distintas vistas
	const user = false;

	return (
		<Nav>
			<Link href="/"> Home </Link>

			{user ? (
				<>
					<Link href="/schedule"> Agenda </Link>
					<Link href="/profile"> Mi Perfil </Link>
				</>
			) : null}
		</Nav>
	);
};

export default Navigation;
