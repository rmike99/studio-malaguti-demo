"use client";
import { ShieldCheck, Award, Building, Lock, Users } from "lucide-react";

export default function TrustBar() {
  const partners = [
    { name: "ANACI", sub: "Associazione Nazionale", icon: <Users size={24} /> },
    { name: "Certificazione ISO", sub: "Qualità 9001", icon: <Award size={24} /> },
    { name: "Sicurezza Cantieri", sub: "D.Lgs 81/08", icon: <HardHatIcon /> }, // Icona custom sotto
    { name: "Polizza RC", sub: "Copertura Totale", icon: <ShieldCheck size={24} /> },
    { name: "Camera di Commercio", sub: "Milano", icon: <Building size={24} /> },
  ];

  return (
    <div className="border-y border-slate-100 bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Certificazioni e Affiliazioni
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              <div className="text-slate-300 group-hover:text-emerald-600 transition-colors">
                {p.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-700 leading-none">{p.name}</span>
                <span className="text-[10px] uppercase font-semibold text-slate-400">{p.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Icona helper per non importare troppe cose
function HardHatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v3"/><path d="M14 6l-3 3"/></svg>
  )
}