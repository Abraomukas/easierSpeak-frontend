import { createStore } from "redux";
import { combineReducers } from "redux";

/*
 * Reducers
 */
import loginReducer from "./reducers/login";
import languageReducer from "./reducers/language";

const allReducers = combineReducers({
	isLogged: loginReducer,
	language: languageReducer,
});

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
