---
title: "Guía rápida: Content Collections en Astro"
description: "Tutorial práctico para implementar Content Collections en Astro con validación tipada, optimización de imágenes y filtros avanzados."
category: "tutoriales"
tags: ["astro", "typescript", "content-collections", "tutorial"]
pubDate: 2024-09-15T00:00:00.000Z
image: "../../assets/comeet-cat-mockup.webp"
imageAlt: "Código de Content Collections en Astro"
draft: false
---

Las **Content Collections** son uno de los features más poderosos de Astro. Te permiten gestionar contenido (blog posts, proyectos, productos) de forma tipada y con validación automática.

En este tutorial vamos a construir un sistema de blog completo usando Content Collections.

## ¿Qué son las Content Collections?

Content Collections transforman tus archivos Markdown/MDX en contenido estructurado con:

- **Validación de schema** con Zod
- **Typesafety** automático en TypeScript
- **Optimización de imágenes** integrada
- **Queries potentes** para filtrar y ordenar

## Setup inicial

Primero, crea la estructura de carpetas:

```bash
src/
├── content/
│   ├── config.ts          # Configuración de colecciones
│   └── blog/
│       ├── post-1.md
│       └── post-2.md
```

## Definir el schema

En `src/content/config.ts`:

```typescript
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      image: image(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
```

### ¿Por qué usar `image()` en lugar de `z.string()`?

El helper `image()` de Astro:

1. **Valida** que la imagen exista
2. **Optimiza** automáticamente (WebP, AVIF, responsive)
3. **Genera tipos** correctos para el componente `<Image>`

## Crear un post

En `src/content/blog/mi-primer-post.md`:

```markdown
---
title: "Mi primer post"
description: "Aprendiendo Content Collections"
pubDate: 2024-10-04T00:00:00.000Z
image: "@assets/blog/cover.jpg"
tags: ["astro", "tutorial"]
draft: false
---

# Hola mundo

Este es mi primer post usando Content Collections.
```

**Importante**: Las fechas deben estar en formato ISO 8601 para que Zod las parsee correctamente.

## Listar posts en una página

En `src/pages/blog/index.astro`:

```astro
---
import { getCollection } from "astro:content";

// Obtener todos los posts no borrador
const posts = await getCollection("blog", ({ data }) => {
  return !data.draft;
});

// Ordenar por fecha descendente
const sortedPosts = posts.sort(
  (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
);
---

<main>
  {sortedPosts.map((post) => (
    <article>
      <h2>{post.data.title}</h2>
      <p>{post.data.description}</p>
      <a href={`/blog/${post.slug}`}>Leer más</a>
    </article>
  ))}
</main>
```

## Renderizar un post individual

Astro usa **dynamic routing** con `[slug].astro`:

```astro
---
import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}) satisfies GetStaticPaths;

const { post } = Astro.props;
const { Content } = await post.render();
---

<article>
  <h1>{post.data.title}</h1>
  <p>{post.data.description}</p>
  <Content />
</article>
```

### ¿Qué es `satisfies GetStaticPaths`?

Es una forma de validar que tu función cumple con el tipo esperado sin perder inferencia de tipos. Introducido en TypeScript 4.9.

## Optimización de imágenes

Para usar las imágenes optimizadas:

```astro
---
import { Image } from "astro:assets";
---

<Image
  src={post.data.image}
  alt={post.data.title}
  width={1200}
  height={630}
  loading="lazy"
/>
```

Astro automáticamente:
- Genera múltiples tamaños
- Convierte a formatos modernos (WebP, AVIF)
- Añade atributos de lazy loading

## Filtros avanzados

### Por categoría

```typescript
const devPosts = await getCollection("blog", ({ data }) => {
  return data.category === "desarrollo";
});
```

### Por tag

```typescript
const astroPosts = await getCollection("blog", ({ data }) => {
  return data.tags.includes("astro");
});
```

### Por fecha

```typescript
const recentPosts = await getCollection("blog", ({ data }) => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  return data.pubDate > oneMonthAgo;
});
```

## Generar páginas de tags dinámicamente

En `src/pages/blog/tag/[tag].astro`:

```astro
---
import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  // Obtener todos los tags únicos
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))];

  return tags.map((tag) => ({
    params: { tag },
    props: { tag },
  }));
}) satisfies GetStaticPaths;

const { tag } = Astro.props;

// Filtrar posts por tag
const posts = await getCollection("blog", ({ data }) => {
  return data.tags.includes(tag);
});
---

<h1>Posts con #{tag}</h1>
{posts.map(post => <article>...</article>)}
```

## Validación avanzada con Zod

### Enum para categorías

```typescript
category: z.enum(["tutorial", "reflexion", "proyecto"]);
```

### URL con validación

```typescript
externalUrl: z.string().url().optional();
```

### Array con mínimo de elementos

```typescript
tags: z.array(z.string()).min(1).max(5);
```

### Fechas con constraints

```typescript
pubDate: z.date().max(new Date()); // No fechas futuras
```

## Errores comunes

### 1. Imagen no encontrada

```
Error: Image not found: src/assets/blog/cover.jpg
```

**Solución**: Verifica que la ruta sea correcta y use `@assets/` o ruta relativa.

### 2. Fecha inválida

```
Error: Expected date, received string
```

**Solución**: Usa formato ISO 8601: `2024-10-04T00:00:00.000Z`

### 3. Schema no coincide

```
Error: Invalid input: Expected array, received string
```

**Solución**: Revisa que el frontmatter coincida con el schema de Zod.

## Bonus: Tiempo de lectura

Calcula el tiempo de lectura estimado:

```typescript
const words = post.body.split(/\s+/).length;
const readingTime = Math.ceil(words / 200); // 200 palabras/min
```

## Conclusión

Content Collections transforman Astro en un CMS potente y tipado. Los beneficios:

- ✅ Validación automática
- ✅ Typesafety en toda la app
- ✅ Optimización de imágenes
- ✅ Developer Experience excelente

Si estás construyendo un blog, portfolio o documentación, Content Collections son la mejor opción.

**Next steps**:
- Añade RSS feed
- Implementa búsqueda
- Integra con un CMS headless (Sanity, Contentful)

¿Preguntas? Déjame un comentario o contáctame.
