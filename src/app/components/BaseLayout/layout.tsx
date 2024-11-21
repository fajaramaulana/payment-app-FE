import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Payment App",
  description: "Welcome to the Payment App",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Section */}
        <Header/>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Section */}
        <Footer/>
      </body>
    </html>
  );
}
