"use client";

import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  Syringe,
  TestTube,
  Camera,
  Bathtub,
  Cpu,
  X,
  Check,
  ArrowRight,
  WhatsappLogo,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

export const WHATSAPP = "51979635803";

const ICONS = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  testtube: TestTube,
  camera: Camera,
  bathtub: Bathtub,
  cpu: Cpu,
};

function ServiceCard({ servicio, onOpen }) {
  const Icon = ICONS[servicio.icon];
  return (
    <button
      type="button"
      onClick={() => onOpen(servicio)}
      aria-label={`Ver detalle de ${servicio.title}`}
      className="group relative flex w-full flex-1 overflow-hidden rounded-3xl text-left shadow-lg shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <img
        src={servicio.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/40 to-night/5 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative flex min-h-full flex-col justify-end p-7 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
          <Icon size={26} aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
          {servicio.title}
        </h3>
        <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-primary-deep">
          Ver detalle
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

function ModalIcon({ icon, size = 26 }) {
  const Icon = ICONS[icon];
  return <Icon size={size} aria-hidden="true" />;
}

export default function ServiceSection({
  services,
  cols = 2,
  showHeading = true,
  headingIcon,
  headingTitle,
}) {
  const [active, setActive] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const HeadingIcon = ICONS[headingIcon];

  useEffect(() => {
    if (!active) return;
    lastFocused.current = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    };
  }, [active]);

  useEffect(() => {
    setModalImageIndex(0);
  }, [active]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const currentModalImage = active?.modalImages?.[modalImageIndex] ?? active?.image;

  const goToPrevImage = (e) => {
    e.stopPropagation();
    if (active?.modalImages && modalImageIndex > 0) {
      setModalImageIndex((i) => i - 1);
    }
  };

  const goToNextImage = (e) => {
    e.stopPropagation();
    if (active?.modalImages && modalImageIndex < active.modalImages.length - 1) {
      setModalImageIndex((i) => i + 1);
    }
  };

  return (
    <div>
      {showHeading && (
        <Reveal>
          <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-ink sm:text-2xl">
            <span className="inline-flex items-center gap-2">
              <HeadingIcon size={22} className="text-primary-dark" aria-hidden="true" />
              {headingTitle}
            </span>
          </h3>
        </Reveal>
      )}

      <div
        className={`mt-6 grid grid-cols-1 gap-6 lg:gap-8 ${
          cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        }`}
      >
        {services.map((servicio, i) => (
          <Reveal key={servicio.title} delay={i * 100} className="h-full">
            <div className="flex min-h-[400px] flex-col sm:min-h-[440px]">
              <ServiceCard servicio={servicio} onOpen={setActive} />
            </div>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="servicio-modal-title"
          aria-describedby="servicio-modal-desc"
        >
          <div
            className="absolute inset-0 bg-night/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto overflow-x-hidden rounded-3xl bg-paper shadow-2xl shadow-night/40">
            <div className="relative">
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={currentModalImage}
                  alt={`${active.title} - imagen ${modalImageIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{ opacity: 1 }}
                />
                {active.modalImages && active.modalImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPrevImage}
                      disabled={modalImageIndex === 0}
                      aria-label="Imagen anterior"
                      className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-night/40 text-white backdrop-blur-md transition-colors duration-200 hover:bg-night/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <CaretLeft size={24} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextImage}
                      disabled={modalImageIndex === active.modalImages.length - 1}
                      aria-label="Imagen siguiente"
                      className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-night/40 text-white backdrop-blur-md transition-colors duration-200 hover:bg-night/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <CaretRight size={24} aria-hidden="true" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {active.modalImages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setModalImageIndex(i)}
                          aria-label={`Ver imagen ${i + 1}`}
                          aria-current={i === modalImageIndex ? "true" : "false"}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            i === modalImageIndex
                              ? "bg-white w-6"
                              : "bg-white/50 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Cerrar detalle"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-night/40 text-white backdrop-blur-md transition-colors duration-200 hover:bg-night/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-pale text-primary-dark">
                <ModalIcon icon={active.icon} size={26} />
              </div>
              <h3
                id="servicio-modal-title"
                className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-ink sm:text-3xl"
              >
                {active.title}
              </h3>
              <p id="servicio-modal-desc" className="mt-4 leading-relaxed text-ink-muted">
                {active.desc}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-pale text-primary-dark">
                      <Check size={12} weight="bold" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(active.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#1DA851] hover:shadow-xl sm:w-auto"
              >
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}