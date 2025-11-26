"use client";

import { useEffect } from "react";

export const useProtection = () => {
  useEffect(() => {
    // 1. Disabilita Tasto Destro (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disabilita Scorciatoie da Tastiera per Developer Tools
    const handleKeyDown = (e: KeyboardEvent) => {
      // Blocca F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Blocca Ctrl+Shift+I (Ispeziona), Ctrl+Shift+J (Console), Ctrl+U (Sorgente)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    // 3. Firma Console (Watermark)
    // Se qualcuno riesce ad aprire la console, vede questo avvertimento
    console.log(
      "%c🛑 STOP! Questo è codice proprietario di NEXUS.",
      "color: red; font-size: 20px; font-weight: bold;"
    );
    console.log(
      "%cQualsiasi tentativo di reverse engineering sarà monitorato.",
      "color: white; font-size: 14px;"
    );

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};