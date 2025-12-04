"use client";
import Typewriter from 'typewriter-effect';
import { useLanguage } from '@/context/LanguageContext';

export default function TypewriterTitle() {
  const { language } = useLanguage();

  const words = {
    IT: ["nella Gestione.", "nella Sicurezza.", "nel Valore.", "nella Tecnica."],
    EN: ["in Management.", "in Safety.", "in Value.", "in Technique."],
    ES: ["en Gestión.", "en Seguridad.", "en Valor.", "en Técnica."]
  };

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-emerald-600 inline-block font-bold">
      <Typewriter
        options={{
          strings: words[language as keyof typeof words] || words['IT'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </span>
  );
}