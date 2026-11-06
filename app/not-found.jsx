import Link from "next/link";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/ssr";

export const metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-paper via-surface to-primary-pale px-4 py-24">
      <div className="w-full max-w-xl rounded-3xl border border-line bg-paper p-10 text-center shadow-lg shadow-primary/5">
        <p className="font-heading text-7xl font-bold tracking-wide text-primary-deep">
          404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide text-ink">
          Esta página se fue de paseo
        </h1>
        <p className="mt-4 leading-relaxed text-ink-muted">
          No encontramos la página que buscas. Vuelve al inicio para conocer
          nuestros servicios veterinarios en Chiclayo.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-night"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Volver al inicio
          </Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=-6.7693847,-79.8598273"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-soft px-6 py-3 font-semibold text-primary-deep transition-colors hover:bg-primary-paler"
          >
            <MapPin size={18} aria-hidden="true" />
            Ver ubicación
          </a>
        </div>
      </div>
    </main>
  );
}
