---
title: "Cómo construí mi portfolio con Astro y Content Collections"
description: "Caso de estudio detallado de mi portfolio: arquitectura, decisiones técnicas y lecciones aprendidas al usar Astro con SSR en Netlify."
category: "proyectos"
tags: ["astro", "typescript", "netlify", "content-collections", "tailwind"]
pubDate: 2024-10-04T00:00:00.000Z
image: "../../assets/lists-mockup.webp"
imageAlt: "Captura de pantalla del portfolio de Héctor Reyes"
draft: false
---

Cuando decidí reconstruir mi portfolio desde cero, tenía claro que quería algo rápido, moderno y fácil de mantener. Después de evaluar varias opciones (Next.js, Remix, SvelteKit), elegí **Astro** y aquí te cuento por qué.

## Por qué Astro

Astro me ofreció tres ventajas clave:

1. **Zero JavaScript por defecto**: Perfecto para un portfolio que es principalmente contenido estático
2. **Content Collections**: Sistema tipado para gestionar proyectos, servicios y recursos
3. **Flexibilidad**: Puedo usar React cuando lo necesito (como en mi galería de proyectos)

```typescript
// src/content/config.ts
const projectsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      icons: z.array(z.string()),
      categories: z.any(),
    }),
});
```

## Arquitectura: Atomic Design

Organicé los componentes siguiendo **Atomic Design**:

- **Atoms**: Botones, chips, iconos
- **Molecules**: Cards, navegación, metadata
- **Organisms**: Grids, header, footer
- **Layouts**: Estructuras de página reutilizables

Esta estructura me permite escalar el proyecto sin perder organización.

## SSR con Netlify

Aunque Astro es conocido por SSG (Static Site Generation), configuré **SSR (Server-Side Rendering)** porque planeo añadir funcionalidades dinámicas en el futuro:

```javascript
// astro.config.mjs
export default defineConfig({
  output: "server",
  adapter: netlify(),
});
```

Esto me da flexibilidad para añadir formularios de contacto, analytics personalizados o incluso un CMS headless sin reescribir todo.

## Tailwind + Dark Mode

Implementé dark mode usando la estrategia `class` de Tailwind:

```javascript
// tailwind.config.cjs
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          main: "#ff3869",
          background: "#121218",
          surface: "#1e1e29",
        },
      },
    },
  },
};
```

El sistema de colores es consistente entre light y dark mode, garantizando accesibilidad en ambos temas.

## Content Collections: El corazón del proyecto

Las Content Collections son el feature que más me convenció de Astro. Me permiten:

- **Validación en tiempo de compilación** con Zod
- **Autocompletado** en VS Code
- **Transformación de imágenes** automática
- **Tipado fuerte** en TypeScript

```astro
---
const projects = await getCollection("projects", ({ data }) =>
  data.categories.includes("main")
);
---
```

## Lecciones aprendidas

1. **Path aliases son esenciales**: Configurar `@components/*`, `@layouts/*` mejora mucho la DX
2. **View Transitions son mágicas**: Con una línea de código, transiciones fluidas entre páginas
3. **Astro Icon es tu aliado**: Mejor que importar SVGs manualmente
4. **Preload fonts**: Crítico para performance (evita FOUT)

## Performance

Resultados en Lighthouse (mobile):

- **Performance**: 98
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

La clave: optimización de imágenes con el helper `<Image>` de Astro y carga diferida de JavaScript.

## ¿Lo usaría de nuevo?

**Sí, sin duda.** Astro es perfecto para portfolios, blogs y sitios de contenido. La experiencia de desarrollo es excelente y los resultados de performance hablan por sí solos.

Si estás considerando Astro para tu próximo proyecto, te lo recomiendo 100%. Y si necesitas ayuda, contáctame.
