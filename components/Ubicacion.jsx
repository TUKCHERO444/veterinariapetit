import { MapPin, Clock, Phone, WhatsappLogo } from "@phosphor-icons/react/ssr";
import Mapa from "@/components/Mapa";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const contact = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Salaverry 1496, Chiclayo 14009",
    href: "https://www.google.com/maps/dir/?api=1&destination=Av.%20Salaverry%201496%2C%20Chiclayo%2014009",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(074) 221172",
    href: "tel:+5174221172",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "+51 979 635 803",
    href: "https://wa.me/51979635803",
  },
];

const horarios = [
  { day: "Lunes a sábado", manana: "9:00 a.m. – 2:00 p.m.", tarde: "4:00 – 7:00 p.m." },
  { day: "Domingos", manana: "10:00 a.m. – 1:00 p.m.", tarde: "—" },
];

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-surface-soft to-primary-pale py-24"
    >
      <WaveDivider fill="#F8FBFF" />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[380px] w-[380px] rounded-full bg-accent-soft/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-deep">
            Ubicación y contacto
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Visítanos o escríbenos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Estamos cerca de ti. Agenda tu cita o resuelve cualquier duda.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-line bg-paper p-2 shadow-lg shadow-primary/5 lg:p-3">
              <div className="h-[320px] overflow-hidden rounded-xl lg:h-auto lg:flex-1">
                <Mapa />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={100}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contact.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-soft hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-pale text-primary-dark transition-colors group-hover:bg-primary-deep group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock size={22} className="text-primary-dark" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                    Horarios
                  </h3>
                </div>
                <table className="mt-4 w-full text-sm">
                  <thead>
                    <tr className="border-b border-line">
                      <th
                        scope="col"
                        className="py-2 text-left font-medium uppercase tracking-wide text-ink-muted"
                      >
                        Día
                      </th>
                      <th
                        scope="col"
                        className="py-2 pr-3 text-right font-medium uppercase tracking-wide text-ink-muted"
                      >
                        Mañana
                      </th>
                      <th
                        scope="col"
                        className="py-2 text-right font-medium uppercase tracking-wide text-ink-muted"
                      >
                        Tarde
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {horarios.map((h) => (
                      <tr
                        key={h.day}
                        className="border-b border-line last:border-0"
                      >
                        <td className="py-3 text-ink-muted">{h.day}</td>
                        <td className="py-3 pr-3 text-right font-medium text-ink">
                          {h.manana}
                        </td>
                        <td className="py-3 text-right font-medium text-ink">
                          {h.tarde}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}