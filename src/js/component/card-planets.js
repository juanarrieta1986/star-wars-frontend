import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = props => {
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
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.surface}</p>
					<Link to={"/single2/" + props.favStatus}>
						<a href="#" className="btn btn-primary">
							Details...
						</a>
					</Link>
					<i
						className="far fa-heart"
						style={store.favPlanet[props.favStatus] === true ? { display: "none" } : { display: "inline" }}
						onClick={() => actions.updateFavPlanet(props.favStatus, props.name)}
					/>
					<i
						className="fas fa-heart"
						style={store.favPlanet[props.favStatus] === false ? { display: "none" } : { display: "inline" }}
						onClick={() => actions.updateFavPlanet(props.favStatus, props.name)}
					/>
				</div>
			</div>
		</div>
	);
};
CardPlanets.propTypes = {
	key: PropTypes.string,
	name: PropTypes.string,
	surface: PropTypes.number,
	favStatus: PropTypes.number
};
export default CardPlanets;
