import React from "react";
import PropTypes from "prop-types";

const CardCharacters = props => {
	return (
		<div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.gender}</p>
					<a href="#" className="btn btn-primary">
						Details...
					</a>
					<i className="far fa-heart" />
					<i className="fas fa-heart" />
				</div>
			</div>
		</div>
	);
};
CardCharacters.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string
};
export default CardCharacters;
