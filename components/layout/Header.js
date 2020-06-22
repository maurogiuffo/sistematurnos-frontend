import React, { createContext, useState, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Search from "../ui/Search";
import Navigation from "./Navigation";
import Button from "../ui/Button";
import { Router } from "next/router";

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
const Header = () => {
	// Este usuario va a venir de la Api
	const [user, setUser] = useState(undefined);
	const [isLogged, setIsLogged] = useState(undefined);

	const logout = (e) => {	
		setIsLogged(false);
	}

	useEffect(() => {
	
		setIsLogged(sessionStorage.getItem("isLogged") || false);
		setUser(sessionStorage.getItem("user") || {});
		sessionStorage.setItem("isLogged", isLogged);
	}, []);
	

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

					<Navigation />
				</div>

				<div
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					{isLogged ? (
						<>
							<p
								css={css`
									margin-right: 2rem;
								`}
							>
								Hola:{user.firstName}
							</p>

							<Button bgColor="true"  onClick={logout} >Logout</Button>
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
