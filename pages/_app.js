import App from "next/app";
import ProfessionalsProvider from "../context/professionalsContext";
import CategoriesProvider from "../context/CategoriesContext";

const MyApp = (props) => {
	const { Component, pageProps } = props;

	return (
		<CategoriesProvider>
			<ProfessionalsProvider>
				<Component {...pageProps} />
			</ProfessionalsProvider>
		</CategoriesProvider>
	);
};

export default MyApp;
