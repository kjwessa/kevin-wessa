import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";

const HumaneVF = localFont({
  variable: "--font-humane-vf",
  display: "swap",
  src: [
    {
      path: "../fonts/Humane-VF.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});

const GeneralSansVariable = localFont({
  variable: "--font-general-sans-variable",
  display: "swap",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Kevin Wessa - Designer, Developer, Photographer",
  description:
    "Kevin J. Wessa is a designer, developer, and photographer based in Cleveland, OH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${HumaneVF.variable} ${GeneralSansVariable.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
