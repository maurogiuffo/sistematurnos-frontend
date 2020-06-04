import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Search from "../ui/Search";
import Navigation from "./Navigation";
import Button from "../ui/Button";

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
	const user = true;

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
					{user ? (
						<>
							<p
								css={css`
									margin-right: 2rem;
								`}
							>
								Hola: Eze
							</p>

							<Button bgColor="true"> Cerrar Sesión </Button>
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
