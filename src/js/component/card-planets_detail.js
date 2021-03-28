import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetsDetail = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://starwars-visualguide.com/assets/img/planets/9.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{store.planets[props.favStatus].name}</h5>
					<p className="card-text">
						Rotation period: {store.planets[props.favStatus].rotation_period} | Orbital period:
						{store.planets[props.favStatus].orbital_period} | Diameter:
						{store.planets[props.favStatus].diameter} | Climate: {store.planets[props.favStatus].climate} |
						Gravity:
						{store.planets[props.favStatus].gravity} | Terrain:
						{store.planets[props.favStatus].terrain} | Surface water:
						{store.planets[props.favStatus].surface_water} | Population:
						{store.planets[props.favStatus].population}
					</p>

					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
PlanetsDetail.propTypes = {
	favStatus: PropTypes.string
};
export default PlanetsDetail;
