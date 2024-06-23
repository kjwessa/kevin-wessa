import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children} <Analytics />
      </body>
    </html>
  );
}
