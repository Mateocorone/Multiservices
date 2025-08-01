"use client";

import { createContext, useState, useContext } from 'react';

// Importa tus archivos de idioma
import es from '@/locales/es.json';
import en from '@/locales/en.json';
import it from '@/locales/it.json';

const translations = {
  es,
  en,
  it,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es'); // Idioma por defecto

  const value = {
    lang,
    setLang,
    t: (path) => {
      // Función para obtener la traducción.
      const keys = path.split('.');
      let result = translations[lang];
      for (const key of keys) {
        if (result && typeof result === 'object') {
          result = result[key];
        } else {
          return path;
        }
      }
      return typeof result === 'string' ? result : path;
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}