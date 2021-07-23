import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//import App from "./App";
import "./i18n";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: {
					"Welcome to React": "Welcome!",
				},
			},
			es: {
				translation: {
					"Welcome to React": "¡Bienvenido!",
				},
			},
		},
		lng: document.querySelector("html").lng,
		fallbackLng: "en",
		detection: {
			order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
			caches: ["cookie"],
		},
	});

function App() {
	const { t } = useTranslation();

	return <h2>{t("Welcome to React")}</h2>;
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
