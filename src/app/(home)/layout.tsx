import type { Metadata } from "next";

import NavbarResponsive from "../../components/base/navbar";
import FooterHome from "../../components/base/footer";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Your Admin Dashboard",
};


export default function HomeLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
        <header>
            <NavbarResponsive />
        </header>
        <main>{children}</main>
        <FooterHome />
        </>
    );
  }