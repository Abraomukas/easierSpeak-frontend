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
import Main from "./pages/Main";
import MyClub from "./pages/MyClub";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact component={Main} />
				<LayoutRoute path='/my-club' exact component={MyClub} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
