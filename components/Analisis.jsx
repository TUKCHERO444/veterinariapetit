import { TestTube } from "@phosphor-icons/react/ssr";
import ServiceSection from "@/components/ServiceSection";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const serviciosAnalisis = [
  {
    icon: "testtube",
    title: "Laboratorio de análisis",
    desc: "Análisis de laboratorio y estudios de gabinete para diagnósticos precisos, con resultados claros y explicados por nuestro equipo.",
    features: [
      "Hematología y bioquímica",
      "Exámenes parasitológicos",
      "Análisis de orina y coprológicos",
      "Resultados explicados paso a paso",
    ],
    image: "/imgs/pet it/laboratorio1.jpeg",
    whatsapp: "Hola, quisiera información sobre el Laboratorio de análisis.",
  },
  {
    icon: "camera",
    title: "Diagnóstico por imágenes",
    desc: "Radiografías y ecografías para complementar el diagnóstico con imágenes de alta calidad y lectura especializada.",
    features: [
      "Radiografía digital",
      "Ecografía abdominal",
      "Exografías",
      "Evaluación conjunta con el equipo clínico",
    ],
    image: "/imgs/pet it/digitalizador.jpeg",
    whatsapp: "Hola, quisiera información sobre el Diagnóstico por imágenes.",
  },
];

export default function Analisis() {
  return (
    <section id="analisis" className="relative bg-paper py-24">
      <WaveDivider fill="#F8FBFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-deep">
            <TestTube size={16} aria-hidden="true" />
            Análisis y laboratorio
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Diagnóstico preciso, con claridad
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Contamos con laboratorio e imágenes para llegar a diagnósticos
            certeros, explicados de forma clara y humana.
          </p>
        </Reveal>

        <div className="mt-14">
          <ServiceSection
            services={serviciosAnalisis}
            showHeading={false}
          />
        </div>
      </div>
    </section>
  );
}