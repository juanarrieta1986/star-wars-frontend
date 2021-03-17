import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.surface}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	surface: PropTypes.number
};
export default Card;
