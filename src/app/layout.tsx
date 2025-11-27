import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import CookieBanner from "@/components/CookieBanner";

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
        <ClientLayout>
          {children}
          <CookieBanner />
        </ClientLayout>
      </body>
    </html>
  );
}