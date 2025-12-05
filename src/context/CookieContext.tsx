"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type CookieContextType = {
  consent: boolean | null;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie_consent");
    if (savedConsent === "true") setConsent(true);
    if (savedConsent === "false") setConsent(false);
  }, []);

  const acceptCookies = () => {
    setConsent(true);
    localStorage.setItem("cookie_consent", "true");
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