"use client";

import React from "react"; // <--- 1. AGGIUNTO QUESTO IMPORT
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Bot, Phone, AlertTriangle, FileText, HardHat } from "lucide-react";

type Message = { 
  id: number; 
  text: React.ReactNode; // <--- 2. CAMBIATO QUESTO TIPO (Era string | JSX.Element)
  sender: 'bot' | 'user'; 
  options?: string[];
  actionLink?: { text: string; url: string };
};

const INITIAL_MSG: Message = {
  id: 1,
  text: "Benvenuto nello Studio Malaguti. Sono l'assistente virtuale. Come posso aiutarti?",
  sender: 'bot',
  options: ["Sono un Condomino 🏠", "Cerco un Amministratore 🤝", "Servizi Tecnici/Edilizi 📐", "Urgenza / Guasto 🚨"]
};

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MSG]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(isChatOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isChatOpen]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = { id: Date.now(), text: option, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;

      // --- SCENARIO 1: CONDOMINO ESISTENTE ---
      if (option.includes("Condomino")) {
        botResponse = { 
          id: Date.now() + 1, 
          text: "Per i condomini gestiti, la via più veloce è l'Area Riservata. Puoi controllare rate, verbali e aprire ticket tracciati.", 
          sender: 'bot', 
          options: ["Ho perso la password", "Voglio segnalare un guasto", "Torna al menu"],
          actionLink: { text: "Accedi Area Riservata", url: "/area-utenti" }
        };
      } 
      
      // --- SCENARIO 2: URGENZE ---
      else if (option.includes("Urgenza") || option.includes("guasto")) {
        botResponse = { 
          id: Date.now() + 1, 
          text: (
            <span>
              Per <b>emergenze reali</b> (fughe gas, allagamenti, ascensori bloccati con persone) fuori orario ufficio, contatta i numeri affissi in bacheca.<br/><br/>
              Per guasti ordinari (lampadine, citofoni), usa l'Area Riservata per garantire la presa in carico.
            </span>
          ), 
          sender: 'bot', 
          options: ["Torna al menu"] 
        };
      }

      // --- SCENARIO 3: NUOVO CLIENTE ---
      else if (option.includes("Amministratore") || option.includes("Preventivo")) {
        botResponse = { 
          id: Date.now() + 1, 
          text: "Gestiamo immobili a Milano dal 1986 con un approccio tecnico-amministrativo. Per un preventivo preciso, inviaci i dati dello stabile via mail.", 
          sender: 'bot', 
          options: ["Invia Mail Preventivo", "Chiama Studio", "Torna al menu"],
        };
      }

      // --- SCENARIO 4: SERVIZI TECNICI ---
      else if (option.includes("Tecnici") || option.includes("Edilizi")) {
        botResponse = { 
          id: Date.now() + 1, 
          text: "L'Arch. Michele Malaguti si occupa di Direzione Lavori, Pratiche Edilizie (CILA/SCIA) e Sicurezza Cantieri. Desideri un appuntamento?", 
          sender: 'bot', 
          options: ["Chiama per Appuntamento", "Torna al menu"] 
        };
      }

      // --- AZIONI DIRETTE ---
      else if (option.includes("Chiama")) {
        window.location.href = "tel:0245409394";
        botResponse = { id: Date.now() + 1, text: "Sto avviando la chiamata allo 02.45409394...", sender: 'bot', options: ["Torna al menu"] };
      }
      else if (option.includes("Mail")) {
        window.location.href = "mailto:studiomalaguti@gmail.com?subject=Richiesta Preventivo Amministrazione";
        botResponse = { id: Date.now() + 1, text: "Ho aperto il tuo client di posta.", sender: 'bot', options: ["Torna al menu"] };
      }
      
      // --- DEFAULT ---
      else {
        botResponse = { 
          id: Date.now() + 1, 
          text: "Ecco le opzioni principali.", 
          sender: 'bot', 
          options: ["Sono un Condomino 🏠", "Cerco un Amministratore 🤝", "Servizi Tecnici/Edilizi 📐", "Urgenza / Guasto 🚨"] 
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[340px] md:w-[380px] h-[550px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 border-2 border-emerald-500 relative">
                      <Bot size={20} />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Segreteria Virtuale</h3>
                      <p className="text-[10px] text-emerald-400 uppercase tracking-wider">Studio Malaguti</p>
                    </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:text-emerald-400 transition-colors"><X size={20}/></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                    msg.sender === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>

                  {msg.actionLink && (
                    <a href={msg.actionLink.url} className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-md w-fit">
                      {msg.actionLink.text} <FileText size={12}/>
                    </a>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Opzioni Rapide */}
            <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap gap-2 shrink-0">
                {messages[messages.length - 1]?.options?.map((opt, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleOptionClick(opt)} 
                      disabled={isTyping} 
                      className="text-xs bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 text-slate-600 px-3 py-2.5 rounded-lg transition-all border border-slate-200 font-medium flex-grow text-center"
                    >
                        {opt}
                    </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => setIsChatOpen(!isChatOpen)} 
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all relative z-50 ${
          isChatOpen ? 'bg-slate-900 text-white' : 'bg-white text-emerald-600 border-2 border-emerald-500'
        }`}
      >
         {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
         {!isChatOpen && (
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
           </span>
         )}
      </motion.button>
    </div>
  );
}