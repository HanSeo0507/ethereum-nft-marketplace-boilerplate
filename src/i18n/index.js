// import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ko from "./locales/ko";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en,
			ko,
		},
		lng: "en", // if you're using a language detector, do not define the lng option
		fallbackLng: "en",
		ns: ["page"],
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
