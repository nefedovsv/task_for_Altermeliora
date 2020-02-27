import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
	resources: {
		ENG: {
			translations: {
				logIn: 'Log in',
				signUp: 'Sign Up',
				unRegistered: 'Are you here for the first time?',
				registered: 'Already registration?',
			}
		},
		RUS: {
			translations: {
				logIn: 'Авторизация',
				signUp: 'Регистрация',
				unRegistered: 'Вы здесь в первый раз?',
				registered: 'Уже регистрировались?',
			}
		},
	},
	fallbackLng: "ENG",

	ns: ["translations"],
	defaultNS: "translations",

	interpolation: {
		escapeValue: false, // not needed for react!!
	},
});

export default i18n;
