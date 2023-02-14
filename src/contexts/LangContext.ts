import { createContext, useState, useContext, ReactNode } from "react";
import { languageContextType } from "../@types/languageContext";

const languageContextDefaultValues: languageContextType = {
  locale: new String(),
  setLocale: () => {},
};

const LanguageContext = createContext<languageContextType>(
  languageContextDefaultValues
);

export function useLanguage() {
  return useContext(LanguageContext);
}

type Props = {
  children: ReactNode;
};

export function LanguageProvider({ children }: Props) {
  const value = {};
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
