"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Type, Sun, RotateCcw, X } from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  // 1. Carica preferenze all'avvio
  useEffect(() => {
    const savedZoom = localStorage.getItem("access_zoom");
    const savedContrast = localStorage.getItem("access_contrast");

    if (savedZoom) setZoomLevel(parseInt(savedZoom));
    if (savedContrast === "true") setHighContrast(true);
  }, []);

  // 2. Applica Zoom (questo non rompe nulla, lo teniamo così)
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.fontSize = `${zoomLevel}%`;
    }
    localStorage.setItem("access_zoom", zoomLevel.toString());
  }, [zoomLevel]);

  // 3. Salva preferenza Contrasto (ma non tocca più il body direttamente)
  useEffect(() => {
    localStorage.setItem("access_contrast", highContrast.toString());
  }, [highContrast]);

  const handleReset = () => {
    setZoomLevel(100);
    setHighContrast(false);
  };

  return (
    <>
      {/* --- LENTE ALTO CONTRASTO (OVERLAY) --- */}
      {/* Questo div copre tutto lo schermo ma lascia passare i click.
          Applica il filtro a tutto ciò che c'è sotto, senza rompere i 'fixed'. */}
      {highContrast && (
        <div 
          className="fixed inset-0 z-[99999] pointer-events-none"
          style={{
            backdropFilter: "grayscale(100%) contrast(150%)",
            backgroundColor: "rgba(255, 255, 255, 0.05)" // Leggera tinta per uniformare
          }}
        />
      )}

      {/* --- WIDGET DI CONTROLLO --- */}
      <div className="fixed bottom-6 left-6 z-[90] font-sans">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 left-0 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl w-64 border border-slate-700"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-400">Accessibilità</h3>
                <button onClick={() => setIsOpen(false)}><X size={18} className="text-slate-400 hover:text-white"/></button>
              </div>

              <div className="space-y-4">
                
                {/* Controllo Testo */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                    <Type size={14} /> Dimensione Testo
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
                    <button 
                      onClick={() => setZoomLevel(prev => Math.max(90, prev - 10))}
                      className="flex-1 hover:bg-slate-700 rounded py-1 text-xs font-bold"
                    >
                      A-
                    </button>
                    <span className="text-xs font-mono w-12 text-center">{zoomLevel}%</span>
                    <button 
                      onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
                      className="flex-1 hover:bg-slate-700 rounded py-1 text-xs font-bold"
                    >
                      A+
                    </button>
                  </div>
                </div>

                {/* Controllo Contrasto */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                    <Sun size={14} /> Visibilità
                  </div>
                  <button 
                    onClick={() => setHighContrast(!highContrast)}
                    className={`w-full py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 ${
                      highContrast 
                      ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                      : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                    }`}
                  >
                    {highContrast ? "Disattiva Contrasto" : "Alto Contrasto"}
                  </button>
                </div>

                {/* Reset */}
                <button 
                  onClick={handleReset}
                  className="w-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 py-2 rounded-lg text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <RotateCcw size={12} /> Ripristina Default
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottone Rotondo di Apertura */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-700 transition-transform active:scale-95"
          title="Strumenti Accessibilità"
        >
          <Eye size={24} />
        </button>

      </div>
    </>
  );
}