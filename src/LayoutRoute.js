import React from "react";
import { Route } from "react-router-dom";

/*
 * Components
 */
import Navbar from "./components/Navbar";

const meetingsDropdown = [
	{ label: "page_meetings.create_meeting", path: "#" },
	{ label: "page_meetings.last_meeting", path: "#" },
	{ label: "page_meetings.next_meeting", path: "#" },
	{ label: "page_meetings.calendar", path: "#" },
	{ label: "page_meetings.all_online_meetings", path: "#" },
];

const thisClubDropdown = [
	{ label: "page_this_club.home", path: "#" },
	{ label: "page_this_club.directory", path: "#" },
	{ label: "page_this_club.officers_exco", path: "#" },
	{ label: "page_this_club.members", path: "#" },
	// ? { label: "Charts", path: "#" },
	{ label: "page_this_club.speeches_archive", path: "#" },
	{ label: "page_this_club.meetings_archive", path: "#" },
];

const goToDropdown = [
	{ label: "page_go_to.ti_info", path: "#" },
	{ label: "page_go_to.district_stats", path: "#" },
	{ label: "page_go_to.map", path: "#" },
	// ? { label: "Neighbouring clubs", path: "#" },
	{ label: "page_go_to.club_search", path: "#" },
	{ label: "page_go_to.member_search", path: "#" },
];

const helpDropdown = [
	{ label: "page_help.faqs", path: "#" },
	{ label: "page_help.discussion_forum", path: "#" },
	{ label: "page_help.knowledge_map", path: "#" },
	{ label: "page_help.site_stats", path: "#" },
	{ label: "page_help.training", path: "#" },
	// ? { label: "Site groups", path: "#" },
];

const headerSites = [
	{ label: "pages.meetings", dropdown: { meetingsDropdown } },
	{ label: "pages.this_club", dropdown: { thisClubDropdown } },
	{ label: "pages.go_to", dropdown: { goToDropdown } },
	{ label: "pages.help", dropdown: { helpDropdown } },
];

function LayoutRoute(props) {
	return (
		<div>
			<Navbar clubName='Skylarks Toastmasters Club' headerSites={headerSites} />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
		</div>
	);
}

export default LayoutRoute;
