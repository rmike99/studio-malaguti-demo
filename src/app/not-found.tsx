"use client";

import Link from "next/link";
import { Home, Map } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6 selection:bg-emerald-200">
      
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-200 max-w-lg w-full">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Map size={40} />
        </div>
        
        <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Ti sei perso nel condominio?</h2>
        
        <p className="text-slate-500 mb-8 leading-relaxed">
          Sembra che la pagina che stai cercando sia stata ristrutturata o non sia mai esistita.
          Torniamo alla portineria principale.
        </p>

        <Link href="/">
          <button className="w-full bg-slate-900 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg">
            <Home size={20} /> Torna alla Home
          </button>
        </Link>
      </div>

      <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">Studio Malaguti • Milano</p>
    </div>
  );
}