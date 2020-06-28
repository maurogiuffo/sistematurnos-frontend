import App from "next/app";
import UsersProvider from "../context/usersContext";
import CategoriesProvider from "../context/categoriesContext";
import AuthProvider from "../context/authContext";

const MyApp = (props) => {
	const { Component, pageProps } = props;

	return (
		<AuthProvider>
			<CategoriesProvider>
				<UsersProvider>
					<Component {...pageProps} />
				</UsersProvider>
			</CategoriesProvider>
		</AuthProvider>
	);
};

export default MyApp;
