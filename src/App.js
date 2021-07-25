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
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact={true} component={LandingPage} />
				<LayoutRoute path='/login' exact={true} component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
