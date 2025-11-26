"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, FileCheck, Shield, Building } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50">
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Sfondo Architettonico Astratto */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-8 px-6">
        
        {/* Badge Storico */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
          Studio di Architettura e Amministrazioni dal 1986
        </motion.div>
        
        {/* Titolo Principale */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
        >
          Studio Malaguti.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
            Competenza Tecnica e Gestionale.
          </span>
        </motion.h1>
        
        {/* Sottotitolo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          Guidato dall'<b>Arch. Michele Malaguti</b>, lo studio offre una gestione condominiale integrata a servizi di progettazione, direzione lavori e sicurezza cantieri a Milano.
        </motion.p>

        {/* Bottoni Azione - Modificati */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center pt-6"
        >
          <button 
            onClick={() => setIsContactOpen(true)}
            className="bg-slate-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
          >
            Richiedi Consulenza <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* I Pilastri Tecnici - Aggiornati */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 mt-16"
        >
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl mb-1"><Building size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">Amministrazione Stabili</h3>
              <p className="text-sm text-slate-500">Gestione ordinaria e straordinaria con reperibilità e trasparenza.</p>
           </div>
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl mb-1"><Ruler size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">Studio Tecnico</h3>
              <p className="text-sm text-slate-500">Progettazione, Capitolati, Direzione Lavori e Pratiche Catastali.</p>
           </div>
           <div className="flex flex-col items-center gap-3 p-4">
              <div className="p-3 bg-purple-50 text-purple-700 rounded-xl mb-1"><Shield size={28}/></div>
              <h3 className="font-bold text-lg text-slate-900">Sicurezza e Legale</h3>
              <p className="text-sm text-slate-500">Coordinamento sicurezza cantieri (D.Lgs 81/08) e consulenza tecnica di parte.</p>
           </div>
        </motion.div>

      </div>
    </section>
  );
}