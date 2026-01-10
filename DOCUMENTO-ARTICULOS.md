# GUÍA PROFESIONAL DE CREACIÓN DE CONTENIDO PARA EL BLOG LUMINAPRO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Índice

1. [Introducción y Principios de Diseño SEO](#1-introducción-y-principios-de-diseño-seo)
2. [Arquitectura del Blog y Estructura de Archivos](#2-arquitectura-del-blog-y-estructura-de-archivos)
3. [Investigación de Keywords y Topic Clusters](#3-investigación-de-keywords-y-topic-clusters)
4. [Estructura HTML Semántica para Artículos](#4-estructura-html-semántica-para-artículos)
5. [Sistema de Estilos CSS y Diseño Responsive](#5-sistema-de-estilos-css-y-diseño-responsive)
6. [Integración con blog.html y Sistema de Cards](#6-integración-con-bloghtml-y-sistema-de-cards)
7. [Gestión Avanzada de Imágenes y Media](#7-gestión-avanzada-de-imágenes-y-media)
8. [SEO Técnico: Schema, Open Graph y Meta Tags](#8-seo-técnico-schema-open-graph-y-meta-tags)
9. [Estrategia de Internal Linking y Topic Clusters](#9-estrategia-de-internal-linking-y-topic-clusters)
10. [Checklist de Publicación y Quality Assurance](#10-checklist-de-publicación-y-quality-assurance)
11. [Métricas de Rendimiento y KPIs de Contenido](#11-métricas-de-rendimiento-y-kpis-de-contenido)
12. [Plantilla Completa de Artículo](#12-plantilla-completa-de-artículo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. Introducción y Principios de Diseño SEO

Este documento establece el marco metodológico profesional para la creación de contenido optimizado en el blog de LUMINAPRO. Seguir estos lineamientos garantiza consistencia visual, excelencia técnica SEO y máximo rendimiento en motores de búsqueda.

### 1.1 Objetivos del Content Marketing

| Objetivo | Descripción | Métrica Clave |
|----------|-------------|---------------|
| **Capturar tráfico informacional** | 45% de búsquedas del sector que competidores no atienden | Sesiones orgánicas |
| **Posicionar autoridad técnica** | LUMINAPRO como experto en iluminación para eventos | Rankings en keywords técnicas |
| **Generar leads cualificados** | Contenido educativo TOFU/MOFU → conversiones | Tasa de conversión blog |
| **Construir autoridad de dominio** | Backlinks naturales desde contenido valioso | Domain Authority (DA) |
| **Nutrir prospectos** | Contenido relevante en cada etapa del buyer journey | Engagement y tiempo en página |

### 1.2 Funnel de Contenido

```
┌─────────────────────────────────────────────────────────────────┐
│                    BUYER JOURNEY - LUMINAPRO                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TOFU (Top of Funnel) - AWARENESS                              │
│  └─► "¿Qué es un Sky Tracker?"                                 │
│  └─► "Tendencias de iluminación para eventos"                  │
│  └─► "Tipos de iluminación para bodas"                         │
│                           ↓                                     │
│  MOFU (Middle of Funnel) - CONSIDERATION                       │
│  └─► "Sky Tracker vs Reflector tradicional"                    │
│  └─► "Guía completa de iluminación para bodas"                 │
│  └─► "Cómo elegir cabezas móviles para tu evento"              │
│                           ↓                                     │
│  BOFU (Bottom of Funnel) - DECISION                            │
│  └─► Páginas de servicio (guirnaldas.html, laser.html)         │
│  └─► Testimonios y casos de éxito                              │
│  └─► Página de contacto/cotización                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Sistema de Diseño Visual

El blog mantiene coherencia con la identidad visual de LUMINAPRO, transmitiendo profesionalismo y especialización técnica:

| Elemento | Valor | Uso |
|----------|-------|-----|
| **Color primario** | `#D4A84B` (dorado) | Acentos, CTAs, highlights |
| **Color de fondo** | `#0A0A0A` (negro profundo) | Background principal |
| **Color secundario** | `#1A1A1A` (gris oscuro) | Cards, secciones |
| **Texto principal** | `#F5F5F0` (crema claro) | Párrafos, títulos |
| **Texto secundario** | `#888888` (gris medio) | Meta info, captions |
| **Fuente títulos** | Playfair Display | H1, H2, H3 |
| **Fuente cuerpo** | Inter | Párrafos, navegación |
| **Border radius** | 12px - 16px | Cards, botones |

---

## 2. Arquitectura del Blog y Estructura de Archivos

### 2.1 Estructura de Directorios

La organización de archivos sigue una estructura lógica que facilita el mantenimiento y optimiza el crawling de Google:

```
LUMINAPRO/
├── index.html                    # Homepage principal
├── blog.html                     # Índice del blog (listado de artículos)
├── blog/                         # Carpeta de artículos individuales
│   ├── iluminacion-perfecta-boda.html
│   ├── tendencias-iluminacion-2024.html
│   ├── sky-tracker-que-es-para-que-sirve.html
│   └── [nuevos-articulos].html
├── img/                          # Imágenes organizadas por categoría
│   ├── cabezas-moviles/          # Fotos de cabezas móviles, beam, wash
│   ├── city-color/               # Uplighting, ambientación eventos
│   ├── gobos/                    # Proyecciones personalizadas
│   ├── guirnaldas/               # String lights, Edison
│   ├── laser/                    # Efectos láser
│   ├── neon/                     # Letreros y luz neón
│   ├── seguidor-de-luz/          # Follow spot
│   └── skytracker/               # Reflectores de búsqueda
├── sitemap.xml                   # Mapa del sitio para Google
└── robots.txt                    # Directivas de crawling
```

### 2.2 Convenciones de Nomenclatura SEO

Los nombres de archivo deben optimizarse para SEO y legibilidad:

| Criterio | Correcto ✅ | Incorrecto ❌ |
|----------|-------------|---------------|
| **Minúsculas** | `iluminacion-bodas.html` | `Iluminacion-Bodas.html` |
| **Guiones (no guiones bajos)** | `sky-tracker-guia.html` | `sky_tracker_guia.html` |
| **Sin caracteres especiales** | `iluminacion-xv-anos.html` | `iluminación-xv-años.html` |
| **Keyword principal** | `gobos-personalizados-eventos.html` | `articulo-12.html` |
| **Máximo 4-5 palabras** | `laser-eventos-seguridad.html` | `todo-sobre-como-usar-laser-en-eventos-de-forma-segura.html` |
| **Descriptivo** | `guirnaldas-bodas-exterior.html` | `post-nuevo.html` |

### 2.3 Jerarquía de URLs

```
https://luminapro.mx/                          ← Homepage (DA principal)
https://luminapro.mx/blog.html                 ← Índice del blog
https://luminapro.mx/blog/[articulo].html      ← Artículos individuales
https://luminapro.mx/[servicio].html           ← Páginas de servicio (pillar)
```

---

## 3. Investigación de Keywords y Topic Clusters

### 3.1 Metodología de Selección de Temas

Cada artículo debe responder a una intención de búsqueda específica. Clasificamos los temas según su posición en el funnel:

| Tipo de Intención | Características | Ejemplos de Keywords |
|-------------------|-----------------|----------------------|
| **Informacional (TOFU)** | Usuario busca aprender | "qué es sky tracker", "tipos de iluminación eventos" |
| **Investigación (MOFU)** | Usuario compara opciones | "sky tracker vs reflector", "mejor iluminación bodas" |
| **Transaccional (BOFU)** | Usuario listo para actuar | "renta sky tracker CDMX", "cotizar iluminación boda" |
| **Navegacional** | Usuario busca marca/sitio | "LUMINAPRO", "luminapro contacto" |

### 3.2 Topic Clusters para LUMINAPRO

Organizamos el contenido en clusters temáticos que fortalecen la autoridad topical:

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLUSTER: ILUMINACIÓN BODAS                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌──────────────────┐                        │
│                    │  PÁGINA PILLAR   │                        │
│                    │  guirnaldas.html │                        │
│                    │  city-color.html │                        │
│                    └────────┬─────────┘                        │
│                             │                                   │
│         ┌───────────────────┼───────────────────┐              │
│         │                   │                   │              │
│         ▼                   ▼                   ▼              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐        │
│  │  Artículo   │    │  Artículo   │    │  Artículo   │        │
│  │   TOFU      │    │   MOFU      │    │   MOFU      │        │
│  │             │    │             │    │             │        │
│  │ "Tipos de   │    │ "Guía       │    │ "Cómo       │        │
│  │ iluminación │◄──►│ completa    │◄──►│ elegir      │        │
│  │ para bodas" │    │ iluminación │    │ uplighting" │        │
│  └─────────────┘    │ boda"       │    └─────────────┘        │
│                     └─────────────┘                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Clusters principales de LUMINAPRO:**

| Cluster | Página Pillar | Artículos de Soporte |
|---------|---------------|----------------------|
| **Bodas** | `guirnaldas.html`, `city-color.html` | Guía iluminación boda, uplighting, decoración |
| **XV Años** | `cabezas-moviles.html` | Ideas XV años, vals, decoración quinceañera |
| **Corporativo** | `gobos.html`, `seguidor-luz.html` | Gobos personalizados, branding eventos |
| **Sky Tracker** | `sky-tracker.html` | Qué es, usos, comparativas |
| **Láser** | `laser.html` | Seguridad láser, tipos de shows |
| **Tendencias** | `blog.html` | Tendencias anuales, nuevas tecnologías |

### 3.3 Ficha de Planificación del Artículo

Antes de escribir cualquier artículo, completar esta ficha técnica:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         FICHA DE PLANIFICACIÓN DE ARTÍCULO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMACIÓN BÁSICA
─────────────────────────────────────────────
Título completo:     [________________________________]
Título para card:    [________________] (máx 60 chars)
Nombre archivo:      [____________].html
Categoría:           [ ] Bodas  [ ] XV Años  [ ] Corporativo
                     [ ] Tendencias  [ ] Guías  [ ] Técnico

KEYWORDS Y SEO
─────────────────────────────────────────────
Keyword principal:   [________________________________]
Keywords secundarias: [______], [______], [______]
Intención búsqueda:  [ ] TOFU  [ ] MOFU  [ ] BOFU
Volumen estimado:    [____] búsquedas/mes
Dificultad:          [ ] Baja  [ ] Media  [ ] Alta

CONTENIDO
─────────────────────────────────────────────
Palabra destacada (dorada): [________________]
Meta description:    [________________________________]
                     (150-160 caracteres)
Tiempo de lectura:   [__] minutos
Número de palabras:  [____] palabras

ELEMENTOS VISUALES
─────────────────────────────────────────────
Imagen principal:    img/[______]/[__________].webp
Imágenes secundarias:
  1. img/[______]/[__________].webp
  2. img/[______]/[__________].webp
  3. img/[______]/[__________].webp

ENLACES INTERNOS
─────────────────────────────────────────────
Página pillar:       [________________].html
Artículos relacionados:
  1. blog/[________________].html
  2. blog/[________________].html
Servicios a enlazar:
  1. [________________].html
  2. [________________].html

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 4. Estructura HTML Semántica para Artículos

### 4.1 Anatomía de un Artículo Optimizado

Cada artículo sigue una estructura HTML semántica que maximiza la comprensión de Google y la experiencia de usuario:

```
┌─────────────────────────────────────────────────────────────────┐
│                         <head>                                  │
│  ├── Meta tags primarios (title, description, robots)          │
│  ├── Open Graph (Facebook, LinkedIn)                           │
│  ├── Twitter Cards                                             │
│  ├── Schema.org JSON-LD (BlogPosting, BreadcrumbList)         │
│  └── CSS y preloads                                            │
├─────────────────────────────────────────────────────────────────┤
│                         <body>                                  │
│  ├── <header> Navegación principal                             │
│  ├── <main>                                                    │
│  │   ├── <section class="breadcrumb-section">                  │
│  │   │   └── Migas de pan con Schema                          │
│  │   ├── <section class="article-hero">                        │
│  │   │   ├── Columna izquierda: Título + Meta                 │
│  │   │   └── Columna derecha: Introducción                    │
│  │   └── <section class="article-section">                     │
│  │       ├── <article> Contenido principal                    │
│  │       └── <aside> Sidebar (relacionados, servicios, CTA)   │
│  ├── <footer> Pie de página                                   │
│  └── WhatsApp flotante + Scripts                              │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Estructura del `<head>` Completa

El head debe incluir todos los meta tags necesarios para SEO técnico:

#### Meta Tags Primarios

| Meta Tag | Especificación | Ejemplo |
|----------|----------------|---------|
| `<title>` | 50-60 chars, keyword al inicio, marca al final | "Guía de Iluminación para Bodas \| LUMINAPRO" |
| `<meta name="description">` | 150-160 chars, persuasivo con CTA | "Descubre cómo elegir la iluminación perfecta para tu boda. Guía completa con tips de expertos. ¡Cotiza gratis!" |
| `<meta name="keywords">` | 5-8 keywords separadas por coma | "iluminación bodas, guirnaldas boda, uplighting, luz eventos" |
| `<meta name="robots">` | Directivas de indexación | "index, follow, max-image-preview:large" |
| `<link rel="canonical">` | URL canónica absoluta | "https://luminapro.mx/blog/iluminacion-bodas.html" |

#### Open Graph (Facebook/LinkedIn)

```html
<meta property="og:type" content="article">
<meta property="og:site_name" content="LUMINAPRO">
<meta property="og:url" content="https://luminapro.mx/blog/[ARCHIVO].html">
<meta property="og:title" content="[TÍTULO - puede diferir del title tag]">
<meta property="og:description" content="[DESCRIPCIÓN optimizada para shares]">
<meta property="og:image" content="https://luminapro.mx/[IMAGEN-1200x630].webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_MX">
<meta property="article:author" content="LUMINAPRO">
<meta property="article:section" content="[CATEGORÍA]">
<meta property="article:tag" content="[TAG1]">
<meta property="article:tag" content="[TAG2]">
```

#### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@luminapro_mx">
<meta name="twitter:creator" content="@luminapro_mx">
<meta name="twitter:title" content="[TÍTULO]">
<meta name="twitter:description" content="[DESCRIPCIÓN]">
<meta name="twitter:image" content="https://luminapro.mx/[IMAGEN].webp">
<meta name="twitter:image:alt" content="[ALT accesible de la imagen]">
```

### 4.3 Hero de Artículo (Diseño Dos Columnas)

```html
<!-- BREADCRUMB SECTION -->
<section class="breadcrumb-section" aria-label="Ruta de navegación">
    <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../"><i class="fas fa-home" aria-hidden="true"></i> Inicio</a>
            <i class="fas fa-circle" aria-hidden="true"></i>
            <a href="../blog.html">Blog</a>
            <i class="fas fa-circle" aria-hidden="true"></i>
            <span>[Título Corto]</span>
        </nav>
    </div>
</section>

<!-- ARTICLE HERO - TWO COLUMNS -->
<section class="article-hero" aria-labelledby="article-title">
    <div class="container">
        <div class="article-hero-grid">
            <!-- Columna Izquierda: Título y Meta -->
            <div class="article-hero-left">
                <span class="article-category">[Categoría]</span>
                <h1 id="article-title">[Inicio del título] <span>[Palabra Destacada]</span> [resto del título]</h1>
                <div class="article-meta">
                    <span class="article-meta-item"><i class="far fa-clock" aria-hidden="true"></i> [X] min de lectura</span>
                    <span class="article-meta-item"><i class="far fa-eye" aria-hidden="true"></i> [X,XXX] vistas</span>
                    <span class="article-meta-item"><i class="far fa-user" aria-hidden="true"></i> Por LUMINAPRO</span>
                </div>
            </div>

            <!-- Columna Derecha: Introducción -->
            <div class="article-hero-right">
                <div class="article-intro">
                    <p><strong>[Frase inicial enganchadora]</strong> [continuación del primer párrafo que establece contexto y relevancia del tema].</p>
                    <p>[Segundo párrafo explicando qué encontrará el lector y por qué es valioso].</p>
                    <div class="article-intro-highlight">
                        <i class="fas fa-lightbulb" aria-hidden="true"></i>
                        <p>[Mensaje clave o promesa del artículo en una oración].</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 4.4 Estructura del Contenido Principal

```html
<section class="article-section">
    <div class="container">
        <div class="article-layout">
            <!-- CONTENIDO DEL ARTÍCULO -->
            <article class="article-content">
                <div class="article-body">

                    <!-- Sección con H2 (incluir ID para tabla de contenidos) -->
                    <h2 id="seccion-1">[Título de la Sección]</h2>
                    <p>[Contenido del párrafo con <strong>palabras clave en negrita</strong>...]</p>

                    <!-- Subsección con H3 -->
                    <h3>[Subtítulo]</h3>
                    <p>[Más contenido...]</p>

                    <!-- Lista con bullets dorados -->
                    <ul>
                        <li>[Item 1 - beneficio o punto clave]</li>
                        <li>[Item 2]</li>
                        <li>[Item 3]</li>
                    </ul>

                    <!-- Imagen con figure y caption -->
                    <figure>
                        <img src="../img/[carpeta]/[imagen].webp"
                             alt="[Descripción detallada con keywords]"
                             loading="lazy">
                        <figcaption>[Texto descriptivo de la imagen]</figcaption>
                    </figure>

                    <!-- Caja de tip/consejo -->
                    <div class="tip-box">
                        <div class="tip-box-header">
                            <i class="fas fa-lightbulb"></i>
                            Consejo Profesional
                        </div>
                        <p>[Texto del consejo importante que aporta valor]</p>
                    </div>

                    <!-- Enlace interno a servicio (importante para SEO) -->
                    <p>Conoce más sobre nuestro servicio de <a href="../[servicio].html">[nombre del servicio]</a>.</p>

                    <!-- Conclusión -->
                    <h2>Conclusión</h2>
                    <p>[Párrafo de cierre resumiendo puntos clave]</p>
                    <p>En LUMINAPRO estamos listos para [propuesta de valor]. <a href="../contacto.html">Contáctanos</a> y [llamado a la acción].</p>

                </div>

                <!-- FOOTER DEL ARTÍCULO -->
                <div class="article-footer">
                    <div class="article-tags">
                        <span class="article-tags-label">Etiquetas:</span>
                        <a href="#" class="article-tag">[Tag 1]</a>
                        <a href="#" class="article-tag">[Tag 2]</a>
                        <a href="#" class="article-tag">[Tag 3]</a>
                    </div>
                    <div class="article-share">
                        <span class="article-share-label">Compartir:</span>
                        <div class="article-share-links">
                            <a href="#" class="article-share-link"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="article-share-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="article-share-link"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- SIDEBAR -->
            <aside class="blog-sidebar">
                <!-- Ver sección 6.3 para widgets del sidebar -->
            </aside>
        </div>
    </div>
</section>
```

---

## 5. Sistema de Estilos CSS y Diseño Responsive

### 5.1 Variables CSS del Sistema de Diseño

Todas las variables CSS están centralizadas en `:root` para facilitar el mantenimiento:

```css
:root {
    /* ═══════════════════════════════════════
       COLORES DE MARCA
    ═══════════════════════════════════════ */
    --color-bg-primary: #0A0A0A;      /* Negro profundo - fondo principal */
    --color-bg-secondary: #1A1A1A;    /* Gris oscuro - cards, secciones */
    --color-accent: #D4A84B;          /* Dorado LUMINAPRO - acentos, CTAs */
    --color-accent-hover: #E5B95C;    /* Dorado claro - hover states */
    --color-text-light: #F5F5F0;      /* Crema - texto principal */
    --color-text-muted: #888888;      /* Gris - texto secundario, meta */
    --color-whatsapp: #25D366;        /* Verde WhatsApp */

    /* ═══════════════════════════════════════
       TIPOGRAFÍA
    ═══════════════════════════════════════ */
    --font-heading: 'Playfair Display', serif;  /* Títulos elegantes */
    --font-body: 'Inter', sans-serif;           /* Cuerpo legible */

    /* ═══════════════════════════════════════
       SISTEMA DE ESPACIADO Y BORDES
    ═══════════════════════════════════════ */
    --transition: 0.3s ease;
    --radius-sm: 8px;    /* Botones pequeños, tags */
    --radius-md: 12px;   /* Cards, inputs */
    --radius-lg: 16px;   /* Contenedores grandes */
}
```

### 5.2 Estilos del Hero (Dos Columnas)

```css
/* ═══════════════════════════════════════
   BREADCRUMB SECTION
═══════════════════════════════════════ */
.breadcrumb-section {
    background: linear-gradient(90deg,
        rgba(212, 168, 75, 0.08) 0%,
        rgba(26, 26, 26, 1) 50%,
        rgba(212, 168, 75, 0.08) 100%);
    border-bottom: 1px solid rgba(212, 168, 75, 0.15);
    padding: 1rem 0;
    padding-top: 120px;  /* Espacio para header fijo */
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.03em;
}

.breadcrumb a {
    color: var(--color-text-muted);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.breadcrumb a:hover { color: var(--color-accent); }
.breadcrumb a i { font-size: 0.75rem; color: var(--color-accent); }
.breadcrumb > i { font-size: 0.5rem; color: rgba(255, 255, 255, 0.3); }
.breadcrumb span { color: var(--color-text-light); font-weight: 600; }

/* ═══════════════════════════════════════
   ARTICLE HERO - TWO COLUMN LAYOUT
═══════════════════════════════════════ */
.article-hero {
    padding: 80px 0 100px;
    background: linear-gradient(135deg,
        var(--color-bg-primary) 0%,
        var(--color-bg-secondary) 50%,
        #0f0f0f 100%);
    position: relative;
    overflow: hidden;
}

/* Gradientes decorativos */
.article-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
        radial-gradient(ellipse at 20% 80%, rgba(212, 168, 75, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(212, 168, 75, 0.08) 0%, transparent 50%);
    pointer-events: none;
}

/* Línea dorada inferior */
.article-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212, 168, 75, 0.3), transparent);
}

/* Grid de dos columnas */
.article-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

/* Columna izquierda */
.article-hero-left { padding-right: 2rem; }

.article-category {
    display: inline-block;
    background: rgba(212, 168, 75, 0.15);
    color: var(--color-accent);
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(212, 168, 75, 0.3);
}

.article-hero-left h1 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    line-height: 1.2;
    margin-bottom: 1.75rem;
}

.article-hero-left h1 span { color: var(--color-accent); }

.article-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.article-meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.article-meta-item i { color: var(--color-accent); }

/* Columna derecha */
.article-hero-right {
    position: relative;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Comillas decorativas */
.article-hero-right::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 2rem;
    font-family: var(--font-heading);
    font-size: 6rem;
    color: rgba(212, 168, 75, 0.15);
    line-height: 1;
}

.article-intro { position: relative; z-index: 1; }

.article-intro p {
    font-size: 1.0625rem;
    line-height: 1.9;
    color: rgba(245, 245, 240, 0.85);
    margin-bottom: 1.5rem;
}

.article-intro strong { color: var(--color-accent); font-weight: 600; }

/* Caja de highlight */
.article-intro-highlight {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: rgba(212, 168, 75, 0.08);
    border: 1px solid rgba(212, 168, 75, 0.2);
    border-radius: var(--radius-md);
    padding: 1.25rem;
    margin-top: 1.5rem;
}

.article-intro-highlight i {
    color: var(--color-accent);
    font-size: 1.25rem;
}

.article-intro-highlight p {
    font-size: 0.9375rem;
    margin-bottom: 0;
}
```

### 5.3 Breakpoints Responsive

| Breakpoint | Dispositivo | Cambios Principales |
|------------|-------------|---------------------|
| `> 1200px` | Desktop grande | Layout completo |
| `1024px` | Tablet landscape | Grid 1 columna en hero |
| `768px` | Tablet portrait | Menú móvil, sidebar apilado |
| `375px` | Móvil pequeño | Tipografía reducida |

```css
/* ═══════════════════════════════════════
   RESPONSIVE - TABLET
═══════════════════════════════════════ */
@media (max-width: 1024px) {
    .article-hero-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .article-hero-left { padding-right: 0; }

    .article-hero-right {
        padding-left: 0;
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 2rem;
    }

    .article-hero-right::before { display: none; }

    .article-layout { grid-template-columns: 1fr; }

    .blog-sidebar {
        position: static;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* ═══════════════════════════════════════
   RESPONSIVE - MOBILE
═══════════════════════════════════════ */
@media (max-width: 768px) {
    .breadcrumb-section { padding-top: 100px; }

    .article-hero { padding: 50px 0 60px; }

    .article-hero-left h1 { font-size: 1.75rem; }

    .article-meta { gap: 1rem; }

    .article-intro p { font-size: 1rem; }

    .article-content { padding: 1.5rem; }

    .blog-sidebar { grid-template-columns: 1fr; }
}
```

---

## 6. Integración con blog.html y Sistema de Cards

### 6.1 Ubicación y Orden de las Cards

Las cards de artículos se organizan **cronológicamente (más reciente primero)** dentro de la estructura del blog:

```
blog.html
└── .blog-section
    └── .blog-layout
        └── .blog-posts
            ├── .blog-card-featured  ← Artículo destacado (hero grande)
            └── .blog-grid
                ├── .blog-card       ← NUEVO ARTÍCULO (insertar aquí)
                ├── .blog-card       ← Artículo anterior 1
                ├── .blog-card       ← Artículo anterior 2
                └── ...
```

**Regla de ordenamiento:** Al agregar un nuevo artículo:
1. Si es el **artículo destacado**, reemplazar `.blog-card-featured`
2. Si es un **artículo regular**, insertar como **primer elemento** de `.blog-grid`
3. Los artículos anteriores se desplazan hacia abajo automáticamente

### 6.2 Anatomía de una Card de Blog

Cada card debe incluir estos elementos para maximizar CTR y engagement:

```html
<!-- Post [N] - [Nombre del artículo] -->
<article class="blog-card">
    <a href="blog/[nombre-archivo].html" class="blog-card-img">
        <span class="blog-card-category">[Categoría]</span>
        <img src="img/[carpeta]/[imagen].webp"
             alt="[Descripción con keywords]"
             loading="lazy">
    </a>
    <div class="blog-card-content">
        <div class="blog-card-meta">
            <span><i class="far fa-clock"></i> [X] min lectura</span>
            <span><i class="far fa-eye"></i> [X,XXX] vistas</span>
        </div>
        <h3>[Título del Artículo - máximo 60 caracteres]</h3>
        <p class="blog-card-excerpt">[Descripción enganchadora del artículo - 150-200 caracteres que resuma el contenido y genere curiosidad]</p>
        <a href="blog/[nombre-archivo].html" class="blog-card-link">[Keyword del artículo] <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

**IMPORTANTE - Texto del enlace SEO:**
El texto del enlace debe contener **keywords relevantes** del artículo, NO usar texto genérico como "Leer más".

| Artículo | Texto del enlace ✅ |
|----------|---------------------|
| Iluminación para bodas | "Guía de iluminación para bodas" |
| Luz neón para fiestas | "Guía de luz neón para fiestas" |
| Tendencias iluminación | "Tendencias de iluminación" |
| Guirnaldas de luz | "Guía de guirnaldas de luz" |

### 6.3 Estilos de las Cards

```css
/* ═══════════════════════════════════════
   BLOG CARDS (sin animaciones)
═══════════════════════════════════════ */
.blog-card {
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
}

.blog-card-img {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16/10;
}

.blog-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-card-category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--color-accent);
    color: var(--color-bg-primary);
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.blog-card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.blog-card-meta {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    color: var(--color-text-muted);
}

.blog-card-meta i { color: var(--color-accent); }

.blog-card h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.3;
}

.blog-card-excerpt {
    color: var(--color-text-muted);
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.blog-card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.9375rem;
    margin-top: auto;
}
```

### 6.4 Widgets del Sidebar

```html
<aside class="blog-sidebar">
    <!-- Widget: Artículos Relacionados -->
    <div class="sidebar-widget">
        <h3 class="sidebar-widget-title"><i class="fas fa-newspaper"></i> Relacionados</h3>
        <div class="sidebar-related">
            <a href="[articulo].html" class="sidebar-related-item">
                <div class="sidebar-related-img">
                    <img src="../img/[carpeta]/[imagen].webp" alt="[Alt]" loading="lazy">
                </div>
                <div class="sidebar-related-content">
                    <h4>[Título artículo relacionado]</h4>
                    <span><i class="far fa-clock"></i> [X] min lectura</span>
                </div>
            </a>
            <!-- Repetir para 2-3 artículos -->
        </div>
    </div>

    <!-- Widget: Servicios -->
    <div class="sidebar-widget">
        <h3 class="sidebar-widget-title"><i class="fas fa-lightbulb"></i> Servicios</h3>
        <div class="sidebar-services">
            <a href="../cabezas-moviles.html" class="sidebar-service"><i class="fas fa-circle-dot"></i> Cabezas Móviles</a>
            <a href="../city-color.html" class="sidebar-service"><i class="fas fa-fill-drip"></i> City Color</a>
            <a href="../laser.html" class="sidebar-service"><i class="fas fa-bolt"></i> Iluminación Láser</a>
            <a href="../guirnaldas.html" class="sidebar-service"><i class="fas fa-star"></i> Guirnaldas</a>
            <a href="../servicios.html" class="sidebar-service"><i class="fas fa-grip"></i> Ver Todos</a>
        </div>
    </div>

    <!-- Widget: CTA -->
    <div class="sidebar-widget sidebar-cta">
        <h3>¿Necesitas Asesoría?</h3>
        <p>Cotiza tu evento sin compromiso con nuestros expertos.</p>
        <a href="../contacto.html" class="btn">Cotización Gratis</a>
    </div>

    <!-- Widget: Contacto -->
    <div class="sidebar-widget">
        <h3 class="sidebar-widget-title"><i class="fas fa-headset"></i> Contacto</h3>
        <div class="sidebar-contact-info">
            <div class="sidebar-contact-item">
                <i class="fas fa-phone"></i>
                <span><a href="tel:5527221736">55 2722 1736</a></span>
            </div>
            <div class="sidebar-contact-item">
                <i class="fab fa-whatsapp"></i>
                <span><a href="https://wa.me/5527221736">WhatsApp</a></span>
            </div>
            <div class="sidebar-contact-item">
                <i class="fas fa-envelope"></i>
                <span><a href="mailto:contacto@luminapro.mx">contacto@luminapro.mx</a></span>
            </div>
        </div>
    </div>
</aside>
```

---

## 7. Gestión Avanzada de Imágenes y Media

### 7.1 Carpetas de Imágenes Disponibles

| Carpeta | Contenido | Uso Recomendado |
|---------|-----------|-----------------|
| `img/cabezas-moviles/` | Beam, wash, spot, instalaciones | Artículos técnicos, eventos energéticos |
| `img/city-color/` | Uplighting, ambientación, salones | Bodas, XV años, eventos elegantes |
| `img/gobos/` | Proyecciones, logos, monogramas | Corporativo, personalización, branding |
| `img/guirnaldas/` | String lights, Edison, exteriores | Bodas rusticas, jardines, terrazas |
| `img/laser/` | Shows láser, efectos, conciertos | Artículos técnicos, fiestas, festivales |
| `img/neon/` | Letreros neón, luz decorativa | Tendencias, decoración moderna |
| `img/seguidor-de-luz/` | Follow spot, teatros | Artículos técnicos, eventos formales |
| `img/skytracker/` | Reflectores cielo, inauguraciones | Eventos grandes, lanzamientos |

### 7.2 Optimización de Imágenes para SEO

| Aspecto | Especificación | Herramientas |
|---------|----------------|--------------|
| **Formato** | WebP (preferido), JPEG fallback | Squoosh, TinyPNG |
| **Dimensiones Card** | 800x500px (16:10) | - |
| **Dimensiones OG** | 1200x630px mínimo | - |
| **Peso máximo** | < 100KB por imagen | ImageOptim |
| **Lazy loading** | `loading="lazy"` en imágenes secundarias | Nativo HTML |
| **Alt text** | Descriptivo + keywords, 50-125 chars | - |

### 7.3 Nomenclatura de Imágenes SEO

```
Formato: [tema]-[descripcion]-[contexto].webp

Ejemplos correctos:
✅ iluminacion-boda-primer-baile-novios.webp
✅ gobos-logo-corporativo-proyeccion-pared.webp
✅ guirnaldas-edison-terraza-jardin-noche.webp

Ejemplos incorrectos:
❌ IMG_2847.webp
❌ foto-evento.jpg
❌ imagen_sin_nombre.png
```

### 7.4 Atributos Alt Optimizados

El texto alternativo debe ser:
- **Descriptivo** del contenido visual
- **Incluir keywords** relevantes naturalmente
- **Entre 50-125 caracteres**
- **No comenzar con** "Imagen de..." o "Foto de..."

**Ejemplos:**

```html
<!-- ✅ Correcto -->
alt="Iluminación ámbar cálida para primer baile de novios en boda elegante"
alt="Proyección de gobos personalizados con logo corporativo en evento empresarial"
alt="Guirnaldas Edison decorando terraza de hacienda para boda al aire libre"

<!-- ❌ Incorrecto -->
alt="imagen"
alt="foto de boda"
alt="Imagen de luces en un evento"
```

---

## 8. SEO Técnico: Schema, Open Graph y Meta Tags

### 8.1 Schema.org JSON-LD para Artículos

Cada artículo debe incluir Schema `BlogPosting` para habilitar rich snippets en Google:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://luminapro.mx/blog/[ARCHIVO].html"
    },
    "headline": "[TÍTULO - máx 110 caracteres]",
    "description": "[META DESCRIPTION]",
    "image": {
        "@type": "ImageObject",
        "url": "https://luminapro.mx/img/[IMAGEN].webp",
        "width": 1200,
        "height": 630
    },
    "author": {
        "@type": "Organization",
        "name": "LUMINAPRO",
        "url": "https://luminapro.mx"
    },
    "publisher": {
        "@type": "Organization",
        "name": "LUMINAPRO",
        "logo": {
            "@type": "ImageObject",
            "url": "https://luminapro.mx/img/luminapro-logo.png",
            "width": 300,
            "height": 100
        }
    },
    "articleSection": "[CATEGORÍA]",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "wordCount": [NÚMERO]
}
</script>
```

**Campos obligatorios del Schema BlogPosting:**

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `headline` | Título del artículo (máx 110 chars) | "Guía Completa de Iluminación para Bodas" |
| `description` | Resumen del contenido | "Descubre cómo elegir la iluminación perfecta..." |
| `image` | URL absoluta de imagen principal | Object con url, width, height |
| `author` | Autor (Organization o Person) | LUMINAPRO |
| `publisher` | Editorial con logo | LUMINAPRO + logo |
| `articleSection` | Categoría del artículo | "Bodas", "Tendencias" |
| `keywords` | Array de keywords | ["bodas", "iluminación", "guirnaldas"] |

### 8.2 BreadcrumbList Schema

```html
<script type="application/ld+json">
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
            "name": "Blog",
            "item": "https://luminapro.mx/blog.html"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "[TÍTULO CORTO]",
            "item": "https://luminapro.mx/blog/[ARCHIVO].html"
        }
    ]
}
</script>
```

### 8.3 Actualización de sitemap.xml

Al publicar un nuevo artículo, agregar entrada en `sitemap.xml`:

```xml
<url>
    <loc>https://luminapro.mx/blog/[nombre-archivo].html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>
```

### 8.4 Actualización del Schema en blog.html

Agregar el nuevo artículo al Schema del blog principal:

```json
{
    "@type": "BlogPosting",
    "headline": "[Título del nuevo artículo]",
    "description": "[Descripción]",
    "url": "https://luminapro.mx/blog/[nombre-archivo].html",
    "author": {
        "@type": "Organization",
        "name": "LUMINAPRO"
    }
}
```

---

## 9. Estrategia de Internal Linking y Topic Clusters

### 9.1 Principios de Enlazado Interno

El internal linking es **crítico** para distribuir PageRank, facilitar el crawling y establecer relevancia temática:

| Principio | Implementación |
|-----------|----------------|
| **Anchor text descriptivo** | Usar keywords en el texto del enlace, no "clic aquí" |
| **Contexto relevante** | Enlaces dentro de párrafos relacionados temáticamente |
| **Bidireccionalidad** | Si A enlaza a B, B debe enlazar a A |
| **Profundidad máxima** | Todo contenido accesible en ≤3 clics desde homepage |
| **Enlaces a pillar pages** | Cada artículo del cluster enlaza a su página pillar |

### 9.2 Estructura de Enlaces por Cluster

**Ejemplo: Cluster "Iluminación para Bodas"**

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLUSTER: BODAS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PÁGINAS PILLAR (reciben enlaces de todos los artículos):      │
│  ├── guirnaldas.html                                           │
│  └── city-color.html                                           │
│                                                                 │
│  ARTÍCULOS DEL CLUSTER (se enlazan entre sí):                  │
│  ├── blog/iluminacion-perfecta-boda.html                       │
│  │   └─► Enlaces a: guirnaldas.html, city-color.html,          │
│  │       cabezas-moviles.html, articulo-2, articulo-3          │
│  │                                                              │
│  ├── blog/guirnaldas-bodas-exterior.html                       │
│  │   └─► Enlaces a: guirnaldas.html, iluminacion-perfecta-boda │
│  │                                                              │
│  └── blog/uplighting-transformar-salon.html                    │
│      └─► Enlaces a: city-color.html, iluminacion-perfecta-boda │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Mínimo de Enlaces por Artículo

| Tipo de Enlace | Cantidad Mínima | Ubicación |
|----------------|-----------------|-----------|
| **A página pillar del cluster** | 1-2 | Dentro del contenido |
| **A otros artículos relacionados** | 2-3 | Contenido + Sidebar |
| **A páginas de servicio** | 2-4 | Contenido natural |
| **A página de contacto** | 1 | Conclusión/CTA |

### 9.4 Formato de Enlaces Internos

```html
<!-- Enlace contextual en párrafo (preferido) -->
<p>Las <a href="../guirnaldas.html">guirnaldas de luz</a> son perfectas
para crear ambientes románticos en ceremonias al aire libre.</p>

<!-- Enlace en lista de recursos -->
<ul>
    <li>Conoce nuestro servicio de <a href="../city-color.html">City Color</a></li>
    <li>Explora opciones de <a href="../cabezas-moviles.html">Cabezas Móviles</a></li>
</ul>

<!-- CTA de cierre -->
<p>¿Listo para iluminar tu boda? <a href="../contacto.html">Solicita tu cotización gratuita</a>.</p>
```

---

## 10. Checklist de Publicación y Quality Assurance

### 10.1 Pre-Publicación: Archivo del Artículo

#### Meta Tags y SEO Técnico
- [ ] `<title>` único, 50-60 chars, keyword al inicio
- [ ] `<meta name="description">` persuasivo, 150-160 chars
- [ ] `<meta name="keywords">` con 5-8 keywords relevantes
- [ ] `<link rel="canonical">` con URL absoluta correcta
- [ ] `<meta name="robots">` configurado como "index, follow"

#### Open Graph y Social
- [ ] `og:type` = "article"
- [ ] `og:title` y `og:description` optimizados para shares
- [ ] `og:image` con URL absoluta, mínimo 1200x630px
- [ ] `og:url` coincide con canonical
- [ ] Twitter Cards completas

#### Schema.org
- [ ] BlogPosting Schema con todos los campos obligatorios
- [ ] BreadcrumbList Schema con 3 niveles
- [ ] JSON-LD válido (verificar en Schema Validator)

#### Estructura del Contenido
- [ ] Breadcrumb correcto con enlaces funcionales
- [ ] Hero en dos columnas (título + introducción)
- [ ] Badge de categoría visible
- [ ] Palabra destacada en dorado en H1
- [ ] Meta información (tiempo, vistas, autor)
- [ ] Highlight box con icono

#### Contenido del Artículo
- [ ] H2 para cada sección principal (con IDs)
- [ ] H3 para subsecciones si necesario
- [ ] Párrafos concisos (3-4 oraciones máximo)
- [ ] Listas con bullets donde corresponda
- [ ] 2-3 imágenes con figure/figcaption
- [ ] Tip boxes para información destacada
- [ ] **Mínimo 3 enlaces internos** a servicios/artículos
- [ ] CTA de cierre con enlace a contacto
- [ ] Tags relevantes en article-footer

#### Sidebar
- [ ] Widget de artículos relacionados (2-3 items)
- [ ] Widget de servicios con iconos
- [ ] Widget CTA con botón
- [ ] Widget de contacto con datos actualizados

#### Técnico
- [ ] Todas las imágenes con `loading="lazy"` (excepto hero)
- [ ] Todos los iconos con `aria-hidden="true"`
- [ ] Atributos alt descriptivos en todas las imágenes
- [ ] Enlaces externos con `rel="noopener"`
- [ ] WhatsApp flotante funcional
- [ ] Scripts de navegación móvil

#### Responsive
- [ ] Verificado en desktop (1920px)
- [ ] Verificado en tablet (1024px, 768px)
- [ ] Verificado en móvil (375px)
- [ ] Menú móvil funcional

### 10.2 Post-Publicación: Actualizaciones

- [ ] **Card agregada en blog.html** (posición cronológica correcta)
- [ ] **sitemap.xml actualizado** con nueva URL
- [ ] **Schema en blog.html actualizado** con nuevo artículo
- [ ] **Solicitar indexación** en Google Search Console
- [ ] **Verificar en Facebook Debugger** (sharing preview)
- [ ] **Verificar en Twitter Card Validator**
- [ ] **Agregar enlaces** desde artículos relacionados existentes
- [ ] **Compartir en redes sociales** (Instagram, Facebook, LinkedIn)

---

## 11. Métricas de Rendimiento y KPIs de Contenido

### 11.1 KPIs por Artículo

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| **Posición promedio** | Top 10 para keyword principal | Google Search Console |
| **CTR orgánico** | > 3% para keywords principales | Google Search Console |
| **Tiempo en página** | > 2:30 minutos | Google Analytics |
| **Tasa de rebote** | < 65% | Google Analytics |
| **Páginas/sesión** | > 1.5 desde artículo | Google Analytics |
| **Conversiones** | Leads generados desde blog | Google Analytics Goals |
| **Backlinks** | > 1 backlink natural por artículo | Ahrefs, SEMrush |

### 11.2 Métricas del Blog General

| Métrica | Objetivo Mensual | Herramienta |
|---------|------------------|-------------|
| **Sesiones orgánicas blog** | +15% MoM | Google Analytics |
| **Nuevos usuarios blog** | +10% MoM | Google Analytics |
| **Keywords en Top 10** | +5 por mes | SEMrush, Ahrefs |
| **Domain Authority** | +1-2 puntos/trimestre | Moz |
| **Artículos indexados** | 100% en < 7 días | Google Search Console |

### 11.3 Proceso de Optimización Continua

```
┌─────────────────────────────────────────────────────────────────┐
│              CICLO DE OPTIMIZACIÓN DE CONTENIDO                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. PUBLICAR                                                    │
│     └─► Artículo optimizado según esta guía                    │
│                           ↓                                     │
│  2. MONITOREAR (30 días)                                       │
│     └─► Rankings, tráfico, engagement en GSC/GA                │
│                           ↓                                     │
│  3. ANALIZAR                                                    │
│     └─► ¿Alcanzó objetivos? ¿Qué mejorar?                     │
│                           ↓                                     │
│  4. OPTIMIZAR                                                   │
│     └─► Actualizar contenido, mejorar meta tags,              │
│         agregar enlaces, expandir secciones                    │
│                           ↓                                     │
│  5. RE-INDEXAR                                                  │
│     └─► Solicitar nueva indexación en GSC                      │
│                           │                                     │
│                           └──────────► Volver a paso 2         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 12. Plantilla Completa de Artículo

A continuación se presenta una plantilla completa lista para usar. **Copiar y reemplazar todos los valores entre corchetes `[...]`:**

```html
<!DOCTYPE html>
<html lang="es-MX" dir="ltr">
<head>
    <!-- ═══════════════════════════════════════
         META TAGS PRIMARIOS
    ═══════════════════════════════════════ -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>[TÍTULO DEL ARTÍCULO] | LUMINAPRO</title>

    <meta name="description" content="[META DESCRIPTION - 150-160 caracteres, persuasivo con CTA]">
    <meta name="keywords" content="[keyword1], [keyword2], [keyword3], [keyword4], [keyword5]">
    <meta name="author" content="LUMINAPRO - Iluminación Profesional">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <meta name="googlebot" content="index, follow">
    <meta name="language" content="Spanish">
    <meta name="copyright" content="LUMINAPRO">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://luminapro.mx/blog/[NOMBRE-ARCHIVO].html">

    <!-- Geo Tags -->
    <meta name="geo.region" content="MX-CMX">
    <meta name="geo.placename" content="Ciudad de México">

    <!-- ═══════════════════════════════════════
         OPEN GRAPH (Facebook/LinkedIn)
    ═══════════════════════════════════════ -->
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="LUMINAPRO">
    <meta property="og:url" content="https://luminapro.mx/blog/[NOMBRE-ARCHIVO].html">
    <meta property="og:title" content="[TÍTULO PARA SOCIAL - puede diferir]">
    <meta property="og:description" content="[DESCRIPCIÓN PARA SOCIAL]">
    <meta property="og:image" content="https://luminapro.mx/img/[CARPETA]/[IMAGEN].webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="[ALT DE LA IMAGEN]">
    <meta property="og:locale" content="es_MX">
    <meta property="article:author" content="LUMINAPRO">
    <meta property="article:section" content="[CATEGORÍA]">
    <meta property="article:tag" content="[TAG1]">
    <meta property="article:tag" content="[TAG2]">

    <!-- ═══════════════════════════════════════
         TWITTER CARDS
    ═══════════════════════════════════════ -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@luminapro_mx">
    <meta name="twitter:creator" content="@luminapro_mx">
    <meta name="twitter:title" content="[TÍTULO]">
    <meta name="twitter:description" content="[DESCRIPCIÓN]">
    <meta name="twitter:image" content="https://luminapro.mx/img/[CARPETA]/[IMAGEN].webp">
    <meta name="twitter:image:alt" content="[ALT DE LA IMAGEN]">

    <!-- ═══════════════════════════════════════
         FAVICON Y TEMA
    ═══════════════════════════════════════ -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <meta name="theme-color" content="#0A0A0A">

    <!-- ═══════════════════════════════════════
         PRECONNECT Y FONTS
    ═══════════════════════════════════════ -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet"></noscript>

    <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></noscript>

    <!-- ═══════════════════════════════════════
         SCHEMA.ORG JSON-LD
    ═══════════════════════════════════════ -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://luminapro.mx/blog/[NOMBRE-ARCHIVO].html"
        },
        "headline": "[TÍTULO DEL ARTÍCULO]",
        "description": "[META DESCRIPTION]",
        "image": {
            "@type": "ImageObject",
            "url": "https://luminapro.mx/img/[CARPETA]/[IMAGEN].webp",
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Organization",
            "name": "LUMINAPRO",
            "url": "https://luminapro.mx"
        },
        "publisher": {
            "@type": "Organization",
            "name": "LUMINAPRO",
            "logo": {
                "@type": "ImageObject",
                "url": "https://luminapro.mx/img/luminapro-logo.png",
                "width": 300,
                "height": 100
            }
        },
        "articleSection": "[CATEGORÍA]",
        "keywords": ["[KEYWORD1]", "[KEYWORD2]", "[KEYWORD3]"],
        "wordCount": [NÚMERO]
    }
    </script>

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://luminapro.mx/"},
            {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://luminapro.mx/blog.html"},
            {"@type": "ListItem", "position": 3, "name": "[TÍTULO CORTO]", "item": "https://luminapro.mx/blog/[NOMBRE-ARCHIVO].html"}
        ]
    }
    </script>

    <!-- ═══════════════════════════════════════
         CSS STYLES
    ═══════════════════════════════════════ -->
    <style>
        /* COPIAR ESTILOS COMPLETOS DE iluminacion-perfecta-boda.html */
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Saltar al contenido</a>

    <!-- HEADER - Copiar estructura de artículo existente -->
    <header class="header" id="header" role="banner">
        <!-- ... navegación completa ... -->
    </header>

    <main id="main-content" role="main">
        <!-- BREADCRUMB SECTION -->
        <section class="breadcrumb-section" aria-label="Ruta de navegación">
            <div class="container">
                <nav class="breadcrumb" aria-label="Breadcrumb">
                    <a href="../"><i class="fas fa-home" aria-hidden="true"></i> Inicio</a>
                    <i class="fas fa-circle" aria-hidden="true"></i>
                    <a href="../blog.html">Blog</a>
                    <i class="fas fa-circle" aria-hidden="true"></i>
                    <span>[TÍTULO CORTO]</span>
                </nav>
            </div>
        </section>

        <!-- ARTICLE HERO -->
        <section class="article-hero" aria-labelledby="article-title">
            <div class="container">
                <div class="article-hero-grid">
                    <div class="article-hero-left">
                        <span class="article-category">[CATEGORÍA]</span>
                        <h1 id="article-title">[Título con] <span>[Palabra Destacada]</span> [resto]</h1>
                        <div class="article-meta">
                            <span class="article-meta-item"><i class="far fa-clock" aria-hidden="true"></i> [X] min de lectura</span>
                            <span class="article-meta-item"><i class="far fa-eye" aria-hidden="true"></i> [X,XXX] vistas</span>
                            <span class="article-meta-item"><i class="far fa-user" aria-hidden="true"></i> Por LUMINAPRO</span>
                        </div>
                    </div>
                    <div class="article-hero-right">
                        <div class="article-intro">
                            <p><strong>[Frase inicial enganchadora]</strong> [resto del párrafo 1].</p>
                            <p>[Párrafo 2 sobre el contenido].</p>
                            <div class="article-intro-highlight">
                                <i class="fas fa-lightbulb" aria-hidden="true"></i>
                                <p>[Mensaje clave del artículo].</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ARTICLE SECTION -->
        <section class="article-section">
            <div class="container">
                <div class="article-layout">
                    <article class="article-content">
                        <div class="article-body">
                            <!-- CONTENIDO DEL ARTÍCULO -->
                            <h2 id="seccion-1">[Título Sección 1]</h2>
                            <p>[Contenido...]</p>
                            <!-- Agregar más secciones según necesidad -->
                        </div>
                        <div class="article-footer">
                            <!-- Tags y botones de compartir -->
                        </div>
                    </article>
                    <aside class="blog-sidebar">
                        <!-- Widgets del sidebar -->
                    </aside>
                </div>
            </div>
        </section>
    </main>

    <!-- FOOTER - Copiar de artículo existente -->
    <footer class="footer">
        <!-- ... footer completo ... -->
    </footer>

    <!-- WhatsApp Float -->
    <a href="https://wa.me/5527221736" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Scripts -->
    <script>
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    </script>
</body>
</html>
```

---

## Resumen del Proceso de Creación

```
┌─────────────────────────────────────────────────────────────────┐
│            FLUJO COMPLETO DE CREACIÓN DE ARTÍCULO               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. INVESTIGACIÓN                                               │
│     ├─► Identificar keyword principal y secundarias            │
│     ├─► Definir intención de búsqueda (TOFU/MOFU/BOFU)        │
│     ├─► Analizar competencia y SERPs                           │
│     └─► Completar ficha de planificación                       │
│                           ↓                                     │
│  2. PREPARACIÓN                                                 │
│     ├─► Seleccionar imágenes de /img/                          │
│     ├─► Definir estructura de contenido (H2, H3)               │
│     ├─► Identificar enlaces internos a incluir                 │
│     └─► Redactar meta description y títulos                    │
│                           ↓                                     │
│  3. CREAR ARTÍCULO                                              │
│     ├─► Copiar plantilla base                                  │
│     ├─► Personalizar meta tags y Schema                        │
│     ├─► Escribir contenido optimizado                          │
│     ├─► Agregar imágenes con alt descriptivo                   │
│     └─► Configurar sidebar y enlaces                           │
│                           ↓                                     │
│  4. CREAR CARD EN BLOG.HTML                                     │
│     ├─► Insertar card en posición cronológica                  │
│     ├─► Verificar imagen, título y descripción                 │
│     └─► Actualizar Schema del blog                             │
│                           ↓                                     │
│  5. ACTUALIZAR ARCHIVOS                                         │
│     ├─► Agregar URL a sitemap.xml                              │
│     ├─► Agregar enlaces desde artículos relacionados           │
│     └─► Verificar todos los enlaces internos                   │
│                           ↓                                     │
│  6. QUALITY ASSURANCE                                           │
│     ├─► Completar checklist de publicación                     │
│     ├─► Verificar responsive (desktop, tablet, móvil)          │
│     ├─► Validar Schema en Schema Validator                     │
│     └─► Probar en Facebook Debugger / Twitter Validator        │
│                           ↓                                     │
│  7. PUBLICAR Y PROMOCIONAR                                      │
│     ├─► Solicitar indexación en Google Search Console          │
│     ├─► Compartir en redes sociales                            │
│     └─► Monitorear métricas (30 días)                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**GUÍA PROFESIONAL DE CREACIÓN DE CONTENIDO**
Documento preparado para **LUMINAPRO**
https://luminapro.mx

Versión 2.0 Profesional | Enero 2026

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
