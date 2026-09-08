# Arquitectura — Plantilla Reutilizable de Landing Page para Clínica Veterinaria

Documento de referencia de esta página como **plantilla reutilizable** para clínicas veterinarias. SPA con SSR: Next.js (App Router) + React 19 + Tailwind v4, **JSX plano (sin TypeScript)**.

> **Contexto**: el contenido actual de la página corresponde a la clínica real **"Veterinaria Pet It"** (Av. Salaverry 1496, Chiclayo 14009), con assets en `public/imgs/pet it/` (logo.png, portadas, fotos de atención). La página sigue documentada como plantilla reutilizable: para personalizarla a otra veterinaria, revisa `AGENTS.md` → sección "PLANTILLA" con el checklist completo de puntos a actualizar.

---

## 1. Stack

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| UI | React | 19.x |
| Estilos | Tailwind CSS (v4, `@theme`) | 4.x |
| Lenguaje | JSX plano (sin TypeScript) | — |
| Rendering | Server Components por defecto | — |
| Mapas | Leaflet + react-leaflet | 5.x |
| Iconos | @phosphor-icons/react | 2.x |

### Por qué este stack

- **Server Components por defecto**: reduce el bundle JS, mejora SEO y carga inicial. Solo se usa `"use client"` cuando hay interactividad (estado, efectos, eventos).
- **Tailwind v4 con `@theme`**: design tokens como CSS custom properties, sin `tailwind.config.js`. Más limpio, más mantenible.
- **JSX sin TypeScript**: velocidad de desarrollo para landing pages donde no hay lógica compleja de tipos.
- Es un **template**: la estructura se reutiliza para varias clínicas; el contenido (textos, marca, contactos, imágenes) se reemplaza sección por sección.

---

## 2. Estructura de Directorios

```
project/
├── app/
│   ├── layout.jsx        # Root layout (server). Fonts, metadata, HTML global.
│   ├── page.jsx          # Home page (server). Compone las secciones.
│   └── globals.css       # Tailwind v4 + @theme + animaciones custom.
├── components/
│   ├── Header.jsx        # "use client" — nav fija, scroll effect, menú móvil
│   ├── Hero.jsx          # "use client" — texto por slides (textSlides) + CTA
│   ├── HeroBackground.jsx# "use client" — crossfade de fondo (`/hero/slide-*.jpg`)
│   ├── Servicios.jsx     # Server — servicios médicos (2 cards grandes)
│   ├── Analisis.jsx      # Server — análisis y laboratorio (2 cards)
│   ├── ServiceSection.jsx# "use client" — cards con modal reutilizable (Servicios/Analisis)
│   ├── Nosotros.jsx      # Server — marca + misión/visión/valores
│   ├── Tienda.jsx        # Server — grid de productos
│   ├── Ubicacion.jsx     # Server — contacto + horarios + wrapper de mapa
│   ├── Mapa.jsx          # "use client" — dynamic import de MapaLugar (ssr: false)
│   ├── MapaLugar.jsx     # "use client" — mapa Leaflet
│   ├── Footer.jsx        # Server — links, contacto, redes
│   ├── WhatsAppButton.jsx# "use client" — flotante, aparece al hacer scroll
│   ├── Reveal.jsx        # "use client" — animación scroll (IntersectionObserver)
│   └── WaveDivider.jsx   # Server — divisor de ola entre secciones (`fill` = color sección previa)
├── public/
│   ├── imgs/             # servicos/, pet it/ (assets reales del negocio)
│   ├── hero/             # slide-1.jpg … slide-3.jpg (crossfade del hero)
│   └── favicon.svg
├── jsconfig.json         # Path alias @/* → ./*
├── next.config.mjs       # Config Next.js (vacío)
├── postcss.config.mjs    # PostCSS para Tailwind v4
└── package.json
```

**Orden de secciones en `app/page.jsx`** (referencia fija de la plantilla):

```
Header → main(Servicios, Analisis, Nosotros, Tienda, Ubicacion) → Footer
+ WhatsAppButton flotante
```

---

## 3. Convenciones de Componentes

### 3.1 Server Components (por defecto)

Todo componente es server component a menos que necesite:

- `useState`, `useEffect`, `useCallback`
- Event handlers (`onClick`, `onScroll`, etc.)
- APIs del navegador (`window`, `document`)

**Ejemplo** — `components/Servicios.jsx` no lleva `"use client"`:

```jsx
const servicios = [
  { icon: Stethoscope, title: "Consultas", desc: "...", image: "/imgs/servicios/consultas.jpg" },
]
export default function Servicios() { /* JSX con datos estáticos */ }
```

**Actuales server components**: `Hero`, `Servicios`, `Nosotros`, `Tienda`, `Ubicacion`, `Footer`, `WaveDivider`.

### 3.2 Client Components

Solo los que necesitan interactividad. Sempre al inicio del archivo: `"use client"`.

**Actuales client components**: `Header`, `Hero`, `HeroBackground`, `Reveal`, `Mapa`, `MapaLugar`, `WhatsAppButton`.

**Regla**: si un componente server necesita renderizar un client component, lo importa directamente. No se anidan `"use client"` innecesariamente. En client components, los iconos se importan de `@phosphor-icons/react` (la entrada normal); en server components, de `@phosphor-icons/react/ssr`.

### 3.3 Componentes auxiliares del template

- **`Reveal`** (`Reveal.jsx`, client): envuelve bloques/cards para animación al hacer scroll. Acepta `delay` (ms) y `as` (tag). Respeta `prefers-reduced-motion` y cae bien sin IntersectionObserver. Se usa en casi todas las secciones.
- **`WaveDivider`** (`WaveDivider.jsx`, server): SVG de ola en el borde superior de la sección. `fill` debe ser el color de fondo de la sección ANTERIOR (ver valores en cada sección: `#FFFFFF`, `#F8FBFF`, `#CFFAFE`…).

### 3.4 Dynamic Imports

Para client components pesados (mapas), usar `next/dynamic` con `ssr: false`:

```jsx
// components/Mapa.jsx
const MapaLugar = dynamic(() => import("@/components/MapaLugar"), {
  ssr: false,
  loading: () => <div>Cargando mapa…</div>,
})
```

**Cuándo usar dynamic:**
- Componentes con dependencias pesadas (Leaflet, Chart.js, etc.)
- Componentes que usan APIs del navegador y no deben ejecutarse en SSR
- Para reducir el bundle de la página inicial

---

## 4. Sistema de Estilos (Tailwind v4)

### 4.1 Design Tokens

Definidos en `app/globals.css` con la directiva `@theme`. **Paleta celeste/cian/blanco** para clínica veteriaria:

```css
@theme {
  --color-primary: #0EA5E9;        /* celeste — marca, salud/clínica */
  --color-primary-deep: #0369A1;   /* CTAs con texto blanco (AA) */
  --color-primary-night: #075985;  /* hover/pressed de CTAs */
  --color-accent: #06B6D4;         /* cian — acento secundario */
  --color-accent-dark: #0E7490;    /* CTA secundario con texto blanco */
  --color-ink: #0F172A;            /* texto principal */
  --color-ink-muted: #475569;      /* texto secundario */
  --color-paper: #FFFFFF;          /* fondo base */
  --color-surface: #F8FBFF;        /* secciones/cards alternas */
  --color-night: #082F49;          /* footer/banda profunda */
  --font-heading: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

> La **fuente de verdad de la identidad visual es `design.md`** (nombre, paleta completa con ratios WCAG, tipografía, logo, tono). Los tokens `@theme` la reflejan: **cualquier cambio de identidad actualiza `design.md` Y `globals.css` juntos**. Reglas clave: los CTAs usan `*-deep`/`*-night` (nunca texto blanco sobre celeste base, no alcanza AA).

**Uso en Tailwind**: `bg-primary`, `text-ink-muted`, `border-accent-pale`, `font-heading`.

### 4.2 Fuentes

Cargadas via Google Fonts `<link>` en `layout.jsx` (no `next/font`):

```jsx
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

- **Oswald** (`font-heading`): títulos, headings, números grandes — `uppercase` + `tracking-wide`.
- **Inter** (`font-body`): cuerpo de texto, descripciones.

### 4.3 Base Global

```css
@layer base {
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
  body { font-family: var(--font-body); background: var(--color-paper); color: var(--color-ink); }
}
```

Además, en `globals.css` viven animaciones custom (`--animate-fade-up`, `--animate-float`) y el bloque `prefers-reduced-motion` global.

---

## 5. Patrones de Layout

### 5.1 Root Layout (`app/layout.jsx`)

Server component que envuelve toda la app:

- Cargar fuentes globales
- Definir `<html lang="es">`
- Exportar `metadata` (SEO — según veterinaria, p. ej. "Veterinaria Pet It")

### 5.2 Page Composition (`app/page.jsx`)

Server component que ensambla todas las secciones. Patrón:

```jsx
import Header from "@/components/Header"
import Servicios from "@/components/Servicios"
// ...

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Servicios />
        <Analisis />
        <Nosotros />
        <Tienda />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
```

### 5.3 Path Alias

Configurado en `jsconfig.json` → `@/*` = raíz del proyecto:

```json
{ "compilerOptions": { "paths": { "@/*": ["./*"] } } }
```

Uso: `@/components/Header`. **No crear `tsconfig.json` ni `next-env.d.ts`** (proyecto sin TypeScript a propósito).

---

## 6. Patrones de Interactividad

### 6.1 Header con Scroll Effect + menú móvil (`Header.jsx`)

```jsx
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener("scroll", onScroll, { passive: true })
  return () => window.removeEventListener("scroll", onScroll)
}, [])
```

`scrolled` controla la sombra/estado del header fijo; `open` alterna el menú móvil y bloquea el scroll de `body`.

### 6.2 Hero estático (`Hero.jsx`) + HeroBackground (`HeroBackground.jsx`)

- **Hero**: server component. Título estático con CTA a servicios.
- **HeroBackground**: crossfade de `/hero/slide-*.jpg` con `setInterval`. Respeta `prefers-reduced-motion`.
- El texto del hero es **dato del negocio: hay que reescribirlo al personalizar**.

### 6.3 Mapa Leaflet (`MapaLugar.jsx`)

Inyectado desde `Ubicacion.jsx` vía `Mapa.jsx` con `next/dynamic` + `ssr: false`. Los datos de **contacto, horarios, WhatsApp y coordenadas son del negocio placeholder — hay que actualizarlos al personalizar**.

### 6.5 WhatsApp flotante (`WhatsAppButton.jsx`)

Aparece tras `scrollY > 300`. El `href` de WhatsApp es **dato del negocio — actualizar al personalizar**.

---

## 7. Responsive Design

| Prefix | Min-width | Uso típico |
|--------|-----------|------------|
| (none) | 0px | Mobile first |
| `sm:` | 640px | Mobile landscape |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Desktop grande |

**Patrones comunes:**
- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Menu móvil: `<button className="lg:hidden">` + `<nav className="hidden lg:flex">`

---

## 8. Accesibilidad

- `aria-label` en botones y enlaces iconográficos (redes, menú, WhatsApp)
- `aria-expanded` en toggle de menú mobile
- `role="tablist"` + `aria-selected` en indicadores del hero
- `aria-hidden` en elementos decorativos (fondos, gradientes, GIFs)
- Iconos decorativos con `aria-hidden="true"` (nunca sin texto de apoyo si son significativos)
- Paleta con contraste WCAG AA/AAA verificada en `design.md`
- Tecla Escape / `role="dialog"` aplica solo si se agregan modales (patrón en docs antiguos)

---

## 9. Performance

| Patrón | Beneficio |
|--------|-----------|
| Server Components por defecto | Menor bundle JS, SSR nativo |
| `next/dynamic` con `ssr: false` | Code splitting de Leaflet |
| `loading` en dynamic imports | UI de carga durante hidratación |
| Imágenes con `loading="lazy"` | Carga diferida fuera de viewport |
| `passive: true` en scroll listeners | No bloquea scroll |
| Animaciones solo al entrar en viewport (`Reveal`) | Menos trabajo en paint |

---

## 10. Checklist para Personalizar la Plantilla (nueva veterinaria)

> Paso 0: `npm install` y `npm run dev` para inspeccionar la página actual.

- [ ] **Marca/logo** — `components/Header.jsx` (palabra "Pet It" + link) y `components/Footer.jsx`
- [ ] **SEO** — `metadata` en `app/layout.jsx` (title/description) y `docs/frase.txt` (copy base)
- [ ] **Identidad visual** — `design.md` (nombre, paleta, tono) + tokens `@theme` en `app/globals.css` SIEMPRE juntos
- [ ] **Contacto** — `components/Ubicacion.jsx` (dirección, teléfono, WhatsApp, email, horarios) y `components/WhatsAppButton.jsx` (href wa.me)
- [ ] **Redes** — `components/Footer.jsx` (links Instagram/Facebook/WhatsApp)
- [ ] **Textos de cada sección** — `Hero.jsx`, `Servicios.jsx`, `Nosotros.jsx`, `Tienda.jsx`, `Footer.jsx`
- [ ] **Imágenes** — reemplazar rutas relativas en cada componente (assets reales en `public/imgs/pet it/`: uso de logo.png/portadas/fotos de atención; slides en `public/hero/`)
- [ ] **Si el negocio no ofrece una sección** — quitar la importación en `app/page.jsx` y el link del header; ajustar `WaveDivider fill` de la sección siguiente
- [ ] Verificar con `npm run build` sin errores y confirmar `next` >= `15.5.7` (ver `docs/CVE-2025-55182-NETLIFY.md`) antes de desplegar

---

## 11. Comandos

```bash
npm run dev      # Desarrollo local (localhost:3000)
npm run build    # Build de producción (única verificación de calidad)
npm run start    # Servir build de producción
```

No hay tests, linter ni typecheck. `npm audit` muestra vulnerabilidades en `postcss` transitivo de Next 15 — no correr `npm audit fix --force`.

---

## 12. Notas de Migración / Adaptación

Este template desciende de una plantilla de gimnasio. Cuando al personalizar una sección quede "código muerto" (arrays de datos hardcodeados, componentes sin usar), retíralo del componente y de las importaciones de `app/page.jsx`. Al clonar el repo para una nueva clínica: actualizar `design.md`, `README.md`, `docs/frase.txt` y el `name` de `package.json` junto con el contenido de la página.