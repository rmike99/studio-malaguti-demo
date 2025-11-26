"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 font-sans">
      {/* Overlay Scuro */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Finestra Modale */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">Richiedi Consulenza</h2>
            <p className="text-emerald-400 text-sm">Invia un messaggio diretto all'Arch. Malaguti</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form className="p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Messaggio inviato alla segreteria!"); onClose(); }}>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Nome e Cognome</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="text" required placeholder="Es. Mario Rossi" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="email" required placeholder="nome@email.it" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Telefono</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="tel" placeholder="333 1234567" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Messaggio</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
              <textarea required rows={4} placeholder="Descrivi la tua richiesta (es. preventivo condominio, pratica edilizia...)" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800 resize-none"></textarea>
            </div>
          </div>

          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
            <Send size={18} /> Invia Richiesta
          </button>

          <p className="text-center text-xs text-slate-400 pt-2">
            I tuoi dati saranno trattati nel rispetto della Privacy Policy.
          </p>
        </form>
      </motion.div>
    </div>
  );
}