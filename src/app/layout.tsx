import { titleFont,  paragraphFont} from "@/components/ui/fonts";

import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import {LanguageProvider} from "@/context/LangContext";
import {Metadata} from "next";

export const metadata : Metadata={
    title: "Jean-Philippe Lefever | Developpeur Web",
    description: "Portfolio de Jean-Philippe Lefever, développeur full stack spécialisé React, Next.js, Node.js.",
    icons : {
        icon:"/images/header.png"
    }
};


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
