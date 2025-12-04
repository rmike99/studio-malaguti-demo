"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type CookieContextType = {
  consent: boolean | null; // null = non ha ancora scelto, true = accettato, false = rifiutato
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void; // Utile per testare
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Controlla se c'è già una scelta salvata
    const savedConsent = localStorage.getItem("cookie_consent");
    if (savedConsent === "true") setConsent(true);
    if (savedConsent === "false") setConsent(false);
  }, []);

  const acceptCookies = () => {
    setConsent(true);
    localStorage.setItem("cookie_consent", "true");
    // Qui in futuro potresti attivare Google Analytics manualmente se serve
    console.log("✅ Cookies Accettati: Script di tracciamento attivati.");
  };

  const rejectCookies = () => {
    setConsent(false);
    localStorage.setItem("cookie_consent", "false");
    console.log("❌ Cookies Rifiutati: Nessuno script verrà caricato.");
  };

  const resetConsent = () => {
    setConsent(null);
    localStorage.removeItem("cookie_consent");
  };

  return (
    <CookieContext.Provider value={{ consent, acceptCookies, rejectCookies, resetConsent }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
}