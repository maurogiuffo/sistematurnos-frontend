import App from "next/app";
import UsersProvider from "../context/usersContext";
import CategoriesProvider from "../context/categoriesContext";
//import { AuthContext } from "../context/authContext";

const MyApp = (props) => {
	const { Component, pageProps } = props;

	

	return (
		<CategoriesProvider>
			<UsersProvider>
					<Component {...pageProps} />	
			</UsersProvider>
		</CategoriesProvider>
	);
};

export default MyApp;
