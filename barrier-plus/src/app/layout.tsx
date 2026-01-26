import type { Metadata } from "next";
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const geistMono = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Барʼєр Плюс | Барьер Плюс",
    template: "%s | Барʼєр Плюс",
  },
  description: "Фортифікації оборонного призачення з військовим характером. Габіони, Єгоза, МПП, металеві конструкії.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body aria-labelledby="page-title" className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
          <main id="page-title">
            {children}
          </main>
          <ScrollToTopButton />
        <Footer/>
         {/* Google Ads tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17720798010"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17720798010');
          `}
        </Script>
      </body>
    </html>
  );
}
