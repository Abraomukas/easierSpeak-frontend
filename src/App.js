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
import Login from "./pages/Login";
import ForgottenPassword from "./pages/ForgottenPassword";
import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact={true} component={Main} />
				<LayoutRoute path='/login' exact={true} component={Login} />
				<LayoutRoute
					path='/forgotten-password'
					exact={true}
					component={ForgottenPassword}
				/>
				<LayoutRoute path='/register' exact={true} component={Register} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
