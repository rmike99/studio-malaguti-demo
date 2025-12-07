"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const StaggeredText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const letters = Array.from(text);
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className={letter === " " ? "mr-2 md:mr-4" : ""}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function WelcomeScreen() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (!hasVisited) {
        setShowWelcome(true);
        document.body.style.overflow = "hidden";

        // TIMELINE (20 Secondi)
        setTimeout(() => setPhase(1), 2000);
        setTimeout(() => setPhase(2), 5000);
        setTimeout(() => setPhase(3), 8000);

        const totalTimer = setTimeout(() => {
          setShowWelcome(false);
          sessionStorage.setItem("hasVisited", "true");
          
          setTimeout(() => {
            document.body.style.overflow = "unset";
          }, 2000);
        }, 18000); 

        return () => clearTimeout(totalTimer);
      }
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 text-white overflow-hidden touch-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 2.0, ease: [0.76, 0, 0.24, 1] }}
        >
          
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-black opacity-60"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.4, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
               style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
          />

          <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center justify-center h-full">
            <AnimatePresence mode="wait">
              
              {phase === 0 && <motion.div key="p0" className="h-2" />}

              {phase === 1 && (
                <motion.h2
                  key="word1"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                  transition={{ duration: 1.5 }}
                  className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-stone-300 tracking-widest text-center"
                >
                  Dal 1986
                </motion.h2>
              )}

              {phase === 2 && (
                <motion.h2
                  key="word2"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                  transition={{ duration: 1.5 }}
                  className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-emerald-500 tracking-widest text-center"
                >
                  Eccellenza
                </motion.h2>
              )}

              {phase >= 3 && (
                <motion.div
                  key="brand"
                  className="flex flex-col items-center gap-6 md:gap-12 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 z-10"
                    >
                      <Image 
                        src="/logoMalaguti.png" 
                        alt="Logo" 
                        fill 
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-emerald-500 blur-[60px] md:blur-[80px] rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ delay: 1, duration: 3 }}
                    />
                  </div>

                  <div className="text-center relative w-full">
                    <StaggeredText 
                      text="STUDIO MALAGUTI" 
                      delay={1.5} 
                      className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white justify-center leading-tight"
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 skew-x-12"
                      initial={{ x: "-150%" }}
                      animate={{ x: "150%" }}
                      transition={{ duration: 2, delay: 4.5, ease: "easeInOut" }}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 5.5, duration: 1.5 }}
                      className="mt-4 md:mt-6 flex flex-col md:flex-row gap-1 md:gap-6 items-center justify-center"
                    >
                      <span className="text-stone-400 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Amministrazione Condominiale</span>
                      <span className="hidden md:block w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-stone-400 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">Architettura Tecnica</span>
                    </motion.div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

          <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 w-48 md:w-64 h-[1px] bg-stone-800 overflow-hidden">
             <motion.div 
               className="h-full bg-emerald-500"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 18, ease: "linear" }}
             />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}