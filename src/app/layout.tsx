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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Malaguti | Amministrazione e Architettura Milano",
  description: "Studio di amministrazione condominiale e consulenza tecnica a Milano. Fondato nel 1986, gestito dall'Arch. Michele Malaguti.",
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
          <ClientLayout>
            {children}
            <CookieBanner />
            <AccessibilityWidget />
            <ScrollToTop />
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}