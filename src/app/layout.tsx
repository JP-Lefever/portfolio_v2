import { titleFont, paragraphFont, paragraphFont2} from "@/ui/fonts";

import "./globals.css";
import React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paragraphFont.variable} ${paragraphFont2.variable} ${titleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
