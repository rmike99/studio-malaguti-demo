"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building, MapPin, Search } from "lucide-react";
import dynamic from 'next/dynamic';

export type CondominioData = {
  id: number;
  indirizzo: string;
  zona: string;
  unita: number;
  tipo: string;
  coords: [number, number];
};

const CONDOMINI: CondominioData[] = [
  { id: 1, indirizzo: "Viale Umbria, 126", zona: "Porta Romana", unita: 24, tipo: "Residenziale", coords: [45.4516, 9.2123] },
  { id: 2, indirizzo: "Via Lattanzio, 12", zona: "Porta Romana", unita: 18, tipo: "Misto", coords: [45.4485, 9.2156] },
  { id: 3, indirizzo: "Corso Lodi, 45", zona: "Brenta", unita: 42, tipo: "Supercondominio", coords: [45.4441, 9.2198] },
  { id: 4, indirizzo: "Via Muratori, 22", zona: "Porta Romana", unita: 12, tipo: "Epoca", coords: [45.4538, 9.2075] },
  { id: 5, indirizzo: "Via Friuli, 8", zona: "Città Studi", unita: 30, tipo: "Residenziale", coords: [45.4567, 9.2145] },
  { id: 6, indirizzo: "Piazza Medaglie d'Oro, 2", zona: "Porta Romana", unita: 55, tipo: "Signorile", coords: [45.4522, 9.2038] },
  { id: 7, indirizzo: "Via Spartaco, 10", zona: "V Giornate", unita: 15, tipo: "Epoca", coords: [45.4589, 9.2089] },
  { id: 8, indirizzo: "Viale Monte Nero, 60", zona: "V Giornate", unita: 28, tipo: "Commerciale/Res.", coords: [45.4595, 9.2055] },
  { id: 9, indirizzo: "Via Tiraboschi, 1", zona: "Porta Romana", unita: 20, tipo: "Residenziale", coords: [45.4510, 9.2095] },
  { id: 10, indirizzo: "Via Crema, 15", zona: "Porta Romana", unita: 16, tipo: "Residenziale", coords: [45.4498, 9.2012] },
  { id: 11, indirizzo: "Corso di Porta Romana, 110", zona: "Centro", unita: 35, tipo: "Signorile", coords: [45.4561, 9.1967] },
  { id: 12, indirizzo: "Via Lamarmora, 4", zona: "Crocetta", unita: 22, tipo: "Misto", coords: [45.4575, 9.2001] },
];

const CondoMap = dynamic(() => import('@/components/CondoMap'), {
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse rounded-3xl flex items-center justify-center text-slate-400 font-medium">Caricamento mappa...</div>,
  ssr: false
});

export default function CondominiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredCondomini = CONDOMINI.filter(c => 
    c.indirizzo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.zona.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <section className="pt-32 pb-8 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Portfolio Immobiliare</h1>
            <p className="text-emerald-400 font-medium flex items-center gap-2">
              <span className="bg-emerald-500 w-2 h-2 rounded-full animate-pulse"></span>
              {filteredCondomini.length} Stabili gestiti a Milano
            </p>
          </div>
          
          <div className="bg-white/10 p-1.5 rounded-xl flex items-center border border-white/20 backdrop-blur-md w-full md:w-auto">
            <Search className="text-slate-300 ml-3 shrink-0" size={18} />
            <input 
              type="text" 
              placeholder="Cerca via o zona..." 
              className="bg-transparent outline-none text-white placeholder:text-slate-400 px-3 py-2 w-full md:w-72"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row gap-8 p-6 relative min-h-screen">
        <div className="w-full lg:w-[45%] space-y-4">
          {filteredCondomini.length > 0 ? (
            filteredCondomini.map((condominio) => (
              <motion.div 
                key={condominio.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(condominio.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`p-6 rounded-2xl shadow-sm border transition-all cursor-pointer group flex justify-between items-start ${
                  hoveredId === condominio.id 
                  ? "bg-white border-emerald-500 ring-1 ring-emerald-500 shadow-md transform -translate-x-2" 
                  : "bg-white border-slate-200 hover:border-emerald-400 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-md flex items-center gap-1">
                      <Building size={12}/> {condominio.tipo}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{condominio.indirizzo}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin size={16} className="text-emerald-500 shrink-0" />
                    {condominio.zona}
                  </div>
                </div>
                <div className="text-right flex flex-col items-end h-full justify-between pl-4">
                    <span className="font-mono text-xs text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">#{condominio.id}</span>
                    <span className="font-bold text-slate-700 text-sm mt-8 whitespace-nowrap">
                       {condominio.unita} Unità
                    </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 opacity-50 bg-white rounded-3xl border border-dashed border-slate-300">
              <p>Nessun risultato trovato.</p>
            </div>
          )}
        </div>

        <div className="hidden lg:block flex-1 relative">
           <div className="sticky top-28 h-[calc(100vh-150px)] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
             <CondoMap filteredCondomini={filteredCondomini} hoveredId={hoveredId} />
           </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}