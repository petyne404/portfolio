import type { Metadata } from "next";
import "./globals.css";
// style.scss
import "nes.css/css/nes.css"

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-pressStart"
      >
        {children}
      </body>
    </html>
  );
}
