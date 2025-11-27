"use client";
import { motion } from "framer-motion";
import { X, Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // <--- IMPORT

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage(); // <--- HOOK

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">{t('contact_title')}</h2>
            <p className="text-emerald-400 text-sm">{t('contact_subtitle')}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <form className="p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Messaggio inviato!"); onClose(); }}>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">{t('contact_name')}</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">{t('contact_email')}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">{t('contact_phone')}</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800" />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">{t('contact_msg')}</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
              <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800 resize-none"></textarea>
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
            <Send size={18} /> {t('contact_btn')}
          </button>

          <p className="text-center text-xs text-slate-400 pt-2">
            {t('contact_privacy')}
          </p>
        </form>
      </motion.div>
    </div>
  );
}