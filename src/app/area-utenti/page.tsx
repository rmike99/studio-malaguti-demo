"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { ShieldCheck, FileText, CreditCard, Lock, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function AreaUtentiPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Colonna Sinistra: Testi e Vantaggi */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Lock size={12} /> Accesso Protetto
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              I documenti del tuo condominio.<br/>
              <span className="text-emerald-600">Sempre disponibili.</span>
            </h1>
            
            <p className="text-lg text-slate-500 leading-relaxed">
              Lo Studio Malaguti offre un servizio di trasparenza totale. 
              Accedendo all'area riservata potrai consultare la tua posizione contabile e scaricare la documentazione condominiale in qualsiasi momento, 24/7.
            </p>

            {/* Elenco Puntato Vantaggi */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><FileText size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Documenti Ufficiali</h3>
                  <p className="text-sm text-slate-500">Verbali d'assemblea, bilanci preventivi e consuntivi, polizze assicurative.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-purple-50 p-2 rounded-lg text-purple-600"><CreditCard size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Situazione Pagamenti</h3>
                  <p className="text-sm text-slate-500">Verifica le rate versate e quelle in scadenza in tempo reale.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-amber-50 p-2 rounded-lg text-amber-600"><Download size={24}/></div>
                <div>
                  <h3 className="font-bold text-slate-900">Modulistica</h3>
                  <p className="text-sm text-slate-500">Scarica i moduli per cambio anagrafica, deleghe assembleari e detrazioni.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Colonna Destra: Card di Accesso */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 text-center relative overflow-hidden"
          >
            {/* Decorazione Sfondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-16 -mt-16 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShieldCheck size={32} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Login Area Riservata</h2>
              <p className="text-slate-500 mb-8">
                Per accedere verrai reindirizzato al portale sicuro Dedsoft/Danea. Tieni a portata di mano le tue credenziali.
              </p>

              <a 
                href="https://dedsoft.com/online/area-utenti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Accedi al Portale Sicuro <ArrowRight size={20} />
              </a>

              <p className="text-xs text-slate-400 mt-6 pt-6 border-t border-slate-100">
                Non hai le credenziali? <a href="#" className="text-emerald-600 font-bold hover:underline">Richiedile alla segreteria</a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
      <ChatBot />
    </main>
  );
}