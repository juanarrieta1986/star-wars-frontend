import React, { useContext } from "react";
import "../../styles/home.scss";
import CardPlanets from "../component/card-planets";
import CardCharacters from "../component/card-chars";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<CardPlanets key={index} name={item.name} surface={item.surface} favStatus={index} />
						</div>
					);
				})}
			</div>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.characters.map((item, index) => {
					return (
						<div className="col" key={index}>
							<CardCharacters key={index} name={item.name} surface={item.gender} favStatus={index} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
