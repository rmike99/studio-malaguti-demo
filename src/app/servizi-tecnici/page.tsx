"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";
import { Ruler, HardHat, FileText, LayoutTemplate, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiziTecniciPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('tech_s1_title'),
      desc: t('tech_s1_desc'),
      icon: <Ruler size={32} className="text-emerald-500" />
    },
    {
      title: t('tech_s2_title'),
      desc: t('tech_s2_desc'),
      icon: <HardHat size={32} className="text-amber-500" />
    },
    {
      title: t('tech_s3_title'),
      desc: t('tech_s3_desc'),
      icon: <LayoutTemplate size={32} className="text-blue-500" />
    },
    {
      title: t('tech_s4_title'),
      desc: t('tech_s4_desc'),
      icon: <FileText size={32} className="text-purple-500" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('tech_hero_title')}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            {t('tech_hero_desc')}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle size={16} className="text-emerald-500" /> {t('tech_check_1')}
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle size={16} className="text-emerald-500" /> {t('tech_check_2')}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}