import { Stethoscope } from "@phosphor-icons/react/ssr";
import ServiceSection from "@/components/ServiceSection";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const serviciosMedicos = [
  {
    icon: "stethoscope",
    title: "Atención de mascotas",
    desc: "Consultas generales, chequeos preventivos y atención clínica para el bienestar integral de tu mascota. Diagnóstico claro, cuidado al día y seguimiento cercano en cada etapa de su vida.",
    features: [
      "Consultas y chequeos preventivos",
      "Vacunación y desparasitación",
      "Atención de urgencias",
      "Seguimiento y recetas claras",
    ],
    image: "/imgs/pet it/atencion2.jpeg",
    whatsapp: "Hola, quisiera información sobre el servicio de Atención de mascotas.",
  },
  {
    icon: "syringe",
    title: "Cirugías",
    desc: "Procedimientos quirúrgicos seguros con equipos modernos, anestesia monitoreada y un cuidado postoperatorio que acompaña la recuperación de tu mascota en cada momento.",
    features: [
      "Cirugías de tejidos blandos y esterilizaciones",
      "Cirugías de traumatología",
      "Anestesia inalatoria",
      "Anestesia y monitoreo continuo",
      "Hospitalización y recuperación guiada",
      "Seguimiento postoperatorio",
    ],
    image: "/imgs/pet it/cirugia.jpeg",
    modalImages: [
      "/imgs/pet it/cirugia4.jpeg",
      "/imgs/pet it/cirugia.jpeg",
    ],
    whatsapp: "Hola, quisiera información sobre el servicio de Cirugías.",
  },
  {
    icon: "bathtub",
    title: "Lavado de mascotas",
    desc: "Baños y estética con productos de uso veterinario, agua tibia y un manejo tranquilo y respetuoso para que tu mascota salga limpia, fresca y feliz.",
    features: [
      "Baño medicado e higiene completa",
      "Secado y peinado profesional",
      "Corte de uñas y limpieza de oídos",
      "Productos hipoalergénicos",
    ],
    image: "/imgs/pet it/lavado.jpeg",
    whatsapp: "Hola, quisiera información sobre el servicio de Lavado de mascotas.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-surface py-24">
      <WaveDivider fill="#FFFFFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-deep">
            <Stethoscope size={16} aria-hidden="true" />
            Servicios
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Atención veterinaria integral
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Todo lo que tu mascota necesita, en un solo lugar y con el cariño
            que merece. Estas son las áreas en las que cuidamos su salud.
          </p>
        </Reveal>

        <div className="mt-14">
          <ServiceSection
            services={serviciosMedicos}
            cols={3}
            headingIcon="stethoscope"
            headingTitle="Servicios médicos"
          />
        </div>
      </div>
    </section>
  );
}