"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Timeline from "@/components/Timeline";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden relative bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Sezione Servizi (Dashboard) */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">{t('serv_title')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t('serv_subtitle')}</h2>
        </div>
        <Dashboard />
      </div>

      {/* Sezione Timeline (Sfondo Bianco Full Width) */}
      <div className="w-full bg-white">
        <Timeline />
      </div>

      {/* Ticker (Sfondo Bianco Full Width - Continuo con la Timeline) */}
      <div className="w-full overflow-hidden py-6 border-t border-slate-100 bg-white relative">
          <motion.div 
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-20 text-sm font-semibold text-slate-400 uppercase tracking-widest items-center">
                <span>{t('ticker_1')}</span>
                <span>{t('ticker_2')}</span>
                <span>{t('ticker_3')}</span>
                <span>{t('ticker_4')}</span>
                <span>{t('ticker_5')}</span>
              </div>
            ))}
          </motion.div>
      </div>

      <Footer />
      <ChatBot /> 
    </main>
  );
}