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
  description: "Фортифікації захисного призначення зі стальним характером. Габіони, Єгоза, МПП, металеві конструкції, захисні бар'єри. Якісна продукція для безпеки та оборони.",
  keywords: [
    "бар'єр плюс", "барьер плюс", "габіони", "єгоза", "МПП", "фортифікації", 
    "захисні конструкції", "металеві бар'єри", "захист території", "оборонна продукція"
  ],
  authors: [{ name: "Барʼєр Плюс" }],
  openGraph: {
    title: "Барʼєр Плюс | Барьер Плюс",
    description: "Фортифікації захисного призначення зі стальним характером. Габіони, Єгоза, МПП, металеві конструкції.",
    url: "https://www.barrierplus.store",
    siteName: "Барʼєр Плюс",
    images: [
      {
        url: "https://www.barrierplus.store/og-image.jpg", // создайте изображение 1200×630
        width: 1200,
        height: 630,
        alt: "Барʼєр Плюс - захисні металеві конструкції",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Барʼєр Плюс | Барьер Плюс",
    description: "Фортифікації захисного призначення зі стальним характером.",
    images: ["https://www.barrierplus.store/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.barrierplus.store",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // добавьте файлы
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body aria-labelledby="page-title" className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
          <main id="page-title">
            {children}
          </main>
          <ScrollToTopButton />
        <Footer/>
         {/* Google Ads tag (gtag.js) */}
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Барʼєр Плюс",
    "url": "https://www.barrierplus.store",
    "logo": "https://www.barrierplus.store/logo.png",
    "description": "Виробник фортифікацій захисного призначення: габіони, Єгоза, МПП та металеві конструкції.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    },
    "sameAs": [] // добавьте соцсети
  })
}} />
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
