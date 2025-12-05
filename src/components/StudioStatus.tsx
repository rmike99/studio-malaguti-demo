"use client";

import { useState, useEffect } from "react";
import { Clock, Phone } from "lucide-react";

export default function StudioStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      
      const milanTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Rome" }));
      
      const day = milanTime.getDay();
      const hour = milanTime.getHours();
      const minutes = milanTime.getMinutes();
      const totalMinutes = hour * 60 + minutes;

      const isOpenNow = 
        day >= 1 && day <= 5 &&
        totalMinutes >= 540 &&
        totalMinutes < 1080;

      setIsOpen(isOpenNow);
      setLoading(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-md transition-colors ${
      isOpen 
      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600" 
      : "bg-red-500/10 border-red-500/30 text-red-600"
    }`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}></span>
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}></span>
      </span>
      
      <div className="flex flex-col leading-none">
        <span className="uppercase tracking-wider text-[10px] opacity-80">Stato Studio</span>
        <span className="flex items-center gap-1.5">
          {isOpen ? (
            <>APERTO • Chiama Ora</>
          ) : (
            <>CHIUSO • Scrivi Mail</>
          )}
        </span>
      </div>
    </div>
  );
}