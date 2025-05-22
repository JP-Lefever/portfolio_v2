import { titleFont, paragraphFont, paragraphFont2} from "@/components/ui/fonts";

import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${paragraphFont2.variable} ${titleFont.variable}`}>
      <body className={`${paragraphFont.className}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
