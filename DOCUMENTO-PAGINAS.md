# GUÍA MAESTRA PARA DESARROLLO DE PÁGINAS

## LUMINAPRO — Sistema de Iluminación Profesional para Eventos

---

**Versión:** 3.0  
**Última actualización:** Enero 2026  
**Clasificación:** Documento rector obligatorio  
**Uso:** Referencia técnica y estratégica para la generación de cualquier página del sitio web de LUMINAPRO mediante Claude Opus 4.5 en Visual Studio Code

---

# INSTRUCCIONES DE USO

Este documento debe ser proporcionado a Claude junto con el prompt específico de cada página. Funciona como:

1. **Sistema de diseño**: Variables CSS, tipografías, colores, espaciado
2. **Guía de estilo**: Tono, voz, copywriting, lenguaje permitido/prohibido
3. **Framework SEO**: Keywords, estructura, schema markup, meta tags
4. **Templates operativos**: Estructuras listas para cada tipo de página
5. **Checklist de calidad**: Validación obligatoria antes de considerar completo

**Cómo usar:**

```
[Pegar este documento completo]
+
[Prompt específico de la página a generar]
=
[Página profesional y consistente]
```

---

# ÍNDICE COMPLETO

1. [Identidad de Marca](#1-identidad-de-marca)
2. [Sistema de Diseño](#2-sistema-de-diseño)
3. [Arquitectura del Sitio](#3-arquitectura-del-sitio)
4. [Estructura Técnica del HTML](#4-estructura-técnica-del-html)
5. [Sistema SEO Completo](#5-sistema-seo-completo)
6. [Copywriting y Voz de Marca](#6-copywriting-y-voz-de-marca)
7. [Componentes Reutilizables](#7-componentes-reutilizables)
8. [Templates por Tipo de Página](#8-templates-por-tipo-de-página)
9. [Protocolo de Interlinking](#9-protocolo-de-interlinking)
10. [Optimización de Conversión](#10-optimización-de-conversión)
11. [Errores Críticos Prohibidos](#11-errores-críticos-prohibidos)
12. [Checklist de Publicación](#12-checklist-de-publicación)

---

# 1. IDENTIDAD DE MARCA

## 1.1 Quién es LUMINAPRO

**Definición:**
LUMINAPRO es una empresa mexicana especializada en renta de iluminación profesional para eventos, con más de 20 años de experiencia en el mercado de Ciudad de México y área metropolitana.

**No somos:**

- Una tienda de venta de focos
- Un servicio low-cost de "luces para fiesta"
- Una empresa de decoración general

**Sí somos:**

- Especialistas exclusivos en iluminación profesional
- Proveedores de diseño lumínico personalizado
- Operadores técnicos certificados
- Socios estratégicos de productores de eventos

## 1.2 Posicionamiento de Marca

### Declaración de Posicionamiento (Brand Statement)

> Para organizadores de eventos en la Ciudad de México que necesitan iluminación profesional sin margen de error, LUMINAPRO ofrece renta de equipos premium con diseño personalizado, instalación especializada y operación técnica durante el evento, respaldados por más de 20 años de experiencia y miles de eventos ejecutados exitosamente.

### Pilares de Marca

| Pilar               | Significado                          | Cómo se comunica                      |
| ------------------- | ------------------------------------ | ------------------------------------- |
| **Experiencia**     | 20+ años, miles de eventos           | Números, casos, testimonios           |
| **Confiabilidad**   | Cero fallas, equipos de respaldo     | Garantías, proceso, redundancia       |
| **Profesionalismo** | Técnicos certificados, proceso claro | Metodología, uniformes, comunicación  |
| **Resultados**      | Transformación visible del evento    | Portfolio, before/after, fotos reales |

### Propuesta de Valor por Segmento

| Segmento         | Lo que Buscan                              | Propuesta LUMINAPRO                                      |
| ---------------- | ------------------------------------------ | -------------------------------------------------------- |
| **Bodas/Social** | Que todo salga perfecto, fotos increíbles  | "Tu evento brillará exactamente como lo soñaste"         |
| **Corporativo**  | Profesionalismo, cumplimiento, facturación | "Ejecución impecable que refleja el nivel de tu empresa" |
| **Producción**   | Capacidad técnica, riders, inventario      | "Cumplimos especificaciones técnicas al 100%"            |

## 1.3 Diferenciadores Competitivos

Estos diferenciadores deben comunicarse en cada página:

1. **Diseño Personalizado**: No paquetes genéricos, propuestas a la medida
2. **Operación Incluida**: Técnico presente durante todo el evento
3. **Equipos de Respaldo**: Redundancia en cada instalación
4. **Experiencia Comprobable**: 20+ años, portfolio verificable
5. **Proceso Transparente**: Sin sorpresas, cotización detallada

## 1.4 Personalidad de Marca

### Arquetipos

- **Primario**: El Mago (transforma, crea magia, hace posible lo imposible)
- **Secundario**: El Sabio (experiencia, conocimiento, asesoría experta)

### Atributos de Personalidad

- Confiable pero no aburrido
- Profesional pero cercano
- Experto pero accesible
- Premium pero no pretencioso
- Cálido pero no informal

---

# 2. SISTEMA DE DISEÑO

## 2.1 Paleta de Colores

### Colores Principales

```css
:root {
  /* === FONDOS === */
  --color-bg-primary: #0a0a0a; /* Negro profundo - fondos principales */
  --color-bg-secondary: #1a1a1a; /* Gris oscuro - fondos alternos */
  --color-bg-tertiary: #141414; /* Negro suave - tarjetas oscuras */
  --color-bg-light: #f5f5f0; /* Crema claro - secciones claras */
  --color-bg-warm: #1c1815; /* Negro cálido - páginas emocionales */

  /* === ACENTOS === */
  --color-accent: #d4a84b; /* Dorado principal - CTAs, highlights */
  --color-accent-hover: #e5b95c; /* Dorado hover - estados interactivos */
  --color-accent-warm: #e8c07d; /* Dorado suave - acentos secundarios */
  --color-accent-light: #f4d59e; /* Dorado claro - fondos de acento */

  /* === TEXTOS === */
  --color-text-light: #f5f5f0; /* Texto sobre fondos oscuros */
  --color-text-dark: #1a1a1a; /* Texto sobre fondos claros */
  --color-text-muted: #888888; /* Texto secundario/captions */
  --color-text-warm: #d4c4b0; /* Texto cálido decorativo */

  /* === BORDES Y LÍNEAS === */
  --color-border: #333333; /* Bordes en fondos oscuros */
  --color-border-light: #e0e0e0; /* Bordes en fondos claros */
  --color-divider: #2a2a2a; /* Separadores sutiles */

  /* === ESTADOS === */
  --color-success: #22c55e; /* Confirmaciones, éxito */
  --color-error: #ef4444; /* Errores, alertas */
  --color-warning: #f59e0b; /* Advertencias */
  --color-info: #3b82f6; /* Información */

  /* === ESPECIALES === */
  --color-whatsapp: #25d366; /* Botón WhatsApp */
  --color-overlay: rgba(0, 0, 0, 0.7); /* Overlays sobre imágenes */
  --color-gradient-start: #0a0a0a; /* Gradientes */
  --color-gradient-end: #1a1a1a;
}
```

### Uso de Colores por Contexto

| Contexto           | Fondo                  | Texto                | Acento           |
| ------------------ | ---------------------- | -------------------- | ---------------- |
| Hero sections      | `--color-bg-primary`   | `--color-text-light` | `--color-accent` |
| Secciones alternas | `--color-bg-light`     | `--color-text-dark`  | `--color-accent` |
| Tarjetas oscuras   | `--color-bg-tertiary`  | `--color-text-light` | `--color-accent` |
| CTAs principales   | `--color-accent`       | `--color-bg-primary` | —                |
| CTAs secundarios   | transparente           | `--color-accent`     | border: accent   |
| Footer             | `--color-bg-secondary` | `--color-text-muted` | `--color-accent` |

## 2.2 Tipografía

### Fuentes

```css
:root {
  /* Fuentes */
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-accent: "Playfair Display", serif; /* Para citas o texto destacado */
}
```

### Escala Tipográfica

```css
:root {
  /* Desktop */
  --text-hero: 4rem; /* 64px - H1 de hero sections */
  --text-h1: 3rem; /* 48px - H1 de páginas internas */
  --text-h2: 2.25rem; /* 36px - Títulos de sección */
  --text-h3: 1.5rem; /* 24px - Subtítulos */
  --text-h4: 1.25rem; /* 20px - Títulos menores */
  --text-body: 1.125rem; /* 18px - Texto principal */
  --text-body-small: 1rem; /* 16px - Texto secundario */
  --text-caption: 0.875rem; /* 14px - Captions, labels */
  --text-small: 0.75rem; /* 12px - Texto legal, microcopys */

  /* Mobile (aplicar en media query) */
  --text-hero-mobile: 2.5rem; /* 40px */
  --text-h1-mobile: 2rem; /* 32px */
  --text-h2-mobile: 1.75rem; /* 28px */
  --text-h3-mobile: 1.25rem; /* 20px */
}
```

### Pesos Tipográficos

```css
:root {
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Aplicación por Elemento

| Elemento   | Fuente           | Peso     | Tamaño   | Line-height |
| ---------- | ---------------- | -------- | -------- | ----------- |
| H1 Hero    | Playfair Display | Bold     | 4rem     | 1.1         |
| H1 Interno | Playfair Display | Bold     | 3rem     | 1.2         |
| H2         | Playfair Display | SemiBold | 2.25rem  | 1.2         |
| H3         | Inter            | SemiBold | 1.5rem   | 1.3         |
| H4         | Inter            | SemiBold | 1.25rem  | 1.4         |
| Body       | Inter            | Regular  | 1.125rem | 1.7         |
| Caption    | Inter            | Regular  | 0.875rem | 1.5         |
| CTA Button | Inter            | SemiBold | 1rem     | 1           |

## 2.3 Espaciado

### Sistema de Espaciado (8px base)

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.5rem; /* 24px */
  --space-6: 2rem; /* 32px */
  --space-7: 2.5rem; /* 40px */
  --space-8: 3rem; /* 48px */
  --space-9: 4rem; /* 64px */
  --space-10: 5rem; /* 80px */
  --space-11: 6rem; /* 96px */
  --space-12: 8rem; /* 128px */
}
```

### Espaciado por Contexto

| Contexto                    | Desktop            | Mobile      |
| --------------------------- | ------------------ | ----------- |
| Padding de sección          | 100px (--space-12) | 60px        |
| Gap entre elementos         | 32px (--space-6)   | 24px        |
| Padding interno de tarjetas | 32px               | 24px        |
| Margen entre párrafos       | 24px               | 16px        |
| Container max-width         | 1200px             | 100% - 32px |
| Margen lateral mínimo       | 5vw                | 16px        |

## 2.4 Breakpoints

```css
/* Mobile First */
/* Base: 0 - 374px (mínimo funcional) */

/* Mobile Large: 375px+ */
@media (min-width: 375px) {
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
}

/* Wide: 1200px+ */
@media (min-width: 1200px) {
}

/* Extra Wide: 1440px+ */
@media (min-width: 1440px) {
}
```

## 2.5 Sombras y Elevación

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-glow: 0 0 20px rgba(212, 168, 75, 0.3); /* Glow dorado */
}
```

## 2.6 Bordes y Radios

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px; /* Pills, circles */
}
```

## 2.7 Transiciones

```css
:root {
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  --transition-bounce: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 2.8 Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-toast: 800;
}
```

---

# 3. ARQUITECTURA DEL SITIO

## 3.1 Mapa del Sitio Completo

```
luminapro.mx/
│
├── index.html                      [Homepage - Hub principal]
│
├── servicios.html                  [Vista general de servicios]
│   ├── bodas.html                  [Iluminación para bodas]
│   ├── corporativos.html           [Eventos corporativos]
│   ├── escenica.html               [Iluminación escénica]
│   ├── efectos-especiales.html     [Efectos atmosféricos]
│   ├── guirnaldas.html             [Guirnaldas de luz]
│   ├── uplighting.html             [Iluminación arquitectónica]
│   ├── cabezas-moviles.html        [Moving heads]
│   ├── letras-luminosas.html       [Letras y números LED]
│   └── pistas-iluminadas.html      [Pistas de baile LED]
│
├── portfolio.html                  [Galería de eventos]
│   ├── portfolio/bodas/            [Filtro: bodas]
│   ├── portfolio/corporativos/     [Filtro: corporativos]
│   └── portfolio/[evento-slug]/    [Páginas individuales de proyecto]
│
├── nosotros.html                   [Sobre la empresa]
│
├── proceso.html                    [Cómo trabajamos]
│
├── contacto.html                   [Formulario y datos]
│
├── cotizacion.html                 [Formulario extenso de cotización]
│
├── blog/                           [Blog para SEO]
│   ├── index.html                  [Listado de artículos]
│   └── [articulo-slug].html        [Artículos individuales]
│
├── faq.html                        [Preguntas frecuentes]
│
├── aviso-privacidad.html           [Legal]
│
├── terminos.html                   [Legal]
│
└── 404.html                        [Página de error]
```

## 3.2 Jerarquía de Navegación

### Menú Principal (Header)

```
[Logo LUMINAPRO]     Servicios ▼ | Portfolio | Nosotros | Contacto     [Cotiza tu Evento]
                          │
                          └── Dropdown:
                              • Bodas y Eventos Sociales
                              • Eventos Corporativos
                              • Iluminación Escénica
                              • Efectos Especiales
                              • Ver Todos los Servicios →
```

### Menú Mobile

```
[Logo]                                                    [☰ Menú]
                                                              │
                                                              └── Fullscreen:
                                                                  Servicios
                                                                    └── [Submenu expandible]
                                                                  Portfolio
                                                                  Nosotros
                                                                  Contacto
                                                                  [Cotiza tu Evento] (CTA destacado)
                                                                  ─────────────────
                                                                  WhatsApp: 55 XXXX XXXX
                                                                  [Redes sociales]
```

## 3.3 Tipos de Página

### Nivel 1: Páginas Pilares

- `index.html` - Homepage
- `servicios.html` - Hub de servicios
- `portfolio.html` - Galería general

**Características:**

- Contenido amplio (2000-3000+ palabras equivalente)
- Keywords principales y competitivas
- Enlaces a todas las páginas hijas
- CTAs múltiples

### Nivel 2: Páginas de Servicio Individual

- `bodas.html`, `corporativos.html`, etc.

**Características:**

- Contenido profundo sobre un servicio específico (1500-2500 palabras)
- Keywords long-tail específicas
- FAQ incluido
- Testimonios relacionados

### Nivel 3: Páginas de Soporte

- `nosotros.html`, `proceso.html`, `contacto.html`

**Características:**

- Contenido enfocado en confianza y conversión
- Keywords de marca
- Rutas claras a cotización

### Nivel 4: Contenido SEO

- Blog posts

**Características:**

- Keywords informacionales
- Links internos a servicios
- Captura de tráfico top-of-funnel

---

# 4. ESTRUCTURA TÉCNICA DEL HTML

## 4.1 Template Base de Documento

```html
<!DOCTYPE html>
<html lang="es-MX">
  <head>
    <!-- === META BÁSICOS === -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- === SEO PRIMARIO === -->
    <title>[TITLE TAG - Máximo 60 caracteres]</title>
    <meta
      name="description"
      content="[META DESCRIPTION - Máximo 155 caracteres]"
    />
    <meta name="keywords" content="[keywords separadas por coma]" />
    <meta name="author" content="LUMINAPRO" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://luminapro.mx/[ruta-actual]" />

    <!-- === OPEN GRAPH (Facebook/LinkedIn) === -->
    <meta property="og:title" content="[Título para compartir]" />
    <meta property="og:description" content="[Descripción para compartir]" />
    <meta
      property="og:image"
      content="https://luminapro.mx/assets/img/og/[imagen-pagina].jpg"
    />
    <meta property="og:url" content="https://luminapro.mx/[ruta-actual]" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:site_name" content="LUMINAPRO" />

    <!-- === TWITTER CARDS === -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="[Título para Twitter]" />
    <meta name="twitter:description" content="[Descripción para Twitter]" />
    <meta
      name="twitter:image"
      content="https://luminapro.mx/assets/img/og/[imagen-pagina].jpg"
    />

    <!-- === FAVICON === -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

    <!-- === FUENTES === -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- === ICONOS === -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <!-- === SCHEMA.ORG === -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "LUMINAPRO",
        "description": "Renta de iluminación profesional para eventos en Ciudad de México",
        "url": "https://luminapro.mx",
        "telephone": "+52-55-XXXX-XXXX",
        "email": "contacto@luminapro.mx",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "[Dirección]",
          "addressLocality": "Ciudad de México",
          "addressRegion": "CDMX",
          "postalCode": "[CP]",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "[latitud]",
          "longitude": "[longitud]"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Ciudad de México"
          },
          {
            "@type": "State",
            "name": "Estado de México"
          }
        ],
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.facebook.com/luminapro",
          "https://www.instagram.com/luminapro",
          "https://www.tiktok.com/@luminapro"
        ],
        "image": "https://luminapro.mx/assets/img/logo-luminapro.png"
      }
    </script>

    <!-- === [SCHEMA ADICIONAL ESPECÍFICO DE PÁGINA] === -->

    <!-- === ESTILOS === -->
    <style>
      /* [CSS COMPLETO AQUÍ] */
    </style>
  </head>
  <body>
    <!-- === HEADER === -->
    <header class="header" id="header">
      <!-- [Contenido del header] -->
    </header>

    <!-- === CONTENIDO PRINCIPAL === -->
    <main>
      <!-- [Secciones de la página] -->
    </main>

    <!-- === FOOTER === -->
    <footer class="footer">
      <!-- [Contenido del footer] -->
    </footer>

    <!-- === WHATSAPP FLOTANTE === -->
    <a
      href="https://wa.me/52XXXXXXXXXX"
      class="whatsapp-float"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fab fa-whatsapp"></i>
    </a>

    <!-- === JAVASCRIPT === -->
    <script>
      /* [JS mínimo aquí] */
    </script>
  </body>
</html>
```

## 4.2 Anatomía del Header

```html
<!-- === HEADER === -->
<header class="header" id="header">
  <div class="header__container">
    <!-- Logo -->
    <a href="/" class="header__logo" aria-label="LUMINAPRO - Inicio">
      <span class="header__logo-text"
        >LUMINA<span class="header__logo-accent">PRO</span></span
      >
    </a>

    <!-- Navegación Desktop -->
    <nav class="header__nav" aria-label="Navegación principal">
      <ul class="header__menu">
        <li class="header__item header__item--dropdown">
          <a href="/servicios.html" class="header__link">
            Servicios <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="header__dropdown">
            <li><a href="/bodas.html">Bodas y Eventos Sociales</a></li>
            <li><a href="/corporativos.html">Eventos Corporativos</a></li>
            <li><a href="/escenica.html">Iluminación Escénica</a></li>
            <li><a href="/efectos-especiales.html">Efectos Especiales</a></li>
            <li class="header__dropdown-divider"></li>
            <li>
              <a href="/servicios.html" class="header__dropdown-all"
                >Ver todos los servicios →</a
              >
            </li>
          </ul>
        </li>
        <li class="header__item">
          <a href="/portfolio.html" class="header__link">Portfolio</a>
        </li>
        <li class="header__item">
          <a href="/nosotros.html" class="header__link">Nosotros</a>
        </li>
        <li class="header__item">
          <a href="/contacto.html" class="header__link">Contacto</a>
        </li>
      </ul>
    </nav>

    <!-- CTA Header -->
    <a href="/cotizacion.html" class="header__cta btn btn--primary">
      Cotiza tu Evento
    </a>

    <!-- Botón Mobile -->
    <button
      class="header__toggle"
      id="menuToggle"
      aria-label="Abrir menú"
      aria-expanded="false"
    >
      <span class="header__toggle-bar"></span>
      <span class="header__toggle-bar"></span>
      <span class="header__toggle-bar"></span>
    </button>
  </div>

  <!-- Menú Mobile (fullscreen) -->
  <nav class="header__mobile-menu" id="mobileMenu" aria-hidden="true">
    <!-- [Contenido del menú mobile] -->
  </nav>
</header>
```

## 4.3 Anatomía del Footer

```html
<!-- === FOOTER === -->
<footer class="footer">
  <div class="footer__container">
    <!-- Columna 1: Marca -->
    <div class="footer__brand">
      <a href="/" class="footer__logo"> LUMINA<span>PRO</span> </a>
      <p class="footer__tagline">
        Transformamos espacios en experiencias inolvidables
      </p>
      <div class="footer__social">
        <a
          href="https://instagram.com/luminapro"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://facebook.com/luminapro"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://tiktok.com/@luminapro"
          target="_blank"
          rel="noopener"
          aria-label="TikTok"
        >
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>

    <!-- Columna 2: Servicios -->
    <div class="footer__column">
      <h4 class="footer__heading">Servicios</h4>
      <ul class="footer__links">
        <li><a href="/bodas.html">Iluminación para Bodas</a></li>
        <li><a href="/corporativos.html">Eventos Corporativos</a></li>
        <li><a href="/escenica.html">Iluminación Escénica</a></li>
        <li><a href="/efectos-especiales.html">Efectos Especiales</a></li>
        <li><a href="/guirnaldas.html">Guirnaldas de Luz</a></li>
      </ul>
    </div>

    <!-- Columna 3: Empresa -->
    <div class="footer__column">
      <h4 class="footer__heading">Empresa</h4>
      <ul class="footer__links">
        <li><a href="/nosotros.html">Nosotros</a></li>
        <li><a href="/portfolio.html">Portfolio</a></li>
        <li><a href="/proceso.html">Cómo Trabajamos</a></li>
        <li><a href="/faq.html">Preguntas Frecuentes</a></li>
        <li><a href="/blog/">Blog</a></li>
      </ul>
    </div>

    <!-- Columna 4: Contacto -->
    <div class="footer__column">
      <h4 class="footer__heading">Contacto</h4>
      <ul class="footer__contact">
        <li>
          <i class="fab fa-whatsapp"></i>
          <a href="https://wa.me/52XXXXXXXXXX">55 XXXX XXXX</a>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          <a href="mailto:contacto@luminapro.mx">contacto@luminapro.mx</a>
        </li>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          <span>Ciudad de México y Área Metropolitana</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="footer__bottom">
    <div class="footer__bottom-container">
      <p class="footer__copyright">
        © 2024 LUMINAPRO. Todos los derechos reservados.
      </p>
      <ul class="footer__legal">
        <li><a href="/aviso-privacidad.html">Aviso de Privacidad</a></li>
        <li><a href="/terminos.html">Términos y Condiciones</a></li>
      </ul>
    </div>
  </div>
</footer>
```

## 4.4 Estructura de Secciones

### Patrón General de Sección

```html
<!-- === NOMBRE DE SECCIÓN === -->
<section class="section section--[modificador]" id="[id-unico]">
  <div class="container">
    <!-- Header de sección (opcional) -->
    <header class="section__header">
      <span class="section__badge">[Badge opcional]</span>
      <h2 class="section__title">[Título H2]</h2>
      <p class="section__subtitle">[Subtítulo/descripción]</p>
    </header>

    <!-- Contenido de sección -->
    <div class="section__content">
      <!-- [Contenido específico] -->
    </div>

    <!-- CTA de sección (opcional) -->
    <div class="section__cta">
      <a href="[enlace]" class="btn btn--primary">[Texto CTA]</a>
    </div>
  </div>
</section>
<!-- === FIN NOMBRE DE SECCIÓN === -->
```

### Modificadores de Sección

```css
.section--dark {
  background: var(--color-bg-primary);
  color: var(--color-text-light);
}
.section--light {
  background: var(--color-bg-light);
  color: var(--color-text-dark);
}
.section--warm {
  background: var(--color-bg-warm);
  color: var(--color-text-light);
}
.section--hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.section--compact {
  padding: var(--space-9) 0;
}
.section--full {
  padding: 0;
} /* Para galerías full-width */
```

---

# 5. SISTEMA SEO COMPLETO

## 5.1 Estrategia de Keywords

### Keywords por Tipo de Página

#### Homepage (index.html)

| Tipo        | Keywords                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Principal   | renta de iluminación para eventos, iluminación profesional para eventos                         |
| Secundarias | renta de luces para eventos CDMX, iluminación para bodas, iluminación para eventos corporativos |
| Long-tail   | empresa de iluminación para eventos en Ciudad de México                                         |

#### Servicios Generales (servicios.html)

| Tipo        | Keywords                                                              |
| ----------- | --------------------------------------------------------------------- |
| Principal   | servicios de iluminación profesional                                  |
| Secundarias | renta de equipo de iluminación, servicios de iluminación para eventos |

#### Bodas (bodas.html)

| Tipo        | Keywords                                                                               |
| ----------- | -------------------------------------------------------------------------------------- |
| Principal   | iluminación para bodas                                                                 |
| Secundarias | renta de luces para boda, iluminación profesional para bodas, luces para boda de noche |
| Long-tail   | iluminación para boda en jardín CDMX, cuánto cuesta iluminación para boda              |

#### Corporativos (corporativos.html)

| Tipo        | Keywords                                                                |
| ----------- | ----------------------------------------------------------------------- |
| Principal   | iluminación para eventos corporativos                                   |
| Secundarias | iluminación para conferencias, renta de iluminación empresarial         |
| Long-tail   | iluminación para lanzamiento de producto, iluminación para convenciones |

#### Guirnaldas (guirnaldas.html)

| Tipo        | Keywords                                                                       |
| ----------- | ------------------------------------------------------------------------------ |
| Principal   | guirnaldas de luz para eventos, renta de guirnaldas                            |
| Secundarias | guirnaldas tipo Edison, fairy lights para boda, luces decorativas para eventos |
| Long-tail   | renta de guirnaldas para boda en jardín                                        |

## 5.2 Fórmulas de Title Tag

### Estructura Recomendada

```
[Keyword Principal] + [Diferenciador/Contexto] | [Marca]
```

**Máximo: 60 caracteres**

### Ejemplos por Página

| Página       | Title Tag                                                    |
| ------------ | ------------------------------------------------------------ |
| Homepage     | `Renta de Iluminación Profesional para Eventos \| LUMINAPRO` |
| Servicios    | `Servicios de Iluminación para Eventos en CDMX \| LUMINAPRO` |
| Bodas        | `Iluminación Profesional para Bodas \| Renta LUMINAPRO CDMX` |
| Corporativos | `Iluminación para Eventos Corporativos \| LUMINAPRO`         |
| Guirnaldas   | `Guirnaldas de Luz para Bodas y Eventos \| LUMINAPRO`        |
| Portfolio    | `Portfolio de Eventos Iluminados \| LUMINAPRO`               |
| Contacto     | `Contacto y Cotizaciones \| LUMINAPRO Iluminación`           |

## 5.3 Fórmulas de Meta Description

### Estructura Recomendada

```
[Propuesta de valor] + [Servicios/beneficios] + [Ubicación] + [CTA implícito]
```

**Máximo: 155 caracteres**

### Ejemplos por Página

| Página     | Meta Description                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage   | `Renta de iluminación profesional para bodas, eventos corporativos y producciones en CDMX. Diseño personalizado + instalación + operación. ¡Cotiza gratis!` |
| Bodas      | `Iluminación profesional para bodas que transforma tu celebración. Diseño personalizado, instalación experta y operación durante el evento. CDMX.`          |
| Guirnaldas | `Renta de guirnaldas de luz para bodas y eventos en CDMX. Edison, fairy lights, cortinas de luz. Instalación profesional incluida. ¡Cotiza hoy!`            |

## 5.4 Schema Markup por Tipo de Página

### LocalBusiness (Todas las páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://luminapro.mx/#organization",
  "name": "LUMINAPRO",
  "description": "Renta de iluminación profesional para eventos",
  "url": "https://luminapro.mx",
  "telephone": "+52-55-XXXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ciudad de México",
    "addressCountry": "MX"
  },
  "areaServed": ["Ciudad de México", "Estado de México"],
  "sameAs": [
    "https://instagram.com/luminapro",
    "https://facebook.com/luminapro"
  ]
}
```

### Service (Páginas de servicio)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Nombre del servicio]",
  "description": "[Descripción del servicio]",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://luminapro.mx/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ciudad de México"
  },
  "serviceType": "[Tipo de servicio]"
}
```

### Product (Servicios específicos como guirnaldas)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Renta de Guirnaldas de Luz",
  "description": "[Descripción]",
  "brand": {
    "@type": "Brand",
    "name": "LUMINAPRO"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "areaServed": "Ciudad de México"
  }
}
```

### FAQPage (Páginas con FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta]"
      }
    }
  ]
}
```

### BreadcrumbList (Todas las páginas internas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://luminapro.mx/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Página actual]",
      "item": "https://luminapro.mx/[ruta]"
    }
  ]
}
```

## 5.5 Jerarquía de Encabezados

### Reglas Obligatorias

1. **Solo UN H1 por página** - Debe contener la keyword principal
2. **H2 para secciones principales** - Cada sección importante
3. **H3 para subsecciones** - Dentro de H2s
4. **H4 para items en listas** - Opcional, dentro de H3s
5. **Orden lógico** - Nunca saltar niveles (H1 → H3 ✗)

### Template de Jerarquía

```
H1: [Keyword principal + contexto emocional]
│
├── H2: [Sección de propuesta de valor]
│   ├── H3: [Beneficio 1]
│   ├── H3: [Beneficio 2]
│   └── H3: [Beneficio 3]
│
├── H2: [Sección de servicios/tipos]
│   ├── H3: [Servicio/Tipo 1]
│   ├── H3: [Servicio/Tipo 2]
│   └── H3: [Servicio/Tipo 3]
│
├── H2: [Sección de proceso]
│   ├── H3: [Paso 1]
│   ├── H3: [Paso 2]
│   └── H3: [Paso 3]
│
├── H2: [Sección de FAQ]
│
└── H2: [CTA final]
```

## 5.6 Optimización de Imágenes

### Nombres de Archivo

```
❌ Incorrecto: IMG_1234.jpg, foto1.png, imagen.webp
✅ Correcto: iluminacion-boda-jardin-cdmx.webp, guirnaldas-edison-terraza.webp
```

### Atributos Alt

```html
❌ Incorrecto: alt="imagen" alt="" alt="foto de boda" ✅ Correcto:
alt="Iluminación profesional para boda en jardín de hacienda en CDMX"
```

### Formato y Tamaño

| Uso               | Formato | Tamaño Máximo | Dimensiones |
| ----------------- | ------- | ------------- | ----------- |
| Hero backgrounds  | WebP    | 200KB         | 1920x1080   |
| Galería/Portfolio | WebP    | 100KB         | 800x600     |
| Thumbnails        | WebP    | 30KB          | 400x300     |
| Logos/iconos      | SVG     | 10KB          | Vector      |

---

# 6. COPYWRITING Y VOZ DE MARCA

## 6.1 Tono de Voz

### Características del Tono LUMINAPRO

| Atributo        | Descripción                       | Ejemplo                                                                    |
| --------------- | --------------------------------- | -------------------------------------------------------------------------- |
| **Profesional** | Competente, informado, serio      | "Nuestros técnicos certificados operan la consola durante todo tu evento"  |
| **Cálido**      | Cercano, empático, humano         | "Sabemos lo importante que es este día para ti"                            |
| **Confiable**   | Seguro, respaldado, sin dudas     | "20 años de experiencia y más de 3,000 eventos nos respaldan"              |
| **Inspirador**  | Aspiracional, visual, emocional   | "Imagina tu pista de baile bañada en luz dorada mientras suena tu canción" |
| **Claro**       | Directo, sin rodeos, transparente | "Cotización detallada en 24 horas. Sin letra pequeña, sin sorpresas"       |

### Lo que NUNCA Decimos

| ❌ Prohibido                      | Por qué              | ✅ Alternativa                              |
| --------------------------------- | -------------------- | ------------------------------------------- |
| "Somos los mejores"               | Cliché sin prueba    | "20+ años de experiencia nos respaldan"     |
| "Calidad-precio"                  | Suena barato         | "Inversión que se nota en cada foto"        |
| "Soluciones integrales"           | Corporativismo vacío | "Todo incluido: diseño, montaje, operación" |
| "Contáctenos"                     | Frío, impersonal     | "Platícanos de tu evento"                   |
| "Nuestro equipo de profesionales" | Genérico             | "Técnicos con certificación [específica]"   |
| "No dudes en"                     | Pasivo, débil        | "Escríbenos ahora"                          |

## 6.2 Fórmulas de Copywriting

### Para Headlines (H1, H2)

**Fórmula: [Beneficio] + [Para quién] + [Contexto emocional]**

```
✅ "Iluminación Profesional que Transforma tu Evento en una Experiencia Inolvidable"
✅ "Guirnaldas de Luz para Bodas que Enamoran"
✅ "La Iluminación que tu Evento Corporativo Merece"
```

### Para Párrafos Introductorios

**Fórmula: [Empatía] + [Problema/Deseo] + [Solución] + [Resultado]**

```
✅ "Tu boda es el día más importante de tu vida (Empatía). Cada detalle cuenta, y la iluminación tiene el poder de transformar un salón común (Problema) en un espacio mágico (Solución) donde cada momento se convierte en una fotografía perfecta (Resultado)."
```

### Para CTAs

**Fórmula: [Verbo de acción] + [Beneficio inmediato]**

```
✅ "Cotiza tu evento ahora" (no "Enviar" o "Contactar")
✅ "Diseña tu iluminación" (no "Ver más")
✅ "Agenda tu asesoría gratuita" (no "Solicitar información")
```

### Para Testimonios

**Fórmula: [Resultado específico] + [Emoción] + [Recomendación]**

```
✅ "LUMINAPRO transformó completamente nuestro salón. Mis invitados no dejaban de preguntar quién había hecho la iluminación. Las fotos quedaron increíbles. ¡100% recomendados!"
— María González, Boda en Hacienda San Antonio
```

## 6.3 Vocabulario de Marca

### Palabras que SÍ Usamos

| Categoría          | Palabras                                                   |
| ------------------ | ---------------------------------------------------------- |
| **Transformación** | transformar, convertir, elevar, realzar, iluminar          |
| **Emoción**        | mágico, inolvidable, memorable, especial, único            |
| **Confianza**      | profesional, experto, certificado, garantizado, respaldado |
| **Resultados**     | impecable, perfecto, espectacular, impresionante           |
| **Proceso**        | personalizado, a la medida, diseñado para ti               |
| **Acción**         | descubre, imagina, crea, diseña, transforma                |

### Palabras que NO Usamos

| Prohibido            | Razón                   |
| -------------------- | ----------------------- |
| Barato, económico    | Posicionamiento premium |
| Paquete básico       | Suena limitado          |
| Intentamos, tratamos | Falta de confianza      |
| Quizás, tal vez      | Indecisión              |
| Disculpa, perdón     | Debilidad innecesaria   |
| Promoción, descuento | Degrada el valor        |

## 6.4 Longitud de Contenido por Elemento

| Elemento                 | Longitud Óptima | Máximo       |
| ------------------------ | --------------- | ------------ |
| H1                       | 8-12 palabras   | 15 palabras  |
| H2                       | 6-10 palabras   | 12 palabras  |
| H3                       | 4-8 palabras    | 10 palabras  |
| Párrafo intro de sección | 2-3 oraciones   | 4 oraciones  |
| Párrafo de cuerpo        | 3-4 oraciones   | 5 oraciones  |
| Descripción de servicio  | 50-80 palabras  | 100 palabras |
| Testimonio               | 30-50 palabras  | 75 palabras  |
| CTA                      | 2-5 palabras    | 6 palabras   |
| Microcopy                | 5-10 palabras   | 15 palabras  |

## 6.5 Copy por Tipo de Sección

### Hero Section

```
H1: [Keyword principal + beneficio emocional]
Subtítulo: [Expansión del beneficio + contexto + ubicación]
CTA Primario: [Verbo + beneficio]
CTA Secundario: [Verbo + contenido]
```

**Ejemplo:**

```
H1: Iluminación Profesional que Transforma tu Evento en una Experiencia Inolvidable
Subtítulo: Diseño, renta y operación de sistemas de iluminación para bodas, eventos corporativos y producciones especiales en la Ciudad de México
CTA Primario: Cotiza tu Evento
CTA Secundario: Ver Nuestro Trabajo
```

### Propuesta de Valor

```
Intro: [1-2 oraciones que enganchan emocionalmente]
Pilares: [4 beneficios con icono + título + descripción corta]
```

### Servicios/Productos

```
H3: [Nombre del servicio con keyword]
Descripción: [Qué es + para qué sirve + resultado]
Características: [3-5 bullets cortos]
Ideal para: [Tipos de eventos]
CTA: [Acción específica]
```

### Proceso

```
Intro: [Por qué nuestro proceso es diferente]
Pasos: [Número + Título + Descripción + Tiempo estimado]
Cierre: [Resultado final + tranquilidad]
```

### FAQ

```
Pregunta: [Pregunta real que haría el cliente]
Respuesta: [Respuesta directa + información útil adicional]
```

---

# 7. COMPONENTES REUTILIZABLES

## 7.1 Botones

### HTML

```html
<!-- Botón Primario -->
<a href="[enlace]" class="btn btn--primary">[Texto]</a>

<!-- Botón Secundario (Outline) -->
<a href="[enlace]" class="btn btn--secondary">[Texto]</a>

<!-- Botón Ghost (Solo texto) -->
<a href="[enlace]" class="btn btn--ghost">[Texto] →</a>

<!-- Botón WhatsApp -->
<a href="https://wa.me/52XXXXXXXXXX" class="btn btn--whatsapp" target="_blank">
  <i class="fab fa-whatsapp"></i> WhatsApp
</a>

<!-- Botón Grande -->
<a href="[enlace]" class="btn btn--primary btn--large">[Texto]</a>
```

### CSS

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
}

.btn--primary:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
  transform: translateY(-2px);
}

.btn--secondary {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn--secondary:hover {
  background: var(--color-accent);
  color: var(--color-bg-primary);
}

.btn--ghost {
  background: transparent;
  color: var(--color-accent);
  border: none;
  padding: var(--space-2) 0;
}

.btn--ghost:hover {
  color: var(--color-accent-hover);
}

.btn--whatsapp {
  background: var(--color-whatsapp);
  color: white;
  border-color: var(--color-whatsapp);
}

.btn--large {
  padding: var(--space-5) var(--space-8);
  font-size: 1.125rem;
}
```

## 7.2 Tarjetas

### Tarjeta de Servicio

```html
<article class="card card--service">
  <div class="card__icon">
    <i class="fas fa-[icono]"></i>
  </div>
  <h3 class="card__title">[Título del servicio]</h3>
  <p class="card__description">[Descripción breve]</p>
  <a href="[enlace]" class="card__link">Conocer más →</a>
</article>
```

### Tarjeta de Testimonio

```html
<article class="card card--testimonial">
  <div class="card__quote">
    <i class="fas fa-quote-left"></i>
  </div>
  <blockquote class="card__text">"[Texto del testimonio]"</blockquote>
  <footer class="card__footer">
    <cite class="card__author">[Nombre]</cite>
    <span class="card__event">[Tipo de evento, Lugar]</span>
  </footer>
</article>
```

### Tarjeta de Paso (Proceso)

```html
<article class="card card--step">
  <span class="card__number">01</span>
  <h3 class="card__title">[Título del paso]</h3>
  <p class="card__description">[Descripción]</p>
</article>
```

## 7.3 Formularios

### Formulario de Cotización Corto

```html
<form class="form" action="[endpoint]" method="POST">
  <div class="form__group">
    <label for="nombre" class="form__label">Nombre</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      class="form__input"
      placeholder="Tu nombre completo"
      required
    />
  </div>

  <div class="form__group">
    <label for="email" class="form__label">Correo electrónico</label>
    <input
      type="email"
      id="email"
      name="email"
      class="form__input"
      placeholder="tu@email.com"
      required
    />
  </div>

  <div class="form__group">
    <label for="telefono" class="form__label">WhatsApp</label>
    <input
      type="tel"
      id="telefono"
      name="telefono"
      class="form__input"
      placeholder="55 1234 5678"
      required
    />
  </div>

  <div class="form__group">
    <label for="mensaje" class="form__label">Cuéntanos sobre tu evento</label>
    <textarea
      id="mensaje"
      name="mensaje"
      class="form__textarea"
      rows="4"
      placeholder="Fecha, tipo de evento, venue, ideas..."
    ></textarea>
  </div>

  <button type="submit" class="btn btn--primary btn--large form__submit">
    Solicitar Cotización
  </button>

  <p class="form__disclaimer">
    Sin compromiso • Respondemos en menos de 24 hrs
  </p>
</form>
```

## 7.4 FAQ Acordeón

```html
<div class="faq">
  <div class="faq__item">
    <button class="faq__question" aria-expanded="false">
      <span>[Pregunta]</span>
      <i class="fas fa-plus faq__icon"></i>
    </button>
    <div class="faq__answer" hidden>
      <p>[Respuesta]</p>
    </div>
  </div>
  <!-- Más items... -->
</div>
```

### JavaScript para Acordeón

```javascript
document.querySelectorAll(".faq__question").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Cerrar todos
    document.querySelectorAll(".faq__question").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.hidden = true;
    });

    // Abrir el clickeado (si estaba cerrado)
    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      button.nextElementSibling.hidden = false;
    }
  });
});
```

## 7.5 WhatsApp Flotante

```html
<a
  href="https://wa.me/52XXXXXXXXXX?text=Hola,%20me%20interesa%20información%20sobre%20iluminación%20para%20mi%20evento"
  class="whatsapp-float"
  target="_blank"
  rel="noopener"
  aria-label="Contactar por WhatsApp"
>
  <i class="fab fa-whatsapp"></i>
  <span class="whatsapp-float__tooltip">¿Dudas? Escríbenos</span>
</a>
```

```css
.whatsapp-float {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  width: 60px;
  height: 60px;
  background: var(--color-whatsapp);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  box-shadow: var(--shadow-lg);
  z-index: var(--z-fixed);
  transition: all var(--transition-base);
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
}

.whatsapp-float__tooltip {
  position: absolute;
  right: 70px;
  background: white;
  color: var(--color-text-dark);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  white-space: nowrap;
  box-shadow: var(--shadow-md);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.whatsapp-float:hover .whatsapp-float__tooltip {
  opacity: 1;
  visibility: visible;
}
```

---

# 8. TEMPLATES POR TIPO DE PÁGINA

## 8.1 Template: Página de Servicio Individual

### Estructura Obligatoria

```
1. HEADER (consistente)
2. HERO SERVICIO
   - Breadcrumb
   - H1 con keyword
   - Párrafo emocional
   - CTA primario + secundario
3. EXPERIENCIA/BENEFICIO EMOCIONAL
   - H2 enfocado en resultado
   - Copy que vende la sensación
   - 3 beneficios emocionales con icono
4. GALERÍA / PRUEBA VISUAL
   - H2
   - Grid de imágenes (6-8)
   - CTA a portfolio completo
5. TIPOS/VARIANTES DEL SERVICIO
   - H2
   - Cards para cada variante (H3 + descripción + ideal para)
6. APLICACIONES / CASOS DE USO
   - H2
   - Grid de aplicaciones
7. BENEFICIOS RACIONALES
   - H2
   - Por qué elegirnos vs alternativas
   - Lista de beneficios concretos
8. PROCESO DE TRABAJO
   - H2
   - Timeline de 4-5 pasos
9. PRECIOS / INVERSIÓN
   - H2
   - Información de rango (sin precios exactos)
   - Qué incluye
   - CTA a cotización
10. FAQ ESPECÍFICO
    - H2
    - 6-10 preguntas relevantes al servicio
11. CTA FINAL
    - H2 emocional
    - Formulario o WhatsApp
12. FOOTER (consistente)
```

### SEO Mínimo Requerido

- Title Tag único con keyword principal
- Meta Description única
- Schema: Service + FAQPage + BreadcrumbList
- H1 único con keyword
- Alt text en todas las imágenes
- Links internos a servicios relacionados

## 8.2 Template: Homepage

### Estructura Obligatoria

```
1. HEADER
2. HERO PRINCIPAL
   - H1 con propuesta de valor
   - Subtítulo con contexto
   - CTA primario + secundario
   - Video o imagen de alto impacto
3. PROPUESTA DE VALOR
   - Por qué LUMINAPRO
   - 4 pilares de diferenciación
4. SERVICIOS DESTACADOS
   - H2
   - 4 servicios principales en cards
   - CTA a página de servicios
5. PORTFOLIO PREVIEW
   - H2
   - 3-4 proyectos destacados
   - CTA a portfolio completo
6. PROCESO RESUMIDO
   - H2
   - 4 pasos visuales
7. TESTIMONIOS
   - H2
   - 3 testimonios rotando
8. CLIENTES / TRUST BADGES
   - Logos de clientes o marcas de equipos
9. CTA FINAL
   - H2
   - Formulario de contacto
10. FOOTER
```

## 8.3 Template: Página de Portfolio

### Estructura

```
1. HEADER
2. HERO PORTFOLIO
   - H1
   - Introducción
3. FILTROS
   - Por categoría (Bodas, Corporativos, etc.)
4. GRID DE PROYECTOS
   - Imágenes con overlay de información
   - Clic abre modal o página de detalle
5. CTA FINAL
6. FOOTER
```

---

# 9. PROTOCOLO DE INTERLINKING

## 9.1 Reglas de Enlaces Internos

### Obligatorios por Página

| Desde               | Hacia                          | Mínimo |
| ------------------- | ------------------------------ | ------ |
| Homepage            | Todas las páginas de servicios | 4+     |
| Servicios general   | Cada servicio individual       | 6+     |
| Servicio individual | Servicios relacionados         | 2-3    |
| Servicio individual | Portfolio                      | 1+     |
| Servicio individual | Contacto/Cotización            | 3+     |
| Blog post           | Servicios relacionados         | 2+     |
| Blog post           | Otros posts relacionados       | 2+     |

### Anchor Text

```
❌ Incorrecto: "click aquí", "ver más", "leer más"
✅ Correcto: "iluminación para bodas", "ver nuestro portfolio de eventos corporativos"
```

## 9.2 Flujo de Navegación Ideal

```
[Entrada orgánica: "guirnaldas para boda"]
    ↓
[guirnaldas.html] - El usuario encuentra exactamente lo que buscaba
    ↓
[Link interno] → [bodas.html] - Ve el servicio completo de bodas
    ↓
[Link interno] → [portfolio.html] - Confirma calidad visual
    ↓
[CTA] → [cotizacion.html] - Convierte
```

---

# 10. OPTIMIZACIÓN DE CONVERSIÓN

## 10.1 Ubicación de CTAs

### Regla de los 3 CTAs Mínimos

Toda página de servicio debe tener mínimo:

1. **CTA en Hero** - Captura usuarios decididos
2. **CTA a mitad de página** - Captura después de informar
3. **CTA al final** - Última oportunidad

### CTAs Adicionales Recomendados

- Después de sección de beneficios
- Después de testimonios
- Sticky en mobile (barra inferior)

## 10.2 Microcopys de Confianza

Ubicar cerca de CTAs:

```
"Cotización gratuita y sin compromiso"
"Respondemos en menos de 24 horas"
"20+ años de experiencia"
"Más de 3,000 eventos realizados"
"Garantía de satisfacción"
```

## 10.3 Reducción de Fricción

### En Formularios

- Máximo 4 campos para primer contacto
- WhatsApp como alternativa siempre visible
- Labels claros, no solo placeholders
- Validación en tiempo real
- Botón con texto de acción, no "Enviar"

### En Navegación

- Menú siempre visible (sticky header)
- WhatsApp flotante siempre disponible
- Breadcrumbs en páginas internas
- Búsqueda (si hay muchos servicios/blog)

---

# 11. ERRORES CRÍTICOS PROHIBIDOS

## 11.1 Errores de SEO

| Error                  | Impacto | Verificación                      |
| ---------------------- | ------- | --------------------------------- |
| H1 duplicado o ausente | Crítico | Solo 1 H1 por página              |
| Title/Meta duplicados  | Alto    | Únicos en cada página             |
| Imágenes sin alt       | Medio   | Revisar todas                     |
| Links rotos            | Alto    | Verificar antes de publicar       |
| Contenido duplicado    | Crítico | Textos únicos siempre             |
| Sin canonical          | Medio   | Incluir en todas las páginas      |
| Sin schema             | Medio   | Mínimo LocalBusiness + específico |

## 11.2 Errores de UX

| Error                         | Impacto | Corrección               |
| ----------------------------- | ------- | ------------------------ |
| Sin CTA visible en hero       | Crítico | Siempre incluir          |
| Formulario de más de 6 campos | Alto    | Reducir a 4              |
| Sin WhatsApp flotante         | Alto    | Agregar siempre          |
| Sin versión mobile            | Crítico | Mobile-first obligatorio |
| Carga lenta (>3s)             | Crítico | Optimizar imágenes       |

## 11.3 Errores de Contenido

| Error                     | Impacto | Verificación                  |
| ------------------------- | ------- | ----------------------------- |
| Textos genéricos/clichés  | Alto    | Revisar vocabulario prohibido |
| Sin prueba social         | Alto    | Incluir testimonios           |
| Sin proceso claro         | Medio   | Sección de "Cómo trabajamos"  |
| Copy en español de España | Bajo    | Usar español mexicano         |
| Errores ortográficos      | Medio   | Revisar antes de publicar     |

## 11.4 Errores Técnicos

| Error             | Impacto | Corrección                  |
| ----------------- | ------- | --------------------------- |
| Sin HTTPS         | Crítico | Certificado SSL obligatorio |
| Sin favicon       | Bajo    | Agregar                     |
| Sin Open Graph    | Medio   | Agregar para compartir      |
| HTML inválido     | Medio   | Validar en W3C              |
| CSS no minificado | Bajo    | Minificar para producción   |

---

# 12. CHECKLIST DE PUBLICACIÓN

## 12.1 Checklist Pre-Publicación

### SEO

- [ ] Title tag único (máx 60 caracteres)
- [ ] Meta description única (máx 155 caracteres)
- [ ] URL limpia y descriptiva
- [ ] H1 único con keyword principal
- [ ] Jerarquía H1 > H2 > H3 correcta
- [ ] Alt text en todas las imágenes
- [ ] Schema markup implementado
- [ ] Canonical URL configurada
- [ ] Links internos agregados (mín 3)

### Contenido

- [ ] Copy revisado (sin errores ortográficos)
- [ ] Sin textos placeholder/lorem ipsum
- [ ] Tono de marca consistente
- [ ] CTAs claros y visibles
- [ ] Testimonios incluidos (si aplica)
- [ ] FAQ incluido (si aplica)

### Diseño

- [ ] Consistencia con sistema de diseño
- [ ] Colores correctos
- [ ] Tipografía correcta
- [ ] Espaciado correcto
- [ ] Imágenes optimizadas (WebP, <200KB)

### Funcionalidad

- [ ] Todos los links funcionan
- [ ] Formularios funcionan
- [ ] WhatsApp link correcto
- [ ] Menú mobile funciona
- [ ] Acordeones/interacciones funcionan

### Responsive

- [ ] Funciona en 375px (iPhone SE)
- [ ] Funciona en 768px (iPad)
- [ ] Funciona en 1024px (laptop)
- [ ] Funciona en 1440px (desktop grande)

### Performance

- [ ] Lighthouse Performance > 80
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Carga inicial < 3 segundos

## 12.2 Checklist Post-Publicación

- [ ] Página indexada en Google (verificar con site:)
- [ ] Sin errores en Google Search Console
- [ ] Links desde otras páginas del sitio funcionan
- [ ] Tracking de conversiones configurado
- [ ] Monitoreo de posiciones activado

---

# ANEXO: VARIABLES CSS COMPLETAS

```css
/* === LUMINAPRO DESIGN SYSTEM === */
/* Copiar al inicio del <style> de cada página */

:root {
  /* === COLORES === */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #1a1a1a;
  --color-bg-tertiary: #141414;
  --color-bg-light: #f5f5f0;
  --color-bg-warm: #1c1815;

  --color-accent: #d4a84b;
  --color-accent-hover: #e5b95c;
  --color-accent-warm: #e8c07d;
  --color-accent-light: #f4d59e;

  --color-text-light: #f5f5f0;
  --color-text-dark: #1a1a1a;
  --color-text-muted: #888888;
  --color-text-warm: #d4c4b0;

  --color-border: #333333;
  --color-border-light: #e0e0e0;
  --color-divider: #2a2a2a;

  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-whatsapp: #25d366;

  --color-overlay: rgba(0, 0, 0, 0.7);

  /* === TIPOGRAFÍA === */
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  --text-hero: 4rem;
  --text-h1: 3rem;
  --text-h2: 2.25rem;
  --text-h3: 1.5rem;
  --text-h4: 1.25rem;
  --text-body: 1.125rem;
  --text-body-small: 1rem;
  --text-caption: 0.875rem;
  --text-small: 0.75rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* === ESPACIADO === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 2.5rem;
  --space-8: 3rem;
  --space-9: 4rem;
  --space-10: 5rem;
  --space-11: 6rem;
  --space-12: 8rem;

  /* === BORDES === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* === SOMBRAS === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-glow: 0 0 20px rgba(212, 168, 75, 0.3);

  /* === TRANSICIONES === */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;

  /* === Z-INDEX === */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 700;
}

/* === RESET Y BASE === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.7;
  color: var(--color-text-light);
  background: var(--color-bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === TIPOGRAFÍA BASE === */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  font-weight: var(--font-weight-bold);
}

h1 {
  font-size: var(--text-h1);
}
h2 {
  font-size: var(--text-h2);
}
h3 {
  font-size: var(--text-h3);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
}
h4 {
  font-size: var(--text-h4);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
}

p {
  margin-bottom: var(--space-4);
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-base);
}

a:hover {
  color: var(--color-accent-hover);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* === UTILIDADES === */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.section {
  padding: var(--space-12) 0;
}

.section--dark {
  background: var(--color-bg-primary);
  color: var(--color-text-light);
}

.section--light {
  background: var(--color-bg-light);
  color: var(--color-text-dark);
}

.text-center {
  text-align: center;
}
.text-muted {
  color: var(--color-text-muted);
}
.text-accent {
  color: var(--color-accent);
}

/* === RESPONSIVE BASE === */
@media (max-width: 768px) {
  :root {
    --text-hero: 2.5rem;
    --text-h1: 2rem;
    --text-h2: 1.75rem;
    --text-h3: 1.25rem;
  }

  .section {
    padding: var(--space-10) 0;
  }
}
```

---

# FIN DEL DOCUMENTO

Este documento define el estándar completo de LUMINAPRO.

**Uso obligatorio**: Proporcionar este documento junto con cualquier prompt de generación de página.

**Resultado esperado**: Páginas consistentes, profesionales, optimizadas para SEO y conversión.

---

_Versión 3.0 — Enero 2026_
_LUMINAPRO — Iluminación Profesional para Eventos_
