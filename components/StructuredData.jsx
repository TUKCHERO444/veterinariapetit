import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  BUSINESS,
  SERVICES,
} from "@/lib/site";

const toUrl = (path) => `${SITE_URL}${encodeURI(path)}`;

const businessId = `${SITE_URL}/#veterinarycare`;
const websiteId = `${SITE_URL}/#website`;
const webpageId = `${SITE_URL}/#webpage`;

const openingHours = BUSINESS.openingHoursSpecification.map((slot) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: slot.days,
  opens: slot.opens,
  closes: slot.closes,
}));

const offers = SERVICES.map((service) => {
  const offer = {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      serviceType: service.serviceType,
      provider: { "@id": businessId },
      areaServed: {
        "@type": "City",
        name: "Chiclayo",
      },
    },
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#servicios`,
  };

  if (service.price) {
    offer.price = service.price;
    offer.priceCurrency = "PEN";
    offer.priceSpecification = {
      "@type": "PriceSpecification",
      price: service.price,
      priceCurrency: "PEN",
      valueAddedTaxIncluded: true,
    };
  }

  return offer;
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["VeterinaryCare", "LocalBusiness"],
      "@id": businessId,
      name: BUSINESS.name,
      alternateName: BUSINESS.alternateName,
      legalName: BUSINESS.legalName,
      slogan: BUSINESS.slogan,
      description: BUSINESS.description,
      url: SITE_URL,
      logo: toUrl("/imgs/pet it/logo.png"),
      image: BUSINESS.images.map(toUrl),
      telephone: BUSINESS.telephone,
      foundingDate: BUSINESS.foundingDate,
      priceRange: BUSINESS.priceRange,
      currenciesAccepted: BUSINESS.currenciesAccepted,
      paymentAccepted: BUSINESS.paymentAccepted,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.streetAddress,
        addressLocality: BUSINESS.address.addressLocality,
        addressRegion: BUSINESS.address.addressRegion,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      hasMap: BUSINESS.hasMap,
      areaServed: [
        {
          "@type": "City",
          name: "Chiclayo",
        },
        {
          "@type": "AdministrativeArea",
          name: "Lambayeque",
        },
      ],
      openingHoursSpecification: openingHours,
      contactPoint: BUSINESS.telephones.map((telephone, index) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        areaServed: "PE",
        availableLanguage: ["Spanish"],
        name: index === 0 ? "WhatsApp / móvil" : "Teléfono",
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios veterinarios en Chiclayo",
        itemListElement: offers,
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es-PE",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE_URL,
      name: "Veterinaria Pet It | Clínica veterinaria en Chiclayo",
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "es-PE",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: toUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
      },
    },
  ],
};

export default function StructuredData() {
  const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
