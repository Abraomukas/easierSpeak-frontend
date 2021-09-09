export function excoRoleFunctions(role) {
	switch (role) {
		case "President":
			return role.toLowerCase();
		case "Vice President of Education":
			return vpeTaks();
		case "Vice President of Membership":
			return "vpm";
		case "Vice President of Public Relations":
			return "vppr";
		case "Secretary":
			return role.toLowerCase();
		case "Treasurer":
			return role.toLowerCase();
		case "Sergeant at Arms":
			return "saa";
		case "Immediate Past President":
			return "ipp";
		case "IT Support":
			return "it";
		case "Vice President of Mentoring":
			return "vpmen";
		default:
			return "Member";
	}
}

function vpeTaks() {
	return [
		{ label: "sidebar.exco.vpe.tasks", path: "#" },
		{ label: "sidebar.exco.vpe.member_stats", path: "#" },
		{ label: "sidebar.exco.vpe.member_mgmt", path: "#" },
	];
}
