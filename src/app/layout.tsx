import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Your Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}