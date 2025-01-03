import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  title: "Learning Auth",
  description: "Learning the nextauth library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
