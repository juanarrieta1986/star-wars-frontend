import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							{store.favorites.map((item, index) => {
								return (
									<a className="dropdown-item" href="#" key={index}>
										{item.name}
									</a>
									/*<Link to={"/single/" + props.favStatus}>
                                        <a href="#" className="btn btn-primary">
                                            Details...
						                </a>
                                    </Link>*/
								);
							})}
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
