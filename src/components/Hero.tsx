"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, FileCheck, Shield, Building } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "@/components/MagneticButton";
import TypewriterTitle from "@/components/TypewriterTitle";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50">
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-8 px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
          {t('hero_badge')}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
        >
          {t('hero_title_1')}<br />
          <div className="min-h-[1.2em]"> 
             <TypewriterTitle />
          </div>

        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero_desc')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center pt-6"
        >
          <MagneticButton 
          onClick={() => setIsContactOpen(true)}
          className="bg-slate-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
        >
          {t('hero_cta')} <ArrowRight size={20} />
        </MagneticButton>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 mt-16"
        >
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl mb-1"><Building size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">{t('hero_pill_admin')}</h3>
              <p className="text-sm text-slate-500">{t('hero_pill_admin_desc')}</p>
           </div>
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl mb-1"><Ruler size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">{t('hero_pill_tech')}</h3>
              <p className="text-sm text-slate-500">{t('hero_pill_tech_desc')}</p>
           </div>
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-purple-50 text-purple-700 rounded-xl mb-1"><Shield size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">{t('hero_pill_safe')}</h3>
              <p className="text-sm text-slate-500">{t('hero_pill_safe_desc')}</p>
           </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}