# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev          # Start development server at http://localhost:4321
npm start           # Alias for npm run dev

# Production build
npm run build       # Build for production (outputs to dist/)
npm run preview     # Preview production build locally

# Astro CLI
npm run astro       # Access Astro CLI commands directly
```

## Project Architecture

### Hybrid Astro + React Architecture
This project uses **Astro as the primary framework** with **selective React hydration**. Most components are Astro (.astro) for optimal performance, with React components (.tsx) used only where interactivity is needed (marked with `client:idle` or similar directives).

### Atomic Design System
Components are organized following atomic design principles:
- `src/components/atoms/` - Basic elements (Button, Chip, SectionTitle)
- `src/components/molecules/` - Composite components (Nav, ProjectCard, ServiceCard)  
- `src/components/organisms/` - Complex sections (ProjectGrid, Services, Contact, Header, Footer)
- `src/components/layouts/` - Page layout wrappers (MainLayout)

### Feature-Based Organization  
Self-contained features live in `src/features/`:
- `hero/` - Hero section with GSAP animations and random messages
- `theme-switcher/` - Dark/light mode toggle with React state management
- `project-gallery/` - Interactive project image switching

### Content Collections (Type-Safe CMS)
Content is managed through Astro Content Collections with Zod validation:
- `src/content/projects/` - Portfolio project entries (7 active projects)
- `src/content/services/` - Service offerings with icons and descriptions
- `src/content/resources/` - Resource cards with covers and links
- `src/content/config.ts` - Schema definitions for type safety

### Path Aliases
The project uses TypeScript path mapping for clean imports:
- `@atoms/*` → `src/components/atoms/*`
- `@molecules/*` → `src/components/molecules/*`
- `@organisms/*` → `src/components/organisms/*`
- `@layouts/*` → `src/components/layouts/*`
- `@features/*` → `src/features/*`
- `@constants/*` → `src/constants/*`
- `@lib/*` → `src/lib/*`
- `@styles/*` → `src/styles/*`
- `@assets/*` → `src/assets/*`

## Key Architecture Patterns

### Content Collection Workflow
1. Add new content files (.md) to appropriate `src/content/` subdirectory
2. Schema validation is automatic via `src/content/config.ts`
3. Use `getCollection()` in components to fetch type-safe data
4. Helper functions in `src/lib/content/` provide common operations (getAllCategories, getCategory)

### Theme System
- Uses Tailwind's `darkMode: "class"` strategy
- Theme state managed by React component in `src/features/theme-switcher/`
- Dark mode variants defined in `tailwind.config.cjs` under `colors.dark.*`
- Theme persistence handled via localStorage

### React Integration Pattern
Astro components can wrap React components for hydration:
```astro
---
import ThemeToggleReact from "./ThemeToggle";
---
<ThemeToggleReact client:idle />
```

### Animation System
- GSAP 3.12.4 for complex animations (hero section icons, transitions)
- CSS animations for simpler effects (typewriter effect in RandomMessage)
- ViewTransitions API enabled for smooth page transitions

## Content Management

### Adding New Projects
1. Create `.md` file in `src/content/projects/`
2. Follow schema in `src/content/config.ts` (images, title, description, href, icons, categories)
3. Add project images to `src/assets/` and reference in frontmatter
4. Projects automatically appear in ProjectGrid component

### Modifying Services/Resources
Content collections auto-update when files are modified in:
- `src/content/services/` - Service cards with icons
- `src/content/resources/` - Resource links with covers

## Deployment Configuration

- **Platform:** Netlify (via `@astrojs/netlify` adapter)
- **Mode:** SSR (`output: "server"` in astro.config.mjs)
- **Site URL:** https://hectorcreative.dev/
- **Build Output:** `dist/` directory

## Styling System

### Custom Color Palette
Defined in `tailwind.config.cjs` with full dark mode variants:
- Primary: `#ff0844` (red)
- Accent colors: purple (`#6b42df`), orange (`#ff8c69`), blue (`#6bb5f9`)
- Dark mode: Custom background (`#121218`), surface (`#1e1e29`), text colors

### Typography
- Custom font: **Eudoxus Sans** (loaded and configured in Tailwind)
- Responsive typography with `text-balance` utility for better line breaks
- Typography plugin enabled for markdown content

## Development Notes

### Language Configuration
- Content is primarily in Spanish (`lang="es"` in MainLayout)
- Consider this when adding new text content or modifying existing copy

### Performance Considerations
- Sharp integration handles optimized image processing
- Partytown configured for third-party scripts (`dataLayer.push` forwarding)
- Selective React hydration keeps bundle size minimal

### Content Structure
Projects showcase includes:
- Ofera Landing (corporate)
- Terapify (therapy app)
- Food Mood (food management)
- Pin Estelar (astronomy)
- Ikni (digital platform)
- Personal Blog
- Acabados Integrales (corporate)