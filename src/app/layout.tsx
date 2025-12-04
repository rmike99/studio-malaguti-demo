import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import CookieBanner from "@/components/CookieBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ScrollToTop from "@/components/ScrollToTop";
import NextTopLoader from 'nextjs-toploader';
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollProgress from "@/components/ScrollProgress";
import { CookieProvider } from "@/context/CookieContext";
import AnalyticsManager from "@/components/AnalyticsManager";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://studiomalaguti-preview.netlify.app'),
  title: "Studio Malaguti | Amministrazione e Architettura Milano",
  description: "Studio di amministrazione condominiale e consulenza tecnica a Milano. Gestione trasparente, Area Riservata e Sicurezza Cantieri.",  

  openGraph: {
    title: "Studio Malaguti | Eccellenza nella gestione immobiliare",
    description: "Amministrazione condominiale e studio tecnico integrato a Milano dal 1986.",
    url: "/",
    siteName: "Studio Malaguti",
    images: [
      {
        url: "/logoMalaguti.png",
        width: 1200,
        height: 630,
        alt: "Studio Malaguti Homepage",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Malaguti | Milano",
    description: "Gestione immobiliare e consulenza tecnica.",
    images: ["/logoMalaguti.png"],
  },
  icons: {
    icon: "/logoMalaguti.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <NextTopLoader 
          color="#059669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #059669,0 0 5px #059669"
        />
        <ScrollProgress />
        
        <LanguageProvider>
          <CookieProvider>
            
            <ClientLayout>
              {children}
              
              <CookieBanner />
              <AccessibilityWidget />
              <ScrollToTop />
              
              <AnalyticsManager />
              <Toaster position="top-center" richColors closeButton />
              
            </ClientLayout>

          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}