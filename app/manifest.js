import { SITE_DESCRIPTION } from "@/lib/site";

export default function manifest() {
  return {
    name: "Veterinaria Pet It — Clínica veterinaria en Chiclayo",
    short_name: "Pet It",
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0369A1",
    lang: "es-PE",
    dir: "ltr",
    categories: ["medical", "health", "pets"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
