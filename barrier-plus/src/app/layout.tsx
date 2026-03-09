import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// const geistSans = Roboto({
//   variable: "--font-roboto-serif",
//   subsets: ["latin"],
// });

// const geistMono = Roboto_Serif({
//   variable: "--font-roboto-serif",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: 'Барʼєр Плюс — Габіони, Єгоза, МПП, Антидронова сітка, Маскувальна сітка, Метал, Лист гофрований',
    template: '%s | Барʼєр Плюс',
  },
  description: "Виробництво та продаж габіонів, спіральних барʼєрів безпеки Єгоза, металевих сіток, МПП, маскувальних сіток, лист гофрований, тросів для фортифікацій та захисту. Доставка по Україні.",
  keywords: [
    "бар\'єр плюс", "барьер плюс", "габіони", "єгоза", "МПП", "фортифікації", 
    "захисні конструкції", "металеві бар'єри", "захист території", "оборонна продукція",
    "РЕБ", "маскувальна сітка", "антидронова сітка", "канат", "перешкода", "купити габіони", 
    "лист гофрований", "метал", "зуби дракона", "колючий дріт"
  ],
  authors: [{ name: "Барʼєр Плюс" }],
  openGraph: {
    title: "Барʼєр Плюс | Барьер Плюс",
    description: "Габіони, Єгоза, МПП, металеві сітки та троси для захисту та укріплення. Якісні матеріали для оборони та безпеки.",
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
    description: "Габіони, Єгоза, МПП та фортифікаційні матеріали",
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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','AW-17720798010');`} 
        </Script>
      </head>
      <body aria-labelledby="page-title" className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-17720798010"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
    }
  })
}} />
      </body>
    </html>
  );
}
