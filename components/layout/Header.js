import React, { createContext, useState, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Search from "../ui/Search";
import Navigation from "./Navigation";
import Button from "../ui/Button";
import  Router  from "next/router";

const HeaderContainer = styled.header`
	/* Aca estamos usando un color que establecimos de manera global en el Layout */
	border-bottom: 2px solid var(--grey3);
	/* padding asignado solo arriba y abajo */
	padding: 1rem 0;
`;

const DivMainContainer = styled.div`
	max-width: 1200px;
	width: 95%;
	/* queda centrado */
	margin: 0 auto;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

const Logo = styled.p`
	color: var(--orange);
	font-size: 4rem;
	line-height: 0;
	font-weight: 700;
	font-family: "Roboto Slab", serif;
	margin-right: 2rem;
`;

// Este Header se pegará en el Layout
const Header = (props) => {
	
	const [state, setState] = useState(props);

	useEffect(() => {
		setState({
			name: sessionStorage.getItem("firstName"),
			isLogged: sessionStorage.getItem("isLogged")
		})
	}, []);
	
	const logout = (e) => {	
		sessionStorage.clear();
		setState({
			name: '',
			isLogged : false,
		});
	}

	return (
		<HeaderContainer>
			<DivMainContainer>
				<div
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					<Link href="/index">
						<Logo> ST </Logo>
					</Link>

					<Search />

					<Navigation {...state} />
				</div>

				<div
					css={css`
						display: flex;
						align-items: center;
					`}
				>

					{state.isLogged =='true' ? (
						<>
							<p
								css={css`
									margin-right: 2rem;
								`}
							>
								Hola {state.name}
							</p>
						
							<Button bgColor="true" onClick={logout} >Logout</Button>
						
						</>
					) : (
						<>
							<Link href="/login">
								<Button bgColor="true">Login</Button>
							</Link>
							<Link href="/register">
								<Button>Register</Button>
							</Link>
						</>
					)}
				</div>
			</DivMainContainer>
		</HeaderContainer>
	);
};

export default Header;
