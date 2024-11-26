import type { Metadata } from "next";

import "./styles/globals.css";
import HeadBase from "./base-components/Head";
import FooterBase from "./base-components/footer";
import NavbarResponsive from "./base-components/navbar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Your Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <HeadBase />
        <NavbarResponsive />
        {children}
        <FooterBase />
      </body>
    </html>
  );
}