import React from "react";
import { Route } from "react-router-dom";

/*
 * Components
 */
import Navbar from "./components/Navbar";

function LayoutRoute(props) {
	return (
		<div>
			<Navbar />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
		</div>
	);
}

export default LayoutRoute;
