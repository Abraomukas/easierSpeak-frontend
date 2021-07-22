import React from "react";
import { Route } from "react-router-dom";

/*
 * Components
 */
import Navbar from "./components/Navbar";

const meetingsDropdown = [
	{ label: "Create a meeting", path: "#" },
	{ label: "Last meeting", path: "#" },
	{ label: "Next meeting", path: "#" },
	{ label: "Calendar", path: "#" },
	{ label: "Meeting archive", path: "#" },
	{ label: "All online meetings", path: "#" },
];

const thisClubDropdown = [
	{ label: "Home", path: "#" },
	{ label: "Diretory", path: "#" },
	{ label: "Officers / ExCo", path: "#" },
	{ label: "Members", path: "#" },
	// ? { label: "Charts", path: "#" },
	{ label: "Speeches archive", path: "#" },
	{ label: "Meetings archive", path: "#" },
];

const goToDropdown = [
	{ label: "TI information", path: "#" },
	{ label: "District stats", path: "#" },
	{ label: "Map", path: "#" },
	// ? { label: "Neighbouring clubs", path: "#" },
	{ label: "Club search", path: "#" },
	{ label: "Member search", path: "#" },
];

const helpDropdown = [
	{ label: "FAQs", path: "#" },
	{ label: "Discussion forum", path: "#" },
	{ label: "Knowledge map", path: "#" },
	{ label: "Site stats", path: "#" },
	// ? { label: "Site groups", path: "#" },
];

const headerSites = [
	{ label: "Meetings", dropdown: { meetingsDropdown } },
	{ label: "This Club", dropdown: { thisClubDropdown } },
	{ label: "Go to", dropdown: { goToDropdown } },
	{ label: "FAQs", dropdown: { helpDropdown } },
];

function LayoutRoute(props) {
	return (
		<div>
			<Navbar headerSites={headerSites} />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
		</div>
	);
}

export default LayoutRoute;
