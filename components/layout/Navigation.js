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

const Navigation = props => {
	// Segun el usuario que este conectado se le va a  mostrar distintas vista
	//const [isLogged, setIsLogged] = useState(props);
	//console.log(isLogged, props);
	
	const [state, setState] = useState(props);
	
	useEffect(() => {
		//setIsLogged(props);
		setState(props);
	  }, [props]);

	return (
		<Nav>
			<Link href="/index"> Home </Link>

			{}

			{ state.isLogged == 'true' ? (
				<>
					<Link href="/schedule"> Agenda </Link>
					<Link href="/profile"> Perfil </Link>
				</>
			) : null}
		</Nav>
	);
};

export default Navigation;
