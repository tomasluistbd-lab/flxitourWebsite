import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Deteta o idioma do navegador do cliente automaticamente
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          "reservar": "RESERVAR",
          "servicos": "SERVIÇOS",
          "frota": "FROTA",
          "contacto": "CONTACTO",
          "hero_title": "Transportes de luxo",
          "hero_subtitle": "em Portugal"
        }
      },
      en: {
        translation: {
          "reservar": "BOOK NOW",
          "servicos": "SERVICES",
          "frota": "FLEET",
          "contacto": "CONTACT",
          "hero_title": "Luxury transfers",
          "hero_subtitle": "in Portugal"
        }
      },
      es: {
        translation: {
          "reservar": "RESERVAR",
          "servicos": "SERVICIOS",
          "frota": "FLOTA",
          "contacto": "CONTACTO",
          "hero_title": "Transporte de lujo",
          "hero_subtitle": "en Portugal"
        }
      }
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;