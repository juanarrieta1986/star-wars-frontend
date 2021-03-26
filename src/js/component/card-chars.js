import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacters = props => {
	const { store, actions } = useContext(Context);
	console.log(props.favStatus);
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

					<Link to={"/single/" + props.favStatus}>
						<a href="#" className="btn btn-primary">
							Details...
						</a>
					</Link>

					<i
						className="far fa-heart"
						style={store.favChar[props.favStatus] === true ? { display: "none" } : { display: "inline" }}
						onClick={() => actions.updateFavChar(props.favStatus, props.name)}
					/>
					<i
						className="fas fa-heart"
						style={store.favChar[props.favStatus] === false ? { display: "none" } : { display: "inline" }}
						onClick={() => actions.updateFavChar(props.favStatus, props.name)}
					/>
				</div>
			</div>
		</div>
	);
};
CardCharacters.propTypes = {
	key: PropTypes.string,
	name: PropTypes.string,
	gender: PropTypes.string,
	favStatus: PropTypes.number
};
export default CardCharacters;
