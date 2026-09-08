import { Heart, Users, HandHeart, Crosshair, Eye, Handshake } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const pilares = [
  {
    icon: Crosshair,
    title: "Misión",
    desc: "Atención veterinaria integral con trato cálido y cercano, cuidando la salud y el bienestar de cada mascota en un ambiente limpio, luminoso y confiable.",
  },
  {
    icon: Eye,
    title: "Visión",
    desc: "Ser la clínica veterinaria de confianza de nuestra comunidad, reconocida por su profesionalismo, tecnología y vocación de servicio.",
  },
  {
    icon: Handshake,
    title: "Valores",
    desc: "Amor por los animales, responsabilidad, honestidad y trabajo en equipo guían cada decisión y cada atención que brindamos.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative bg-paper py-24">
      <WaveDivider fill="#FFFFFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-soft via-paper to-primary-pale p-10 shadow-lg shadow-primary/5">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-light/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start gap-4">
                <img
                  src="/imgs/pet it/logo.png"
                  alt="Logo de la veterinaria"
                  className="h-16 w-auto object-contain"
                />
                <p className="text-sm text-ink-muted">
                  Un cuidado claro y cristalino
                </p>
              </div>
              <p className="relative mt-6 leading-relaxed text-ink-muted">
                Somos un equipo de veterinarios y cuidadores que ve a cada
                mascota como parte de la familia. Combinamos tecnología,
                experiencia y mucha vocación para brindar atención de salud y
                bienestar en un ambiente limpio, luminoso y confiable.
              </p>
              <div className="relative mt-6 flex flex-wrap gap-4">
                {[
                  { icon: Heart, text: "Amor por los animales" },
                  { icon: Users, text: "Equipo especializado" },
                  { icon: HandHeart, text: "Atención humana" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary-deep backdrop-blur-sm"
                  >
                    <Icon size={18} aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
                Nosotros
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
                Más que una clínica, una familia
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Somos un equipo que combina experiencia y tecnología con un
                trato humano, para acompañar a cada familia desde el primer
                día.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {pilares.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-soft p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-pale text-primary-dark">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}