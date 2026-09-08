import { ShoppingBag, BowlFood, Bone, Drop, ShirtFolded } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const productos = [
  {
    icon: BowlFood,
    name: "Alimento premium",
    desc: "Piensos de alta calidad para perros y gatos, según edad y tamaño.",
    tag: "Perros y gatos",
  },
  {
    icon: Bone,
    name: "Snacks y premios",
    desc: "Golosinas naturales y saludables para consentir a tu mascota.",
    tag: "Snacks",
  },
  {
    icon: Drop,
    name: "Higiene y cuidado",
    desc: "Shampoos, cepillos y productos de aseo para una piel sana.",
    tag: "Higiene",
  },
  {
    icon: ShirtFolded,
    name: "Accesorios",
    desc: "Correas, camas, juguetes y complementos para su día a día.",
    tag: "Accesorios",
  },
];

export default function Tienda() {
  return (
    <section
      id="tienda"
      className="relative overflow-hidden bg-surface py-24"
    >
      <WaveDivider fill="#FFFFFF" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-primary-pale/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div>
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-deep">
                  <ShoppingBag size={16} aria-hidden="true" />
                  Nuestra tienda
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
                  Productos para su bienestar
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  Un catálogo cuidado de alimentos, higiene y accesorios para
                  que tu mascota tenga lo mejor, con asesoría de nuestro
                  equipo.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {productos.map(({ icon: Icon, name, desc, tag }, i) => (
                <Reveal key={name} delay={i * 80}>
                  <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft hover:shadow-xl hover:shadow-primary/5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-pale text-primary-dark transition-colors duration-300 group-hover:bg-primary-dark group-hover:text-white">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <span className="mt-5 inline-block w-fit rounded-full bg-primary-pale px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-deep">
                      {tag}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150} className="h-full">
            <div className="relative flex h-full flex-col gap-4 lg:mt-0 lg:[mask-image:linear-gradient(to_right,transparent,black_2.25rem)]">
              <img
                src="/imgs/pet it/tienda1.jpeg"
                alt="Interior de la tienda de la clínica"
                loading="lazy"
                className="min-h-[240px] w-full flex-1 rounded-3xl object-cover shadow-lg shadow-primary/5 sm:min-h-[320px]"
              />
              <img
                src="/imgs/pet it/tienda2.jpeg"
                alt="Vitrina de productos para mascotas"
                loading="lazy"
                className="min-h-[240px] w-full flex-1 rounded-3xl object-cover shadow-lg shadow-primary/5 sm:min-h-[320px]"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-surface to-transparent lg:block"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}