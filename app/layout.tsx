import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Feel at home, away from home.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className='container py-10'>{children}</main>
      </body>
    </html>
  );
}
