"use client";
import { motion } from "framer-motion";
import { Building2, Scale, HardHat, FileText, ArrowRight } from "lucide-react";

// Varianti animazione
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

export default function Dashboard() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* CARD 1: Amministrazione (Grande) */}
      <motion.div variants={itemVariants} className="md:col-span-2 bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:shadow-card transition-all relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-105 z-0"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
              <Building2 size={18} /> Core Business
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Gestione Condominiale Completa.</h3>
            <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
              Lo studio garantisce una gestione precisa e puntuale, avvalendosi di software gestionali avanzati per la contabilità e la ripartizione delle spese. Massima trasparenza nella gestione dei fornitori e dei conti correnti.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4 text-sm font-medium text-slate-600">
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Assemblee in sede</span>
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Reperibilità guasti</span>
          </div>
        </div>
      </motion.div>

      {/* CARD 2: Studio Tecnico (Verticale) */}
      <motion.div variants={itemVariants} className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-600/20 rounded-full blur-2xl group-hover:bg-emerald-600/30 transition-all"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
           <div>
             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <HardHat size={24} className="text-emerald-400"/>
             </div>
             <h3 className="text-xl font-bold mb-3">Area Tecnica & Progettazione</h3>
             <p className="text-slate-300 text-sm leading-relaxed">
               Grazie alla qualifica di Architetto, Michele Malaguti offre servizi di Direzione Lavori, CILA/SCIA, Pratiche Catastali e Coordinamento della Sicurezza.
             </p>
           </div>
           
           <div className="mt-6">
             <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold cursor-pointer hover:underline">
               Approfondisci <ArrowRight size={16}/>
             </div>
           </div>
        </div>
      </motion.div>

      {/* CARD 3: Consulenza Legale */}
      <motion.div variants={itemVariants} className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-md transition-all">
         <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white text-emerald-700 rounded-xl shadow-sm"><Scale size={24}/></div>
         </div>
         <h3 className="text-xl font-bold text-emerald-900 mb-2">Consulenza Contrattuale</h3>
         <p className="text-emerald-800/70 text-sm">
           Stesura regolamenti di condominio, gestione contenziosi e contratti d'appalto con le imprese.
         </p>
      </motion.div>

      {/* CARD 4: Tabelle Millesimali */}
      <motion.div variants={itemVariants} className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-8">
         <div className="p-4 bg-slate-50 rounded-2xl shrink-0">
            <FileText size={32} className="text-slate-700"/>
         </div>
         <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Redazione Tabelle Millesimali</h3>
            <p className="text-slate-500 text-sm">
              Calcolo e revisione delle tabelle millesimali di proprietà, riscaldamento e scale, fondamentali per una corretta ripartizione delle spese secondo normativa vigente.
            </p>
         </div>
      </motion.div>

    </motion.div>
  );
}