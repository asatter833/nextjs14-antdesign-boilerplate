import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";

import "./globals.css";

const fontSans = Outfit({
  // Google Font
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next 14 App with Ant Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
