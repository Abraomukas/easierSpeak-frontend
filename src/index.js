import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./i18n";

import App from "./App";
import store from "./store";

ReactDOM.render(
	<React.Suspense fallback='loading'>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Suspense>,
	document.getElementById("root")
);
