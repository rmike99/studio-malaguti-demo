"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";
import { Award, Clock, Users, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LoStudioPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            {t('studio_hero_badge')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('studio_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {t('studio_hero_desc')}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">{t('studio_hist_title')}</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            <p className="text-slate-600 leading-relaxed">{t('studio_hist_p1')}</p>
            <p className="text-slate-600 leading-relaxed">{t('studio_hist_p2')}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Clock className="text-emerald-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">35+</span>
              <span className="text-sm text-slate-500">{t('studio_stat_exp')}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Building className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">100%</span>
              <span className="text-sm text-slate-500">{t('studio_stat_milano')}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Users className="text-purple-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">ANACI</span>
              <span className="text-sm text-slate-500">{t('studio_stat_assoc')}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Award className="text-amber-500" size={32} />
              <span className="text-2xl font-bold text-slate-900">Arch.</span>
              <span className="text-sm text-slate-500">{t('studio_stat_tech')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
            {t('studio_quote')}
          </p>
          <div className="mt-8 text-emerald-400 font-bold tracking-widest uppercase text-sm">
            Arch. Michele Malaguti
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}