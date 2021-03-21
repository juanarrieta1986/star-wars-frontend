import React from "react";
import PropTypes from "prop-types";

const CardPlanets = props => {
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
					<a href="#" className="btn btn-primary">
						Details...
					</a>
				</div>
			</div>
		</div>
	);
};
CardPlanets.propTypes = {
	name: PropTypes.string,
	surface: PropTypes.number
};
export default CardPlanets;
