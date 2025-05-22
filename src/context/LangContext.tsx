"use client"
import {createContext, ReactNode, useContext, useState} from "react";
import {LanguageProps} from "@/types/definition";
import frData from "@/assets/locales/fr.json"
import enData from "@/assets/locales/en.json"


type Language = "fr" | "en"

type LanguageContextProps = {
    language: Language;
    data: LanguageProps;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children : ReactNode }) => {

    const [language, setLanguage] = useState<Language>("fr");
    const data = language === "fr" ? frData : enData;

    return (
        <LanguageContext.Provider value={{language, data, setLanguage}}>
            {children}
            </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("Traduction not found");
    return context;
}