"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-primary-night/20 bg-primary/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-primary-night/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/imgs/pet it/logo2.png"
            alt="Mascota"
            className="h-18 w-auto"
          />
          <img
            src="/imgs/pet it/logo.png"
            alt="Logo de la veterinaria"
            className="h-15 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-12 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-ink transition-colors duration-200 hover:text-primary-night"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#ubicacion"
            className="rounded-full bg-white px-8 py-4 text-xl font-semibold text-primary-deep shadow-md shadow-primary-night/20 transition-all duration-200 hover:bg-primary-paler"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-md p-3 text-ink transition-colors hover:text-primary-night lg:hidden"
        >
          {open ? (
            <X size={40} aria-hidden="true" />
          ) : (
            <List size={40} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-night/20 bg-primary/95 backdrop-blur-md lg:hidden">
          <nav
            className="flex flex-col gap-1.5 px-5 py-6"
            aria-label="Menú móvil"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-5 text-2xl font-medium text-ink transition-colors hover:bg-white/30 hover:text-primary-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ubicacion"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-8 py-4 text-center text-2xl font-semibold text-primary-deep transition-colors hover:bg-primary-paler"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}