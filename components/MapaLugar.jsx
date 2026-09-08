"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [-6.7693847, -79.8598273];

const customIcon = L.divIcon({
  className: "",
  html: `<div style="width:36px;height:36px;background:#0369A1;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(3,105,161,0.35);">
    <svg width="20" height="20" viewBox="0 0 256 256" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M128,224c-8,0-16-3-22-9-12-12-42-46-50-62a52,52,0,0,1,72-72,52,52,0,0,1,72,72c-8,16-38,50-50,62A31,31,0,0,1,128,224Z" opacity="0.2"/>
      <path d="M128,16A88,88,0,0,0,56,152c5,16,16,30,24,36a48,48,0,0,0,56,0c8-6,19-20,24-36A88,88,0,0,0,128,16Zm0,176a32,32,0,0,1-37-24,40,40,0,0,1-3-8l16-11a8,8,0,0,0,3.2-8.3,42,42,0,0,1,42-53,40,40,0,0,1,13,49.4,8,8,0,0,0,2.8,8.9l18,13A32,32,0,0,1,128,192Zm52-65.4-.5,1.6A41.3,41.3,0,0,0,142.5,89,58,58,0,0,0,180,126.6Z"/>
    </svg>
  </div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
});

export default function MapaLugar() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Veterinaria Pet It — Av. Salaverry 1496</Popup>
      </Marker>
    </MapContainer>
  );
}
