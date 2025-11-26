import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori Semantici
        primary: "#0F172A", // Blu Notte (Testi importanti, Navbar)
        secondary: "#334155", // Grigio Bluastro (Testi secondari)
        accent: "#059669", // Verde Smeraldo (Bottoni, Icone positive)
        bgLight: "#FFFFFF", // Bianco Puro (Schede)
        bgDark: "#F1F5F9", // Grigio Chiarissimo (Sfondo sito)
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      }
    },
  },
  plugins: [],
};
export default config;