import { titleFont,  paragraphFont} from "@/components/ui/fonts";

import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";

import {LanguageProvider} from "@/context/LangContext";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="fr" >
      <body className={`${titleFont.variable} ${paragraphFont.variable}`}>
      <LanguageProvider>
        <NavBar />
        {children}
        <Footer/>
      </LanguageProvider>
      </body>
    </html>
  );
}
