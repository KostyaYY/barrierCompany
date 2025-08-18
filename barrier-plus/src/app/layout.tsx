import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Geist, Geist_Mono, Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barrier Plus",
  description: "Фортифікації оборонного призачення з військовим характером",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
          {children}
          <ScrollToTopButton />
        <Footer/>
      </body>
    </html>
  );
}
