import { Stethoscope, ArrowRight, Sparkle } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";

const facts = [{ icon: Stethoscope, label: "+10 años de experiencia" }];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <HeroBackground />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/95 lg:via-white/65 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-transparent to-white/30 sm:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-soft bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-deep backdrop-blur-sm">
              <Sparkle size={16} className="text-accent" weight="fill" aria-hidden="true" />
              Clínica veterinaria · Tienda
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-wide text-ink sm:text-6xl lg:text-7xl">
              Cuidamos a tu mascota{" "}
              <span className="bg-gradient-to-r from-primary-deep via-primary to-accent bg-clip-text text-transparent">
                como si fuera nuestra
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Clínica veterinaria integral con atención experta y un trato
              cercano, en un ambiente limpio y luminoso.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-night"
              >
                Nuestros servicios
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-6">
              {facts.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <Icon size={20} className="text-primary-dark" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}