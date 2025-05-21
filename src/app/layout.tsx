import { titleFont, paragraphFont, paragraphFont2} from "@/components/ui/fonts";

import "./globals.css";
import React from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import {PageTransition} from "@/components/ui/animation/Animation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paragraphFont.className} ${paragraphFont2.variable} ${titleFont.variable}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
