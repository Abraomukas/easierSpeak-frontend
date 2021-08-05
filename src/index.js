import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./i18n";

import App from "./App";
import store from "./store";

const spinnerSizing = { width: "3rem", height: "3rem" };
const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div class='spinner-border' style={spinnerSizing} role='status'>
			<span class='visually-hidden'>Loading...</span>
		</div>
	</div>
);

ReactDOM.render(
	<React.Suspense fallback={spinnerFallback}>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Suspense>,
	document.getElementById("root")
);
