import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const locales = {
	en: 'English',
	vi: 'Tiếng Việt',
};

const resources = {
	en: {
		// namespace
		translation: {
			'Hello World': 'Hello World',
		},
	},
	vi: {
		translation: {
			'Hello World': 'Xin chào !',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',

	interpolation: {
		escapeValue: false, // React already safes from xss
	},
});

export default i18n;
