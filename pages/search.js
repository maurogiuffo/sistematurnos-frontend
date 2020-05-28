import React from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();
    // extraemos lo que se manda por query
    const { query: {q}} = router;
	console.log(q);

	return (
		<div>
			<Layout>
				<h2> Buscar </h2>
			</Layout>
		</div>
	);
};

export default Search;
