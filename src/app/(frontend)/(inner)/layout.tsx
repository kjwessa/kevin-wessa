import "./globals.css";
import { Grain } from "@/components/Grain";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Grain>{children}</Grain>
      </body>
    </html>
  );
}
