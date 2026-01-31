# AGENTS.md

This guide is for agentic coding assistants working in this repo.
Keep changes focused, avoid unrelated edits, and prefer Astro + Tailwind patterns
already used in the codebase.

## Project Overview
- Framework: Astro 5 + React (islands) + Tailwind CSS
- Deployment: Netlify adapter
- Language: TypeScript (strict config) + Astro templates
- Styling: Tailwind utility classes + global CSS variables in `src/styles/global.css`
- Content: Astro Content Collections in `src/content`

## Required Local Setup
- Node + pnpm
- Install dependencies: `pnpm install`

## Commands (Build, Dev, Preview)
- Dev server: `pnpm run dev`
- Build: `pnpm run build`
- Preview: `pnpm run preview`
- Astro CLI (direct): `pnpm run astro`

## Linting / Formatting
- No lint script configured in `package.json`.
- No Prettier or ESLint config detected.
- If you add linting or formatting, update this file accordingly.

## Tests
- No test runner or test scripts configured.
- No single-test command is available yet.
- If tests are added, document:
  - how to run all tests
  - how to run a single test
  - how to run tests in watch mode

## Coding Conventions

### General
- Prefer TypeScript over JavaScript for new logic.
- Keep components small and composable; follow the existing atomic structure.
- Keep copy and UI strings in Spanish where the UI is already Spanish.
- Avoid introducing new dependencies without a clear need.

### Imports
- Use path aliases from `tsconfig.json` where appropriate:
  - `@components/*`, `@atoms/*`, `@molecules/*`, `@organisms/*`, `@layouts/*`
  - `@features/*`, `@lib/*`, `@constants/*`, `@styles/*`, `@assets/*`
- Group imports by type:
  1) external packages
  2) internal modules (aliases)
  3) relative paths
- Use double quotes for strings, matching existing files.

### Formatting
- Follow existing style in each file. There is no formatter enforced.
- Keep line length readable; wrap long JSX/HTML props like current components do.
- Use trailing commas where already present in surrounding code.

### TypeScript and Types
- Prefer explicit types for props and exported functions.
- In React components, use typed props and `React.FC` only if already used nearby.
- Use union types for constrained values (example: `type Theme = "light" | "dark" | null`).
- Avoid `any` unless it is already used in that area and is truly unavoidable.

### Astro Components
- Use the frontmatter block for imports and local helpers.
- Define `interface Props` in `.astro` components when props are required.
- Destructure `Astro.props` once and pass props directly to child components.
- Keep HTML/JSX clean: avoid unnecessary wrappers and inline logic.

### React Components (TSX)
- Prefer functional components with hooks.
- Keep state minimal; derive values when possible.
- Use `useEffect` only for side effects (DOM, timers, storage).
- Clean up side effects (intervals, timeouts) properly.

### Styling
- Prefer Tailwind utility classes for layout, spacing, and typography.
- Use CSS variables in `src/styles/global.css` for theme colors.
- For dark mode, rely on the `dark` class at `document.documentElement`.
- Keep class lists readable; group related utilities (layout, spacing, color).

### Content Collections
- Content lives in `src/content/*` and is validated by `src/content/config.ts`.
- When adding frontmatter, match the schema (required fields and types).
- For blog posts, keep categories within the enum defined in the schema.

### Naming
- Components: PascalCase (`ProjectGrid`, `ThemeToggle`).
- Files: PascalCase for components (`Hero.astro`, `ThemeToggle.tsx`).
- Functions and variables: camelCase.
- CSS classes: Tailwind utilities only; custom classes are rare.

### Error Handling
- Prefer early returns for invalid input (see `ProjectImageSwitcher`).
- Keep user-facing UI stable; do not throw errors in components unless necessary.
- For async helpers, let errors bubble only if upstream handles them.

## Architecture Notes
- Pages live in `src/pages` and map to routes.
- Layouts live in `src/components/layouts`.
- Features live in `src/features` and may contain Astro + React.
- Shared utilities live in `src/lib`.

## When Adding New Work
- Match existing patterns before introducing new ones.
- Keep Spanish copy consistent and professional.
- Avoid heavy refactors unless requested.
- Update this file if you add new commands or tooling.
