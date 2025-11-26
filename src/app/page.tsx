"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard"; // La nostra nuova griglia servizi
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden relative bg-slate-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <Hero />
        
        {/* Titolo Sezione Servizi */}
        <div className="mb-10 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">I Nostri Servizi.</h2>
          <p className="text-slate-500">Un approccio multidisciplinare per la gestione del tuo immobile.</p>
        </div>
        
        <Dashboard />
      </div>

       {/* --- TICKER REALE (Testo Istituzionale) --- */}
       <div className="w-full overflow-hidden py-4 border-y border-slate-200 bg-white mt-20 relative">
           <motion.div 
             className="flex gap-16 whitespace-nowrap"
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
           >
             {[...Array(3)].map((_, i) => (
               <div key={i} className="flex gap-16 text-sm font-medium text-slate-500 uppercase tracking-widest">
                 <span className="flex items-center gap-2">🏛️ Studio fondato nel 1986</span>
                 <span className="flex items-center gap-2">📐 Arch. Michele Malaguti</span>
                 <span className="flex items-center gap-2">📍 Viale Umbria 126, Milano</span>
                 <span className="flex items-center gap-2">✅ Amministrazioni Stabili & Consulenza Tecnica</span>
                 <span className="flex items-center gap-2">🕒 Ricevimento su Appuntamento</span>
               </div>
             ))}
           </motion.div>
        </div>

        <Footer />
        <ChatBot /> 
    </main>
  );
}