import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(HttpApi)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // lng: document.querySelector("html").getAttribute("lang"),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next",
    //     },
    //   },
    //   fr: {
    //     translation: {
    //       "Welcome to React": "Bienvenue a React et react-i18next",
    //     },
    //   },
    // },
    detection: {
      order: [
        "querystring",
        "htmlTag",
        "navigator",
        "cookie",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      // keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
