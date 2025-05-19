import { titleFont, paragraphFont, paragraphFont2} from "@/components/ui/fonts";

import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Header from "@/components/layout/header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paragraphFont.className} ${paragraphFont2.variable} ${titleFont.variable}`}>
        <NavBar/>
        <Header/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
