const languageReducer = (state = "gb", action) => {
	switch (action.type) {
		case "ES":
			return "es";
		default:
			return "gb";
	}
};

export default languageReducer;
