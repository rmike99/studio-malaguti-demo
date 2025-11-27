"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DoveSiamoPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{t('where_title')}</h1>
            <p className="text-slate-500 mb-10">{t('where_subtitle')}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{t('where_addr_title')}</h3>
                  <p className="text-slate-600">Viale Umbria, 126<br/>20135 Milano (MI)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{t('where_phone_title')}</h3>
                  <p className="text-slate-600">Tel: 02.45409394</p>
                  <p className="text-slate-600">Fax: 02.29513023</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{t('where_hours_title')}</h3>
                  <p className="text-slate-600">{t('where_hours_desc')}</p>
                  <p className="text-slate-500 text-sm mt-1">{t('where_hours_note')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto bg-slate-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.506547630739!2d9.2123!3d45.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c41b8c8c8c8d%3A0x123456789!2sViale%20Umbria%2C%20126%2C%2020135%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>

      <Footer />
      <ChatBot />
    </main>
  );
}