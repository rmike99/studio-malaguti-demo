"use client";
import { Building2, Mail, Phone, MapPin, Printer } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // <--- 1. IMPORT

export default function Footer() {
  const { t } = useLanguage(); // <--- 2. HOOK

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white text-slate-900 p-1.5 rounded-lg"><Building2 size={24} /></div>
              <span className="text-xl font-bold tracking-tight uppercase">Studio Malaguti</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t('footer_desc')} {/* Tradotto */}
            </p>
          </div>
          
          {/* Contatti */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-emerald-400">{t('footer_contacts')}</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-1 shrink-0"/> 
                <span>Viale Umbria, 126<br/>20135 Milano (MI)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0"/> 
                02.45409394
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0"/> 
                studiomalaguti@gmail.com
              </li>
            </ul>
          </div>

          {/* Servizi Online */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-emerald-400">{t('footer_services')}</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <Link href="/area-utenti" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {t('nav_area')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {t('footer_privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Studio Malaguti - Arch. Michele Malaguti.</p>
          <p>{t('footer_piva')}</p>
        </div>

      </div>
    </footer>
  );
}