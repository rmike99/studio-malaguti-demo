"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useCookie } from "@/context/CookieContext";

export default function AnalyticsManager() {
  const { consent } = useCookie();

  if (consent !== true) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-FAKE-ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FAKE-ID', {
            page_path: window.location.pathname,
          });
          console.log("📊 Google Analytics caricato con successo!");
        `}
      </Script>
    </>
  );
}