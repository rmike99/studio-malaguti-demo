"use client";
import Link from "next/link";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
          <Building2 size={22} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">Studio Malaguti</span>
          <span className="text-[10px] font-medium text-emerald-700 tracking-widest uppercase">Amministrazioni dal 1986</span>
        </div>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {/* NUOVO LINK HOME */}
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
    </nav>
  );
}