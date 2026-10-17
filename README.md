# Cofradía del Santo Sepulcro de Monóvar — Web

Web oficial de la **Cofradía del Santo Sepulcro y Jesús Cautivo** de Monóvar (Alicante).
Diseño elegante y moderno, construido con **Astro 4 + Tailwind CSS 3 + TypeScript**.

## Requisitos

- **Node.js ≥ 18.17.1** (probado con Node 18.18)
- npm 10+

> Nota: se ha fijado **Astro 4** porque la versión más reciente (Astro 7) exige Node ≥ 22.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Instala las dependencias                            |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`          |
| `npm run build`     | Genera el sitio de producción en `./dist/`          |
| `npm run preview`   | Previsualiza la build localmente                    |

## Estructura

```text
sepulcro-web/
├── public/                 → favicon.svg, robots.txt
├── src/
│   ├── assets/img/         → imágenes descargadas y optimizadas
│   ├── components/         → Header, Footer, Countdown, YoutubeEmbed, Gallery, Card, Escudo...
│   ├── content/            → colecciones: noticias, poesias, revista
│   ├── data/               → site, directiva, banda, costaleros, procesiones, enlaces
│   ├── layouts/            → BaseLayout.astro
│   ├── pages/              → una ruta por sección
│   └── styles/global.css   → design tokens y componentes de Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Configuración rápida

Todo lo editable a mano está en **`src/data/site.ts`** y **`src/data/procesiones.ts`**:

### 1. Vídeo de YouTube de la última salida / entrada

En `src/data/site.ts`:

```ts
youtube: {
  videoDestacado: 'ID_DEL_VIDEO',   // <-- cambia el ID del vídeo
  titulo: 'Última salida de la Cofradía',
  descripcion: '...',
  canal: 'https://www.youtube.com/@tu-canal',
}
```

El ID es la parte final de la URL: `https://www.youtube.com/watch?v=**9F5tS3RqVEs**`.

### 2. Contador regresivo a la próxima procesión

En `src/data/procesiones.ts`, actualiza las fechas de cada procesión (formato ISO 8601 con zona horaria).
El contador de la Home muestra **automáticamente la fecha futura más cercana**.

```ts
fechas: ['2027-03-22T21:30:00+01:00'],  // Lunes Santo
```

> Las fechas de Semana Santa cambian cada año: recuérdalo al actualizar el calendario.

### 3. Datos de la cofradía

- **Directiva**: `src/data/directiva.ts`
- **Banda**: `src/data/banda.ts`
- **Costaleros**: `src/data/costaleros.ts`
- **Enlaces**: `src/data/enlaces.ts`
- **Contacto / email / redes**: `src/data/site.ts`

### 4. Contenido editorial (markdown)

- **Noticias**: `src/content/noticias/*.md`
- **Poesías**: `src/content/poesias/*.md`
- **Revista**: `src/content/revista/*.md`

### 5. Formulario de contacto

El formulario de `src/pages/contacto.astro` usa [Formspree](https://formspree.io/).
Sustituye `https://formspree.io/f/tu-id-de-formspree` por tu endpoint real.

## Diseño

Identidad tomada del hábito y la luz de la procesión: noche morada, túnica blanca y ámbar de vela,
definida en `tailwind.config.mjs`:

- Noche `#171220` · Hábito `#3B2350` · Lienzo `#F2F0EA` · Candela `#DFA23C` · Brasa `#B0242A` · Humo `#6E6672`
- Tipografías: **Bodoni Moda** (títulos, didone de cartel) y **Spectral** (texto), autoalojadas vía `@fontsource`.
- La base es nocturna; las páginas de contenido se leen sobre «paneles» de lienzo (`.panel`).
- El emblema recurrente es la **cruz potenzada** (`src/components/Escudo.astro`), dibujada en SVG.

## Pendiente

- [ ] Inicializar el repositorio Git y publicarlo en GitHub.
- [ ] Actualizar datos de la directiva, banda y costaleros (los actuales son de 2012).
- [ ] Sustituir el ID del vídeo y el endpoint de Formspree.
- [ ] Definir hosting (GitHub Pages / Netlify / Vercel) y dominio.
