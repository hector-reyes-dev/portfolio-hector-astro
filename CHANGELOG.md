# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.4] - 2025-04-16

### Eliminado
- Eliminado archivo `src/constants/heroImages.ts` por no ser necesario.

## [0.2.3] - 2025-04-11

### Cambiado
- Actualizado el enlace del CV en los componentes `Nav.astro` y `Phrase.astro`

## [0.2.2] - 2025-04-10

### Corregido

- Solucionado el problema de sincronización del tema oscuro en el componente ThemeToggle
- Refactorizado el componente ThemeToggle para manejar mejor el estado inicial
- Extraídos los iconos del tema a componentes separados para mejor mantenibilidad

## [0.2.1] - 2025-04-09

### Corregido

- Solucionados problemas de especificidad de CSS con Tailwind para estilos de texto en negrita en el contenido Markdown.
- Corregidos los estilos del modo oscuro para los componentes `Chip` y `RandomMessage`.
- Ajustes generales de estilo en el `Header` para mejorar la consistencia.

## [0.2.0] - 2024-02-19

### Agregado

- Integración de Sharp para procesamiento de imágenes
- Implementación de componentes React para interactividad
- Configuración de PostCSS y Autoprefixer
- Integración de Tailwind Typography plugin

### Cambiado

- Actualización de dependencias core:
  - Astro v5.2.3
  - React v18.2.0
  - Tailwind CSS v3.4.1
- Mejora en la estructura del proyecto
- Optimización del sistema de iconos con @iconify

### Optimizado

- Implementación de Partytown para scripts de terceros
- Configuración de GSAP para animaciones optimizadas
- Sistema de carga de imágenes mejorado con Sharp

### Documentación

- Creación del archivo CHANGELOG
- Documentación de cambios principales
