import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from './locales/en.json';
import uaLocale from './locales/ua.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: enLocale,
  },
  ua: {
    translation: uaLocale,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
