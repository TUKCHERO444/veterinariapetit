export const SITE_URL = "https://veterinariapetitchiclayo.netlify.app";

export const SITE_NAME = "Veterinaria Pet It";

export const SITE_LOCALE = "es_PE";

export const SITE_DESCRIPTION =
  "Veterinaria en Chiclayo desde 2005: consultas desde S/ 20, cirugías, laboratorio, rayos X, baños a domicilio y pet shop. Av. Salaverry 1496.";

export const BUSINESS_DESCRIPTION =
  "Clínica veterinaria integral en Chiclayo, Lambayeque, con más de 20 años de experiencia. Ofrecemos consultas generales y de urgencias desde S/ 20, vacunación, desparasitación, cirugías, laboratorio de análisis, diagnóstico por imágenes, rayos X digital, baños y estética a domicilio, internamiento y tienda pet shop.";

export const BUSINESS = {
  name: SITE_NAME,
  alternateName: "Pet It Chiclayo",
  legalName: SITE_NAME,
  slogan: "Tu mascota, tu familia",
  description: BUSINESS_DESCRIPTION,
  foundingDate: "2005",
  telephone: "+51979635803",
  telephones: ["+51979635803", "+51924769484", "+5174221172"],
  whatsapp: "924769484",
  priceRange: "S/ 20+",
  currenciesAccepted: "PEN",
  paymentAccepted: "Efectivo, Yape, Plin y tarjetas",
  address: {
    streetAddress: "Av. Salaverry 1496, Urbanización Bancarios",
    addressLocality: "Chiclayo",
    addressRegion: "Lambayeque",
    postalCode: "14009",
    addressCountry: "PE",
  },
  geo: {
    latitude: -6.7693847,
    longitude: -79.8598273,
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=-6.7693847,-79.8598273",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Av.%20Salaverry%201496%2C%20Urbanizaci%C3%B3n%20Bancarios%2C%20Chiclayo",
  openingHoursSpecification: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "16:00",
      closes: "19:00",
    },
    {
      days: ["Sunday"],
      opens: "10:00",
      closes: "12:30",
    },
  ],
  images: [
    "/imgs/pet it/portada1.jpeg",
    "/imgs/pet it/atencion2.jpeg",
    "/imgs/pet it/cirugia.jpeg",
    "/imgs/pet it/laboratorio1.jpeg",
    "/imgs/pet it/tienda1.jpeg",
  ],
};

export const SERVICES = [
  {
    name: "Consulta veterinaria y urgencias",
    description:
      "Consultas generales, chequeos preventivos, vacunación, desparasitación y atención de urgencias para el bienestar integral de tu mascota.",
    serviceType: "Consulta veterinaria general",
    price: "20",
  },
  {
    name: "Cirugías veterinarias",
    description:
      "Cirugías de tejidos blandos, esterilizaciones y traumatología con anestesia monitoreada, hospitalización y seguimiento postoperatorio.",
    serviceType: "Cirugía veterinaria",
  },
  {
    name: "Baños y estética a domicilio",
    description:
      "Baño medicado, secado, peinado, corte de uñas y limpieza de oídos con productos de uso veterinario. Servicio con previa cita y a domicilio.",
    serviceType: "Baño y peluquería canina y felina",
  },
  {
    name: "Laboratorio de análisis",
    description:
      "Hematología, bioquímica, exámenes parasitológicos, análisis de orina y coprológicos con resultados explicados por el equipo veterinario.",
    serviceType: "Análisis clínico veterinario",
  },
  {
    name: "Diagnóstico por imágenes",
    description:
      "Radiografía digital, ecografía abdominal y exografías para complementar el diagnóstico con imágenes de alta calidad.",
    serviceType: "Diagnóstico por imágenes veterinario",
  },
  {
    name: "Rayos X digital",
    description:
      "Digitalización y procesamiento de radiografías, almacenamiento seguro en la nube (PACS) y acceso remoto para especialistas.",
    serviceType: "Radiología digital veterinaria",
  },
  {
    name: "Internamiento y hospitalización",
    description:
      "Servicio de internamiento con monitoreo y cuidado continuo durante la recuperación de tu mascota.",
    serviceType: "Hospitalización veterinaria",
  },
  {
    name: "Tienda pet shop",
    description:
      "Alimentos premium, snacks, productos de higiene y accesorios para perros y gatos, con asesoría del equipo de la clínica.",
    serviceType: "Tienda de productos para mascotas",
  },
];
