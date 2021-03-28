import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlanetsDetail from "../component/card-planets_detail";

export const Single2 = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planets);
	return <PlanetsDetail favStatus={params.theid} />;
};

Single2.propTypes = {
	match: PropTypes.object
};
