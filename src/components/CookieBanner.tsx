"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCookie } from "@/context/CookieContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { consent, acceptCookies, rejectCookies } = useCookie();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (consent === null) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [consent]);

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
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 p-2 rounded-lg text-white shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{t('cookie_title')}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {t('cookie_text')}{" "}
                  <Link href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors">
                    {t('footer_privacy')}
                  </Link>.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={acceptCookies}
                    className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors flex-1"
                  >
                    {t('cookie_accept')}
                  </button>
                  <button 
                    onClick={rejectCookies}
                    className="border border-slate-600 text-slate-300 text-xs font-bold px-4 py-2 rounded-lg hover:border-white hover:text-white transition-colors"
                  >
                    {t('cookie_reject')}
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