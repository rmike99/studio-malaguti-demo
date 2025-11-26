"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Building2, MapPin } from "lucide-react";
import { CondominioData } from "@/app/condomini/page";

// FIX PER LE ICONE DI DEFAULT
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// --- 1. ICONA NORMALE (Smeraldo) ---
const emeraldIconHtml = `
  <div style="
    background-color: #059669;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  ">
    <div style="transform: rotate(45deg); color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    </div>
  </div>
`;

const emeraldIcon = L.divIcon({
  className: "custom-emerald-marker",
  html: emeraldIconHtml,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [0, -35],
});

// --- 2. ICONA ATTIVA / HOVER (Blu Notte + Grande) ---
const activeIconHtml = `
  <div style="
    background-color: #0f172a; 
    width: 40px; 
    height: 40px; 
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg) scale(1.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #10b981;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  ">
    <div style="transform: rotate(45deg); color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    </div>
  </div>
`;

const activeIcon = L.divIcon({
  className: "custom-active-marker",
  html: activeIconHtml,
  iconSize: [40, 56], // Più grande
  iconAnchor: [20, 56],
  popupAnchor: [0, -45],
});

function MapReCenter({ markers }: { markers: CondominioData[] }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => m.coords));
      map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 16 });
    }
  }, [markers, map]);
  return null;
}

// --- Props aggiornate per ricevere hoveredId ---
export default function CondoMap({ 
  filteredCondomini, 
  hoveredId 
}: { 
  filteredCondomini: CondominioData[], 
  hoveredId: number | null 
}) {
  const milanoCenter: [number, number] = [45.4642, 9.1900];

  return (
    <div className="h-full w-full relative z-0">
        <MapContainer 
            center={milanoCenter} 
            zoom={13} 
            style={{ height: "100%", width: "100%", borderRadius: "1.5rem" }}
        >
        <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MapReCenter markers={filteredCondomini} />
        
        {filteredCondomini.map((condominio) => {
            // Controlliamo se questo marker è quello evidenziato
            const isActive = condominio.id === hoveredId;

            return (
              <Marker 
                key={condominio.id} 
                position={condominio.coords} 
                // Se è attivo usa l'icona Blu Grande, altrimenti quella Smeraldo
                icon={isActive ? activeIcon : emeraldIcon}
                // Se è attivo, portalo sopra tutti gli altri (z-index alto)
                zIndexOffset={isActive ? 1000 : 0}
              >
                <Popup className="custom-popup">
                    <div className="p-1 font-sans">
                    <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-sm uppercase">
                        <Building2 size={14}/> {condominio.tipo}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{condominio.indirizzo}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                        <MapPin size={12}/> {condominio.zona} • {condominio.unita} Unità
                    </div>
                    </div>
                </Popup>
              </Marker>
            )
        })}
        </MapContainer>
    </div>
  );
}