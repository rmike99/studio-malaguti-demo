"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Shield, Lock } from "lucide-react";
import WeatherWidget from "@/components/WeatherWidget";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* Intestazione */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <Shield size={24} />
            </div>
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">GDPR Compliance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Informativa sulla Privacy</h1>
          <p className="text-slate-500">Ultimo aggiornamento: 01 Gennaio 2025</p>
        </div>

        {/* Contenuto Legale */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 space-y-8 text-slate-600 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>Studio Malaguti</strong>, con sede legale in Viale Umbria 126, 20135 Milano (MI).
              <br />
              Per qualsiasi chiarimento, informazione o esercizio dei diritti elencati nella presente informativa, è possibile contattare il Titolare all'indirizzo email: <a href="mailto:studiomalaguti@gmail.com" className="text-emerald-600 hover:underline">studiomalaguti@gmail.com</a>.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Tipologie di Dati raccolti</h2>
            <p className="mb-2">Durante l'utilizzo di questo sito Web, vengono raccolti i seguenti dati:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              <li><strong>Dati di navigazione:</strong> Indirizzi IP, orari delle richieste, tipo di browser utilizzato e altri parametri tecnici.</li>
              <li><strong>Dati forniti volontariamente:</strong> Nome, Cognome, Email e Numero di Telefono inseriti nel modulo di contatto o forniti tramite email diretta.</li>
              <li><strong>Cookie:</strong> Piccoli file di testo utilizzati per migliorare l'esperienza di navigazione (sessione tecnica).</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Finalità del Trattamento</h2>
            <p>I dati raccolti vengono utilizzati per:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500 mt-2">
              <li>Rispondere alle richieste di contatto o preventivo inviate tramite il sito.</li>
              <li>Gestire l'accesso all'Area Riservata per i condomini amministrati.</li>
              <li>Adempiere agli obblighi di legge e fiscali legati all'attività di amministrazione condominiale.</li>
              <li>Garantire la sicurezza e il corretto funzionamento del sito web.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Modalità e Luogo del Trattamento</h2>
            <p>
              Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e logiche strettamente correlate alle finalità indicate.
              Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati categorie di incaricati coinvolti nell’organizzazione del sito (personale amministrativo, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, hosting provider).
            </p>
          </section>

          <hr className="border-slate-100" />

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Diritti dell'Utente</h2>
            <p className="mb-2">Gli utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              <li>Revocare il consenso in ogni momento.</li>
              <li>Opporsi al trattamento dei propri Dati.</li>
              <li>Accedere ai propri Dati.</li>
              <li>Verificare e chiedere la rettificazione.</li>
              <li>Ottenere la cancellazione o la rimozione dei propri Dati.</li>
            </ul>
          </section>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-8 flex items-start gap-4">
            <Lock className="text-slate-400 shrink-0 mt-1" />
            <p className="text-sm text-slate-500">
              Questo sito utilizza protocolli sicuri (HTTPS) per proteggere i tuoi dati durante la navigazione. Non cediamo i tuoi dati a terzi per fini di marketing.
            </p>
          </div>

        </div>
      </div>

      <Footer />
      <WeatherWidget />
      <ChatBot />
    </main>
  );
}