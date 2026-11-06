import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_DESCRIPTION,
  BUSINESS,
} from "@/lib/site";

const OG_TITLE = "Veterinaria Pet It | Clínica veterinaria en Chiclayo";
const OG_DESCRIPTION =
  "Consultas desde S/ 20, cirugías, laboratorio, rayos X digital, baños a domicilio y pet shop. Av. Salaverry 1496, Chiclayo.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "veterinaria Chiclayo",
    "clínica veterinaria Chiclayo",
    "veterinaria Pet It",
    "consulta veterinaria Chiclayo",
    "baños a domicilio mascotas Chiclayo",
    "cirugía veterinaria Chiclayo",
    "laboratorio veterinario Chiclayo",
    "rayos X veterinario Chiclayo",
    "ecografía veterinaria Chiclayo",
    "pet shop Chiclayo",
    "veterinaria Av. Salaverry 1496",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Veterinary Clinic",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veterinaria Pet It en Chiclayo: consultas desde S/ 20 y baños a domicilio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/imgs/pet%20it/logo.png", type: "image/png", sizes: "1597x656" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Pet It",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "geo.region": "PE-LAM",
    "geo.placename": "Chiclayo, Lambayeque, Perú",
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
    "business:contact_data:street_address": BUSINESS.address.streetAddress,
    "business:contact_data:locality": BUSINESS.address.addressLocality,
    "business:contact_data:region": BUSINESS.address.addressRegion,
    "business:contact_data:postal_code": BUSINESS.address.postalCode,
    "business:contact_data:country_name": "Perú",
    "business:contact_data:phone_number": BUSINESS.telephone,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0369A1",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-PE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
