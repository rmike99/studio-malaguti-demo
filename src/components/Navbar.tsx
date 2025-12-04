"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, X, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/utils/translations";
import StudioStatus from "@/components/StudioStatus";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage(); 

  const toggleLang = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const linkStyle = (path: string) => `transition-colors ${
    pathname === path ? "text-emerald-700 font-bold" : "text-slate-600 hover:text-emerald-700 font-medium"
  }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          <Link href="/" className="flex items-center gap-2 group z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <Building2 size={22} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">Studio Malaguti</span>
              <span className="text-[10px] font-medium text-emerald-700 tracking-widest uppercase">Amministrazioni dal 1986</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <StudioStatus />

            <div className="flex gap-6 text-sm">
              <Link href="/" className={linkStyle("/")}>{t('nav_home')}</Link> 
              <Link href="/lo-studio" className={linkStyle("/lo-studio")}>{t('nav_studio')}</Link>
              <Link href="/condomini" className={linkStyle("/condomini")}>{t('nav_condos')}</Link>
              <Link href="/servizi-tecnici" className={linkStyle("/servizi-tecnici")}>{t('nav_tech')}</Link>
              <Link href="/dove-siamo" className={linkStyle("/dove-siamo")}>{t('nav_where')}</Link>
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors text-sm font-bold uppercase"
              >
                <Globe size={18} /> {language}
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl w-32 overflow-hidden py-1"
                  >
                    {(['IT', 'EN', 'ES'] as Language[]).map((lang) => (
                      <button 
                        key={lang}
                        onClick={() => toggleLang(lang)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between text-slate-700"
                      >
                        <span className="flex items-center gap-2">
                          {lang === "IT" ? "🇮🇹" : lang === "EN" ? "🇬🇧" : "🇪🇸"} {lang}
                        </span>
                        {language === lang && <Check size={14} className="text-emerald-600"/>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/area-utenti">
              <button className="text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 transition-colors px-5 py-2.5 rounded-lg shadow-md">
                {t('nav_area')}
              </button>
            </Link>
          </div>

          <button 
            className="md:hidden text-slate-900 p-2 z-50 relative focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 md:hidden flex flex-col shadow-xl"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-800">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">{t('nav_home')}</Link>
                <Link href="/lo-studio" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">{t('nav_studio')}</Link>
                <Link href="/condomini" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">{t('nav_condos')}</Link>
                <Link href="/servizi-tecnici" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">{t('nav_tech')}</Link>
                <Link href="/dove-siamo" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4">{t('nav_where')}</Link>
            </div>

            <div className="flex justify-center gap-4 py-6 border-b border-slate-100">
               {(['IT', 'EN', 'ES'] as Language[]).map((lang) => (
                 <button 
                   key={lang}
                   onClick={() => toggleLang(lang)}
                   className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 ${language === lang ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
                 >
                   {lang === "IT" ? "🇮🇹" : lang === "EN" ? "🇬🇧" : "🇪🇸"} {lang}
                 </button>
               ))}
            </div>

            <div className="mt-auto mb-8">
              <Link href="/area-utenti" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full text-center text-white bg-emerald-600 active:bg-emerald-700 transition-colors px-5 py-4 rounded-xl shadow-lg font-bold text-lg">
                  {t('nav_area')}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}