"use client";

import { useEffect } from "react";

export const useProtection = () => {
  useEffect(() => {
    // 1. Disabilita il Tasto Destro
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disabilita Selezione, Trascinamento e Copia
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      // Opzionale: Pulisce la clipboard o scrive un messaggio
      // navigator.clipboard.writeText("Contenuto protetto da Copyright."); 
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Rileva se è premuto CTRL (Windows/Linux) o COMMAND/META (Mac)
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      const key = e.key.toUpperCase();

      // BLOCCO TOTALE F12
      if (key === "F12") {
        e.preventDefault();
        return;
      }

      // BLOCCO STRUMENTI SVILUPPATORE (Cross-Platform)
      // Mac: Cmd+Opt+I/J/C/U | Win: Ctrl+Shift+I/J/C/U
      if (
        isCmdOrCtrl && 
        (e.shiftKey || e.altKey) && 
        ["I", "J", "C", "K", "U"].includes(key)
      ) {
        e.preventDefault();
        return;
      }

      // BLOCCO "VISUALIZZA SORGENTE" (Ctrl+U / Cmd+U / Cmd+Option+U)
      if (isCmdOrCtrl && key === "U") {
        e.preventDefault();
        return;
      }

      // BLOCCO SALVATAGGIO PAGINA (Ctrl+S / Cmd+S)
      if (isCmdOrCtrl && key === "S") {
        e.preventDefault();
        return;
      }
      
      // BLOCCO STAMPA (Ctrl+P / Cmd+P) - Spesso usata per vedere il layout pulito
      if (isCmdOrCtrl && key === "P") {
        e.preventDefault();
        return;
      }
    };

    // 3. Trappola "Debugger" (Misura Estrema)
    // Se qualcuno riesce ad aprire la console, questo loop rallenta l'ispezione
    // bloccando l'esecuzione del codice ogni volta che la console è aperta.
    const debuggerTrap = setInterval(() => {
      const startTime = performance.now();
      // Questo comando "debugger" ferma il browser se la console è aperta
      // Se la console è chiusa, non fa nulla.
      (function(){}).constructor("debugger")();
      
      if (performance.now() - startTime > 100) {
        // Se ci ha messo troppo tempo, significa che la console era aperta
        // e il debugger ha fermato l'esecuzione.
        console.clear(); 
      }
    }, 1000);

    // ATTIVAZIONE LISTENER
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy); // Blocca Ctrl+C
    document.addEventListener("cut", handleCopy);  // Blocca Ctrl+X
    
    // Firma Console
    console.log(
      "%c🛑 STOP! Proprietà riservata STUDIO MALAGUTI.",
      "color: white; background-color: red; font-size: 24px; font-weight: bold; padding: 10px; border-radius: 5px;"
    );

    // PULIZIA AL SMONTAGGIO
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCopy);
      clearInterval(debuggerTrap);
    };
  }, []);
};