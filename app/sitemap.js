import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/imgs/pet%20it/portada1.jpeg`,
        `${SITE_URL}/imgs/pet%20it/atencion2.jpeg`,
        `${SITE_URL}/imgs/pet%20it/cirugia.jpeg`,
        `${SITE_URL}/imgs/pet%20it/laboratorio1.jpeg`,
        `${SITE_URL}/imgs/pet%20it/tienda1.jpeg`,
      ],
    },
  ];
}
