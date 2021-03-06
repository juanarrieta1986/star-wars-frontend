import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CharactersDetail from "../component/card-char_detail";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planets);
	return <CharactersDetail favStatus={params.theid} />;
};

Single.propTypes = {
	match: PropTypes.object
};
