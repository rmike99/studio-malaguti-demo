"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";
import { Award, Clock, Users, Building } from "lucide-react";

export default function LoStudioPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      {/* Hero Interna */}
      <section className="pt-32 pb-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Dal 1986
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Professionalità e <span className="text-emerald-600">Tradizione.</span>
          </motion.h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Lo Studio Malaguti rappresenta un punto di riferimento a Milano per l'amministrazione condominiale e la consulenza tecnica integrata.
          </p>
        </div>
      </section>

      {/* Storia e Valori */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">La nostra storia.</h2>
            <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            <p className="text-slate-600 leading-relaxed">
              Fondato nel 1986, lo studio nasce con l'obiettivo di offrire una gestione immobiliare diversa: non solo contabile, ma profondamente tecnica.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sotto la guida dell'<b>Arch. Michele Malaguti</b>, lo studio ha evoluto le proprie competenze integrando la gestione ordinaria con servizi di progettazione architettonica e sicurezza cantieri, garantendo ai condomini un unico interlocutore qualificato per ogni esigenza dell'edificio.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Clock className="text-emerald-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">35+</span>
              <span className="text-sm text-slate-500">Anni di Esperienza</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Building className="text-blue-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">100%</span>
              <span className="text-sm text-slate-500">Gestione Milano</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Users className="text-purple-600" size={32} />
              <span className="text-2xl font-bold text-slate-900">ANACI</span>
              <span className="text-sm text-slate-500">Iscrizione Associazione</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
              <Award className="text-amber-500" size={32} />
              <span className="text-2xl font-bold text-slate-900">Arch.</span>
              <span className="text-sm text-slate-500">Competenza Tecnica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
            "Il condominio non è solo un insieme di numeri, ma una struttura viva che richiede cura tecnica, manutenzione e visione architettonica."
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