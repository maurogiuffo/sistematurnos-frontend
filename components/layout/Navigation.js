import React, { useState, useEffect } from "react";
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

const Navigation = ({isLogged, setIsLogged}) => {
	// Segun el usuario que este conectado se le va a  mostrar distintas vista
	//const [isLogged, setIsLogged] = useState(props);
	//console.log(isLogged, props);
	


	useEffect(() => {
		setIsLogged(sessionStorage.getItem("isLogged"));
	}, [isLogged]);

	return (
		<Nav>
			<Link href="/index"> Home </Link>

			{isLogged === 'true' ? (
				<>
					<Link href="/schedule"> Agenda </Link>
					<Link href="/profile"> Mi Perfil </Link>
				</>
			) : null}
		</Nav>
	);
};

export default Navigation;
