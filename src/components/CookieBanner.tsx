"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato (simulato con localStorage)
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500); // Appare dopo 1.5 secondi
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[80]"
        >
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-700 relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 p-2 rounded-lg text-white shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Informativa Cookies</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito. 
                  Per maggiori dettagli consulta la nostra <Link href="/privacy-policy" className="underline hover:text-emerald-400">Privacy Policy</Link>.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors flex-1"
                  >
                    Accetta Tutto
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="border border-slate-600 text-slate-300 text-xs font-bold px-4 py-2 rounded-lg hover:border-white hover:text-white transition-colors"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}