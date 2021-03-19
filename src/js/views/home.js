import React, { useContext } from "react";
import "../../styles/home.scss";
import Card from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//const store = getStore();
	//console.log(store.planets);
	/*let planets = [
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 },
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 },
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 },
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 },
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 },
		{ name: "mercurio", surface: 1000 },
		{ name: "venus", surface: 3000 },
		{ name: "tierra", surface: 5000 }
	];*/

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<Card key={index} name={item.name} surface={item.surface} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
