import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharactersDetail = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
					alt="Card image cap"
					width="500"
					height="600"
				/>
				<div className="card-body">
					<h5 className="card-title">{store.characters[props.favStatus].name}</h5>
					<p className="card-text">
						Height: {store.characters[props.favStatus].height} | Mass:
						{store.characters[props.favStatus].mass} | Gender: {store.characters[props.favStatus].gender} |
						Hair color: {store.characters[props.favStatus].hair_color} | Skin color:
						{store.characters[props.favStatus].skin_color} | Eye color:
						{store.characters[props.favStatus].eye_color} | Birth year:
						{store.characters[props.favStatus].birth_year}
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
CharactersDetail.propTypes = {
	favStatus: PropTypes.string
};
export default CharactersDetail;
