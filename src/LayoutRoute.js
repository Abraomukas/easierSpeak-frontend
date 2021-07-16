import React from "react";
import { Route } from "react-router-dom";

/*
 * Components
 */
import Navbar from "./components/Navbar";

let headerSites = [
	{ label: "Meetings", path: "/" },
	{ label: "Clubs", path: "/" },
	{ label: "Go to", path: "/" },
	{ label: "FAQs", path: "/" },
];

const services = [
	{ label: "Our doggos", path: "/our-doggos" },
	{ label: "Our humans", path: "/our-humans" },
];

function LayoutRoute(props) {
	return (
		<div>
			<Navbar headerSites={headerSites} dropdown={services} />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
		</div>
	);
}

export default LayoutRoute;
