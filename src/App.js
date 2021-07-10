import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

/*
 * Components
 */
import LayoutRoute from "./LayoutRoute";

/*
 * Pages
 */
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact={true} component={LandingPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
