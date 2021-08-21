import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";

/*
 * Components
 */
import Navbar from "./components/Navbar";

const thisClubDropdown = [
	{ label: "page_this_club.home", path: "/my-club" },
	{ label: "page_this_club.directory", path: "/my-club/directory" },
	{ label: "page_this_club.officers_exco", path: "my-club/exco" },
	{ label: "page_this_club.members", path: "/my-club/members" },
	// ? { label: "Charts", path: "/" },
	{
		label: "page_this_club.speeches_archive",
		path: "/my-club/speeches/archive",
	},
];

const meetingsDropdown = [
	{ label: "page_meetings.create_meeting", path: "/my-club/create-meeting" },
	{ label: "page_meetings.last_meeting", path: "/my-club/last-meeting" },
	{ label: "page_meetings.next_meeting", path: "/my-club/next-meeting" },
	{ label: "page_meetings.calendar", path: "/my-club/meetings/calendar" },
	{ label: "page_meetings.archive", path: "my-club/meetings/archive" },
	{ label: "page_meetings.all_online_meetings", path: "/online-meetings" },
];

const goToDropdown = [
	{ label: "page_go_to.ti_info", path: "/" },
	{ label: "page_go_to.district_stats", path: "/" },
	{ label: "page_go_to.map", path: "/" },
	// ? { label: "Neighbouring clubs", path: "/" },
	{ label: "page_go_to.club_search", path: "/" },
	{ label: "page_go_to.member_search", path: "/" },
];

const helpDropdown = [
	{ label: "page_help.faqs", path: "/" },
	{ label: "page_help.discussion_forum", path: "/" },
	{ label: "page_help.knowledge_map", path: "/" },
	{ label: "page_help.site_stats", path: "/" },
	{ label: "page_help.training", path: "/" },
	{ label: "page_help.terms_and_conditions", path: "/terms-and-conditions" },
	{ label: "page_help.privacy_policy", path: "/privacy-policy" },
	// ? { label: "Site groups", path: "/" },
];

const headerSites = [
	{ label: "pages.go_to", dropdown: { goToDropdown } },
	{ label: "pages.help", dropdown: { helpDropdown } },
];

const afterLoginSites = [
	{ label: "pages.this_club", dropdown: { thisClubDropdown } },
	{ label: "pages.meetings", dropdown: { meetingsDropdown } },
];

function LayoutRoute(props) {
	return (
		<div>
			<Navbar
				clubName='Skylarks Toastmasters Club'
				headerSites={headerSites}
				afterLoginSites={afterLoginSites}
			/>
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
			<Footer />
		</div>
	);
}

export default LayoutRoute;
