// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user's language
  .use(Backend) // Load translation files
  .use(initReactI18next) // Pass i18n instance to React
  .init({
    fallbackLng: "ru", // Default language if user's language is not available
    debug: true, // Enable debugging to see what's going on in the console
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Avoid suspense loading state
    },
    // The backend will load translation JSON files from these locations
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to your translation files
    },
  });

export default i18n;
