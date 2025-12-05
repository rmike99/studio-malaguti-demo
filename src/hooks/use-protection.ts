"use client";

import { useEffect } from "react";

export const useProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      const key = e.key.toUpperCase();

      if (key === "F12") {
        e.preventDefault();
        return;
      }

      if (
        isCmdOrCtrl && 
        (e.shiftKey || e.altKey) && 
        ["I", "J", "C", "K", "U"].includes(key)
      ) {
        e.preventDefault();
        return;
      }

      if (isCmdOrCtrl && key === "U") {
        e.preventDefault();
        return;
      }

      if (isCmdOrCtrl && key === "S") {
        e.preventDefault();
        return;
      }
      
      if (isCmdOrCtrl && key === "P") {
        e.preventDefault();
        return;
      }
    };

    const debuggerTrap = setInterval(() => {
      const startTime = performance.now();
      (function(){}).constructor("debugger")();
      
      if (performance.now() - startTime > 100) {
        console.clear(); 
      }
    }, 1000);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCopy);
    
    console.log(
      "%c🛑 STOP! Proprietà riservata STUDIO MALAGUTI.",
      "color: white; background-color: red; font-size: 24px; font-weight: bold; padding: 10px; border-radius: 5px;"
    );

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCopy);
      clearInterval(debuggerTrap);
    };
  }, []);
};