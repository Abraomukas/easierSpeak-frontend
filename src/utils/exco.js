export function excoRoleFunctions(role) {
	switch (role) {
		case "President":
			return presidentTasks();
		case "Vice President of Education":
			return vpeTaks();
		case "Vice President of Membership":
			return vpmTasks();
		case "Vice President of Public Relations":
			return vpprTasks();
		case "Secretary":
			return secretaryTasks();
		case "Treasurer":
			return treasurerTasks();
		case "Sergeant at Arms":
			return saaTasks();
		case "Immediate Past President":
			return ippTasks();
		case "IT Support":
			return itTasks();
		case "Vice President of Mentoring":
			return vpmenTasks();
		default:
			return [];
	}
}

function presidentTasks() {
	return [{ label: "sidebar.exco.president.tasks", path: "#" }];
}

function vpeTaks() {
	return [
		{ label: "sidebar.exco.vpe.charts", path: "#" },
		{ label: "sidebar.exco.vpe.member_stats", path: "#" },
		{ label: "sidebar.exco.vpe.member_mgmt", path: "#" },
	];
}

function vpmTasks() {
	return [{ label: "sidebar.exco.vpm.tasks", path: "#" }];
}

function vpprTasks() {
	return [{ label: "sidebar.exco.vppr.tasks", path: "#" }];
}

function secretaryTasks() {
	return [{ label: "sidebar.exco.secretary.tasks", path: "#" }];
}

function treasurerTasks() {
	return [{ label: "sidebar.exco.treasurer.tasks", path: "#" }];
}

function saaTasks() {
	return [{ label: "sidebar.exco.saa.tasks", path: "#" }];
}

function ippTasks() {
	return [{ label: "sidebar.exco.ipp.tasks", path: "#" }];
}

function itTasks() {
	return [{ label: "sidebar.exco.it.tasks", path: "#" }];
}

function vpmenTasks() {
	return [{ label: "sidebar.exco.vpmen.tasks", path: "#" }];
}
