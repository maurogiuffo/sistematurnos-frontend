import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { AuthContext } from "../../context/authContext";

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
	
	const {isLogged} = useContext(AuthContext);
	
	return (
		<Nav>
			<Link href="/index"> Home </Link>

			{isLogged === "true" ? (
				<>
					<Link href="/schedule"> Agenda </Link>
					<Link href="/profile"> Mi Perfil </Link>
				</>
			) : null}
		</Nav>
	);
};

export default Navigation;
