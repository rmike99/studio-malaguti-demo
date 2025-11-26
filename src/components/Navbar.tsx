"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          {/* --- LOGO (Sempre visibile) --- */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <Building2 size={22} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">Studio Malaguti</span>
              <span className="text-[10px] font-medium text-emerald-700 tracking-widest uppercase">Amministrazioni dal 1986</span>
            </div>
          </Link>
          
          {/* --- MENU DESKTOP (Nascosto su Mobile) --- */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link> 
              <Link href="/lo-studio" className="hover:text-emerald-700 transition-colors">Lo Studio</Link>
              <Link href="/condomini" className="hover:text-emerald-700 transition-colors">I Nostri Condomini</Link>
              <Link href="/servizi-tecnici" className="hover:text-emerald-700 transition-colors">Servizi Tecnici</Link>
              <Link href="/dove-siamo" className="hover:text-emerald-700 transition-colors">Dove Siamo</Link>
            </div>

            <Link href="/area-utenti">
              <button className="text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 transition-colors px-5 py-2.5 rounded-lg shadow-md">
                Area Riservata
              </button>
            </Link>
          </div>

          {/* --- BURGER BUTTON (Visibile solo su Mobile) --- */}
          <button 
            className="md:hidden text-slate-900 p-2 z-50 relative focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* --- MENU MOBILE A COMPARSA --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 md:hidden flex flex-col shadow-xl"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-800">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 flex justify-between items-center">
                Home <span className="text-slate-300">&rarr;</span>
              </Link>
              <Link href="/lo-studio" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 flex justify-between items-center">
                Lo Studio <span className="text-slate-300">&rarr;</span>
              </Link>
              <Link href="/condomini" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 flex justify-between items-center">
                I Nostri Condomini <span className="text-slate-300">&rarr;</span>
              </Link>
              <Link href="/servizi-tecnici" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 flex justify-between items-center">
                Servizi Tecnici <span className="text-slate-300">&rarr;</span>
              </Link>
              <Link href="/dove-siamo" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-slate-100 pb-4 flex justify-between items-center">
                Dove Siamo <span className="text-slate-300">&rarr;</span>
              </Link>
            </div>

            <div className="mt-auto mb-8">
              <Link href="/area-utenti" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full text-center text-white bg-emerald-600 active:bg-emerald-700 transition-colors px-5 py-4 rounded-xl shadow-lg font-bold text-lg">
                  Accedi Area Riservata
                </button>
              </Link>
              <p className="text-center text-slate-400 text-xs mt-4">Studio Malaguti - Milano</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}