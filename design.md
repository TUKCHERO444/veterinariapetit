# Design — Identity Visual · Veterinaria Pet It

> Fuente de verdad de la identidad visual. Reflejada en los tokens de `app/globals.css` (`@theme`). Cualquier cambio de identidad debe actualizar este documento Y los tokens.

## Concepto

**"Un cuidado claro y cristalino."**

Veterinaria Pet It fusiona las dos caras del negocio en una sola imagen de **clínica moderna**: luz, aire, pulcritud y calma. No es oscura ni pesada — es un entorno *celeste pastel predominantemente blanco*, con degradados cristalinos que evocan vidrio limpio, agua fresca y esa sensación de recién desinfectado que da confianza.

1. **Clínica veterinaria** → transparencia, higiene, profesionalismo, calma.

La paleta lo resuelve en uno solo: un **azul cielo** como color de marca (salud, confianza, vitalidad) con una variante **cristal/cian** como acento secundario fresco, todo sobre **blanco y aguas muy claras**. El usuario percibe un lugar limpio, luminoso y seguro — exactamente lo que busca quien confía su mascota a un veterinario.

---

## 1. Paleta de colores

### Primarios (azul cielo)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Celeste | `#0EA5E9` | rgb(14,165,233) | Color de marca. Acentos de display, gradientes cristalinos, iconos grandes |
| Celeste Oscuro | `#0284C7` | rgb(2,132,199) | Iconos pequeños (no-texto ≥3:1), spás de marca, títulos acento |
| Celeste Profundo | `#0369A1` | rgb(3,105,161) | **CTAs** con texto blanco (5.9:1 AA), hover leve |
| Celeste Noche | `#075985` | rgb(7,89,133) | Hover/pressed de CTAs (7.5:1 AAA) |
| Celeste Pastel | `#7DD3FC` | rgb(125,211,252) | Badges, fills, iconos sobre claro (con texto tinta: 10.7:1) |
| Cielo Suave | `#BAE6FD` | rgb(186,230,253) | Bordes suaves, pilas de color |
| Cielo Pálido | `#E0F2FE` | rgb(224,242,254) | Fondos de tile/pilote, selección |
| Cielo Paler | `#F0F9FF` | rgb(240,249,255) | Fondos de sección muy claros |

### Secundarios (cristal/cian — acento)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Cristal | `#06B6D4` | rgb(6,182,212) | Iconos y acentos secundarios |
| Cristal Oscuro | `#0E7490` | rgb(14,116,144) | **CTA secundario** con texto blanco (5.4:1 AA) |
| Cristal Noche | `#155E75` | rgb(21,94,117) | Hover/pressed de CTA secundario (7.3:1 AAA) |
| Cristal Suave | `#A5F3FC` | rgb(165,243,252) | Acentos pastel secundarios |
| Cristal Pálido | `#CFFAFE` | rgb(207,250,254) | Badges/fills secundarios (con cristal oscuro: 4.8:1) |

### Neutros (clínicos y luminosos)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Tinta | `#0F172A` | rgb(15,23,42) | Texto principal sobre fondos claros (17.9:1) |
| Tinta Media | `#475569` | rgb(71,85,105) | Texto secundario/cuerpo (7.6:1) |
| Neblina | `#94A3B8` | rgb(148,163,184) | Texto muted puntual (solo grande/decorativo) |
| Línea | `#E2E8F0` | rgb(226,232,240) | Bordes, divisores |
| Línea Suave | `#EEF4F9` | rgb(238,244,249) | Bordes muy finos / vidrio |
| Papel | `#FFFFFF` | rgb(255,255,255) | Fondo base del sitio |
| Superficie | `#F8FBFF` | rgb(248,251,255) | Secciones/cards alternas |
| Superficie Suave | `#F0F7FE` | rgb(240,247,254) | Tintes azulados sobre blanco |

### Profundos (ancoraje / pie)
| Nombre | Hex | RGB | Uso |
|--------|-----|-----|-----|
| Noche | `#082F49` | rgb(8,47,73) | Footer/banda profunda (texto claro 12:1) |
| Noche Card | `#0C4A6E` | rgb(12,74,110) | Cards/bandas sobre Noche |
| Noche Tinta | `#E0F2FE` | rgb(224,242,254) | Texto principal sobre Noche |
| Noche Muted | `#9FC6DA` | rgb(159,198,218) | Texto secundario sobre Noche (7.6:1) |

### Accesibilidad (WCAG verificada)
| Combinación | Ratio | Nivel |
|-------------|-------|-------|
| Blanco sobre Celeste Profundo (CTA) | 5.9:1 | AA |
| Blanco sobre Celeste Noche (CTA hover) | 7.6:1 | AAA |
| Blanco sobre Cristal Oscuro (CTA secundario) | 5.4:1 | AA |
| Blanco sobre Cristal Noche (CTA hover) | 7.3:1 | AAA |
| Tinta sobre Papel (body) | 17.9:1 | AAA |
| Tinta Media sobre Papel (cuerpo sec.) | 7.6:1 | AAA |
| Tinta sobre Celeste Pastel (badge) | 10.7:1 | AAA |
| Cristal Oscuro sobre Cristal Pálido (badge) | 4.8:1 | AA |
| Noche Tinta sobre Noche (footer) | 12.1:1 | AAA |
| Noche Muted sobre Noche | 7.6:1 | AAA |

> Reglas: el **Cristal** es acento secundario; el **Celeste** el color de marca. Blanco sobre `#0EA5E9` no alcanza AA (2.8:1) → **nunca** texto blanco sobre Celeste base: usarlo solo como fill/display grande o degradado. Los botones siempre usan Profundo/Noche.

### Reglas de uso de color
- Sitio **predominantemente blanco** con tintes `Cielo Paler`/`Superficie` por sección (degradados cristalinos blancos→celeste suave).
- **60/30/10**: ~60% blancos/aguas claras, ~30% celestes suaves, ~10% acentos (cian, celeste profundo en CTAs).
- El cian se usa como acento secundario; el celeste para salud/atención.
- No usar más de 2-3 colores por componente.
- No usar gris `#94A3B8` para cuerpo (usar Tinta Media).
- Nunca depender solo del color para significado (acompañar con iconos/etiquetas).

---

## 2. Tipografía

Fuentes cargadas vía Google Fonts `<link>` en `app/layout.jsx` (no `next/font`).

| Rol | Fuente | Uso |
|-----|--------|-----|
| Heading | **Oswald** (`font-heading`) | Títulos, display, números grandes. Impacto moderno y limpio |
| Body | **Inter** (`font-body`) | Cuerpo, descripciones, UI |

### Escala tipográfica
| Elemento | Fuente | Peso | Tamaño Desktop/Móvil | Line-height |
|----------|--------|------|----------------------|-------------|
| Display | Oswald | 700 | 60px / 40px | 1.05 |
| H1 | Oswald | 700 | 48px / 32px | 1.1 |
| H2 | Oswald | 600 | 36px / 28px | 1.15 |
| H3 | Oswald | 600 | 28px / 24px | 1.2 |
| H4 | Oswald | 600 | 22px / 20px | 1.25 |
| Body | Inter | 400 | 16px | 1.6 |
| Small | Inter | 400 | 14px | 1.5 |
| Caption | Inter | 400 | 12px | 1.4 |

### Detalles
- **Pesos**: títulos 600–700; body 400; botones/links 500–600.
- **Títulos Oswald**: `uppercase` + `tracking-wide`, con toques acento en **celeste profundo** o **degradado cristalino** (`bg-clip-text`).
- **Body Inter**: `max-width: 65ch` para legibilidad.
- Mobile `H1` mínimo 32px; body nunca por debajo de 16px.

---

## 3. Logo

- **Marca**: palabra "IVÁNCHO" en Oswald extrabold, color **Celeste Profundo**, con una huella de pata estilizada como marcador (reemplazando o junto a la "O").
- **Sobre blanco/aguas claras**: palabra en Celeste Profundo `#0369A1`, pata en Celeste `#0EA5E9`.
- **Sobre Noche (footer)**: palabra en blanco `#FFFFFF`, pata en Celeste Pastel.
- **Icono (favicon)**: pata simplificada en Celeste sobre fondo blanco con borde celeste suave, forma redondeada.

### Espacio de seguridad
Margen libre mínimo = altura del marcador del logo a cada lado.

### Coreo
- No distorsionar, rotar ni sesgar.
- No cambiar colores fuera de la paleta.
- No añadir sombras/gradientes (fuera de la versión aprobada).
- No colocar sobre fondos con textura/ruido.

---

## 4. Formas y estilo visual

- **Fondo del sitio**: blanco base con **degradados cristalinos** por sección (blanco → Cielo Paler/Pálido), blobs radiales celestes muy suaves y vidrio (`bg-white/70 backdrop-blur`).
- **Esquinas**: redondeadas (`rounded-2xl` cards, `rounded-full` botones/badges) — limpias y amables, sin nada pesado.
- **Sombras**: suaves y luminosas, con halo celeste muy sutil (`shadow-lg shadow-primary/10`). Sin sombras duras.
- **Botones CTA primarios**: fondo Celeste Profundo, texto blanco; hover → Celeste Noche.
- **CTA secundario**: fondo Cristal Oscuro, texto blanco; hover → Cristal Noche.
- **Badge/etiqueta secundaria**: fondo Cristal Pálido, texto Cristal Oscuro.
- **Badge/etiqueta general**: fondo Celeste Pastel, texto Tinta.
- **Iconos**: line/contorno con trazo medio (~2px), en Celeste Oscuro o Cristal.

---

## 5. Imágenes y fotografía

- **Tema**: consultorios luminosos, salas limpias con luz natural; mascotas tranquilas y felices.
- **Luz**: natural, abundante, blanca; ambiente "de mañana en una clínica moderna".
- **Tratamiento de color**: desaturado y fresco, con leve tinte celeste; máximo aire y blancura.
- **Composición**: planos amplios y ordenados, superficies limpias; mascota + equipo veterinario con sonrisas.
- **Formato/Assets**: JPG para fotos, SVG para logo/iconos. Carpetas `public/imgs/`, `public/hero/`, `public/areas/`.

---

## 6. Tono y voz

| Rasgo | Somos | No somos |
|-------|-------|----------|
| Cercano | Hablamos con calidez, de tú | Fríos ni corporativos |
| Experto | Inspiramos confianza con datos claros | No usamos jerga médica densa |
| Tranquilizador | Transmitimos seguridad y calma | Alarmistas ni oscuros |

### Tono por contexto
| Contexto | Tono | Ejemplo |
|----------|------|---------|
| Hero | Inspirador y sereno | "Un cuidado claro y cristalino para tu mascota." |
| Clínica/Servicios | Claro y seguro | "Atención veterinaria integral, en un ambiente limpio y luminoso." |
| Contacto | Cercano y resolutivo | "Agenda tu visita o escríbenos."
| Error/404 | Amable y sin culpa | "Ups, esta página se fue de paseo." |

### Términos permitidos
- Cuidados, bienestar, atención.
- Bienestar, cuidado, familia, confianza, calma, frescura.

### Términos prohibidos
- Jerga técnica veterinaria innecesaria (dosificar para comprensión).
- Palabras alarmistas sobre enfermedad/sufrimiento ("emergencia", "sufre").
- Lenguaje tecnicista o corporativo frío.

---

## 7. Checklist de consistencia

- [ ] ¿Fondos predominantemente blancos/aguas claras con degradados cristalinos?
- [ ] ¿Colores dentro de la paleta (60/30/10)?
- [ ] ¿Textos con contraste WCAG AA/AAA?
- [ ] ¿`font-heading` solo en títulos, `font-body` en cuerpo?
- [ ] ¿Cian solo como acento secundario, celeste como color de marca?
- [ ] ¿CTAs con Celeste Profundo / Cristal Oscuro (nunca Celeste base)?
- [ ] ¿Logo respeta espacio de seguridad y versión correcta para el fondo?
- [ ] ¿Fotos luminosas, limpias y frescas?