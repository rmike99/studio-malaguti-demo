"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Sun, CloudRain, Snowflake, X, CalendarClock, Zap, Wind, Droplets, ThermometerSun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WeatherWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const [data, setData] = useState({
    temp: 0,
    code: 0,
    humidity: 0,
    wind: 0,
    isHeatingSeason: false,
    loaded: false
  });

  useEffect(() => {
    const checkHeatingSeason = () => {
      const now = new Date();
      const month = now.getMonth(); 
      const day = now.getDate();
      return (month > 9 || month < 3) || (month === 9 && day >= 15) || (month === 3 && day <= 15);
    };

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=45.4642&longitude=9.1900&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2FRome"
        );
        const json = await res.json();
        
        setData({
          temp: Math.round(json.current.temperature_2m),
          code: json.current.weather_code,
          humidity: json.current.relative_humidity_2m,
          wind: Math.round(json.current.wind_speed_10m),
          isHeatingSeason: checkHeatingSeason(),
          loaded: true
        });
      } catch (e) {
        console.error("Meteo error", e);
      }
    };

    checkHeatingSeason();
    fetchWeather();
  }, []);

  // Determina il gradiente di sfondo e l'icona in base al meteo
  const getWeatherStyle = (code: number) => {
    if (code <= 1) return { bg: "from-amber-400 to-orange-500", icon: <Sun className="text-white drop-shadow-md" size={48} /> }; // Sole
    if (code <= 3) return { bg: "from-blue-300 to-slate-400", icon: <Cloud className="text-white drop-shadow-md" size={48} /> }; // Nuvoloso
    if (code <= 67) return { bg: "from-slate-700 to-blue-800", icon: <CloudRain className="text-white drop-shadow-md" size={48} /> }; // Pioggia
    return { bg: "from-cyan-400 to-blue-600", icon: <Snowflake className="text-white drop-shadow-md" size={48} /> }; // Neve
  };

  const style = getWeatherStyle(data.code);

  if (!data.loaded) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[9990] font-sans flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10, x: 10 }}
            className={`mb-4 w-72 rounded-3xl shadow-2xl overflow-hidden text-white relative bg-gradient-to-br ${style.bg}`}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="p-5 pb-0 flex justify-between items-start relative z-10">
              <div>
                <h3 className="font-bold text-lg leading-none">Milano</h3>
                <p className="text-xs opacity-80 mt-1 uppercase tracking-wide">Live Weather</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/20 hover:bg-white/30 p-1.5 rounded-full backdrop-blur-md transition-colors">
                <X size={14} />
              </button>
            </div>

            <div className="flex items-center justify-between px-6 py-2 relative z-10">
              <div><span className="text-6xl font-bold tracking-tighter">{data.temp}°</span></div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                {style.icon}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-2 px-4 pb-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex flex-col items-center">
                <div className="flex items-center gap-1 text-xs opacity-80 mb-1"><Wind size={12} /> {t('weather_wind')}</div>
                <span className="font-bold text-lg">{data.wind} <span className="text-xs font-normal">km/h</span></span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex flex-col items-center">
                <div className="flex items-center gap-1 text-xs opacity-80 mb-1"><Droplets size={12} /> {t('weather_humidity')}</div>
                <span className="font-bold text-lg">{data.humidity}<span className="text-xs font-normal">%</span></span>
              </div>
            </div>

            <div className={`py-3 px-5 text-center text-xs font-bold uppercase tracking-widest relative z-10 ${data.isHeatingSeason ? 'bg-orange-500/90' : 'bg-emerald-600/90'}`}>
              {data.isHeatingSeason ? (
                <span className="flex items-center justify-center gap-2"><Zap size={14} className="fill-current" /> {t('weather_heating_active')}</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><ThermometerSun size={14} /> {t('weather_heating_inactive')}</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-14 h-14 rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white transition-all overflow-hidden relative ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-gradient-to-br ${style.bg}`}
      >
        <span className="font-bold text-white text-sm">{data.temp}°</span>
        {data.isHeatingSeason && (
          <span className="absolute bottom-1 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-sm animate-pulse"></span>
        )}
      </motion.button>

    </div>
  );
}