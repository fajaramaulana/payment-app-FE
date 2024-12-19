import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Your Admin Dashboard",
};

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header></header>
      <main className="antialiased font-geist bg-background-login bg-cover bg-center">
        {children}
      </main>
      <footer></footer>
    </>
  );
}
