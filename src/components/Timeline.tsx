"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();

  const events = [
    { year: "1986", title: t('time_1986_title'), desc: t('time_1986_desc') },
    { year: "2000", title: t('time_2000_title'), desc: t('time_2000_desc') },
    { year: "2015", title: t('time_2015_title'), desc: t('time_2015_desc') },
    { year: "2025", title: t('time_2025_title'), desc: t('time_2025_desc') },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('timeline_title')}</h2>
          <p className="text-slate-500">{t('timeline_subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full pl-12 md:pl-0 md:text-right">
                  <div className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-4xl font-bold text-slate-200 absolute top-4 right-6 select-none">{event.year}</span>
                    <h3 className="text-xl font-bold text-emerald-700 mb-2 relative z-10">{event.title}</h3>
                    <p className="text-slate-600 relative z-10">{event.desc}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-md z-10"></div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}