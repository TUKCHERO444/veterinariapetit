import {
  Phone,
  WhatsappLogo,
  MapPin,
} from "@phosphor-icons/react/ssr";

const servicios = [
  "Consultas",
  "Vacunación",
  "Urgencias",
  "Análisis",
  "Cirugía",
  "Peluquería",
];

const enlaces = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deep pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <a href="#inicio" className="inline-flex items-center">
            <img
              src="/imgs/pet it/logo.png"
              alt="Logo de la veterinaria"
              className="h-12 w-auto"
            />
          </a>
          <p className="mt-4 max-w-md leading-relaxed text-white/85">
            Clínica veterinaria y tienda para el bienestar de tu
            mascota. Un cuidado claro y cristalino.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/51979635803" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-all duration-200 hover:border-white hover:bg-white hover:text-primary-deep"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2">
            {servicios.map((s) => (
              <li key={s}>
                <a
                  href="#servicios"
                  className="text-sm text-white/85 transition-colors hover:text-primary-paler"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              { icon: MapPin, text: "Av. Salaverry 1496, Chiclayo 14009" },
              { icon: Phone, text: "(074) 221172" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2 text-sm text-white/85">
                <Icon size={18} className="mt-0.5 shrink-0 text-primary-paler" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {enlaces.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/85 transition-colors hover:border-white hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/85">
            © {new Date().getFullYear()} Veterinaria Pet It. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/85">
            Hecho con cariño para las mascotas.
          </p>
        </div>
      </div>
    </footer>
  );
}