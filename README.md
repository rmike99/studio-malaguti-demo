# 🏢 Studio Malaguti - Next.js Web Platform

Questo progetto è il nuovo sito web istituzionale e gestionale per lo **Studio Malaguti**, uno studio di amministrazione condominiale e architettura tecnica basato a Milano.

Il sito è costruito con **Next.js (App Router)** e **TypeScript**, progettato per essere veloce, accessibile, multilingua e altamente interattivo.

🔗 **Live Demo:** [https://studiomalaguti-preview.netlify.app](https://studiomalaguti-preview.netlify.app)

---

## ⚡ Tech Stack

* **Framework:** [Next.js 14+](https://nextjs.org/) (React)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Maps:** [React Leaflet](https://react-leaflet.js.org/) (OpenStreetMap)
* **Emails:** [EmailJS](https://www.emailjs.com/)
* **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

---

## ✨ Funzionalità Principali

### 🎨 UI & UX
* **Design Responsivo:** Layout fluido ottimizzato per Desktop, Tablet e Mobile.
* **Cinematic Hero:** Sfondo video con titoli animati (effetto Typewriter).
* **Transizioni di Pagina:** Navigazione fluida tra le rotte senza "scatti".
* **Micro-interazioni:** Bottoni magnetici, Scroll Progress Bar, Hover effects.

### 🛠️ Strumenti Utili
* **Widget Meteo & Riscaldamento:** Rileva temperatura in tempo reale (API Open-Meteo) e indica se è legale accendere il riscaldamento a Milano (Zona E).
* **Chatbot Intelligente:** Assistente virtuale con logica condizionale per smistare richieste (Condomini, Nuovi Clienti, Urgenze).
* **Timeline Interattiva:** Storia dello studio animata allo scroll.
* **Status Studio:** Indicatore "Aperto/Chiuso" basato sull'orario reale di Milano.

### 🗺️ Portfolio Condomini
* **Mappa Interattiva:** Visualizzazione su mappa OpenStreetMap.
* **Filtro di Ricerca:** Ricerca istantanea per via o zona.
* **Sincronizzazione:** Hover sulla lista evidenzia il pin sulla mappa e viceversa.

### 🌍 Internazionalizzazione (i18n)
* Supporto completo per **Italiano, Inglese e Spagnolo**.
* Cambio lingua istantaneo senza ricaricamento pagina (React Context).

### ♿ Accessibilità & Legal
* **Widget Accessibilità:** Alto Contrasto e Zoom testo.
* **Cookie Banner:** Gestione consenso GDPR (blocca script finché non accettati).
* **SEO:** Metadata dinamici, Sitemap.xml, Robots.txt e Open Graph per anteprime social (WhatsApp/Facebook).

### 🛡️ Sicurezza
Il sito include un hook personalizzato useProtection che, in produzione, disabilita:
* **Tasto destro** (Context Menu).
* **Scorciatoie per Developer Tools** (F12, Ctrl+Shift+I).
* **Selezione del testo e trascinamento immagini** (Hover).

---

## 🚀 Avvio

1.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

2.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```

3.  Apri [http://localhost:3000](http://localhost:3000) nel browser.

---

## ⚙️ Configurazione Email (EmailJS)

Il modulo di contatto e il "Lavora con noi" utilizzano **EmailJS** per l'invio reale delle email senza backend.

Per far funzionare l'invio email nel file `src/components/ContactModal.tsx`, è necessario configurare le seguenti costanti o variabili d'ambiente:

```typescript
const SERVICE_ID = "IL_TUO_SERVICE_ID";
const TEMPLATE_ID = "IL_TUO_TEMPLATE_ID";
const PUBLIC_KEY = "LA_TUA_PUBLIC_KEY";