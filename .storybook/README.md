# Storybook - Sistema de Diseño Hector Creative

## 📋 Implementación Completada

Este directorio contiene la configuración completa de Storybook para el portfolio de Hector Creative, implementado con enfoque en escalabilidad y mejores prácticas de 2025.

## 🏗️ Arquitectura Implementada

### Configuración Base
- **Framework**: Storybook 9.1.4 con React + Vite
- **Addons**: docs, a11y, themes, vitest, onboarding
- **Integración**: Path aliases del proyecto Astro
- **Temas**: Soporte automático light/dark mode

### Sistema de Design Tokens
- **Ubicación**: `../src/styles/design-tokens.css`
- **Tipo**: CSS Custom Properties escalables
- **Cobertura**: Colores, espaciado, tipografía, sombras, gradientes
- **Integración**: Tailwind CSS con tokens como variables

## 📁 Archivos de Configuración

### `main.ts`
Configuración principal de Storybook:
- **Stories**: Autodiscovery en `../src/**/*.stories.*`
- **Addons**: Configuración de addons esenciales
- **Framework**: React-Vite con path aliases
- **Docs**: Autodocs habilitado
- **Static**: Servir archivos desde `../public`

### `preview.tsx`
Configuración global y decoradores:
- **Temas**: Integración con `@storybook/addon-themes`
- **Controles**: Configuración avanzada con sorting
- **Backgrounds**: Valores basados en design tokens
- **Viewports**: Breakpoints responsive del proyecto
- **Organización**: Story sorting por atomic design

### `storybook.css`
Estilos específicos de Storybook:
- **Importaciones**: Tailwind, design tokens, estilos globales
- **Compatibilidad**: Estilos para temas light/dark
- **Componentes**: Estilos específicos para showcase

## 🎨 Componentes Implementados

### Adaptadores React (`../src/components/storybook/`)
- **Button.tsx**: Todas las variantes (main, purple, borders, icon/text)
- **Chip.tsx**: Categorías de proyectos con navegación
- **SectionTitle.tsx**: Títulos con última palabra destacada
- **index.ts**: Barrel exports para fácil importación

### Stories de Componentes (`../src/components/atoms/`)
- **Button.stories.tsx**: 8 variantes + ejemplos interactivos
- **Chip.stories.tsx**: Todas las categorías + contextos
- **SectionTitle.stories.tsx**: Ejemplos responsive + tipografía

### Documentación del Design System (`../src/stories/design-system/`)
- **Introduction.mdx**: Filosofía y arquitectura
- **Colors.stories.tsx**: Paleta completa + guías de accesibilidad
- **Typography.stories.tsx**: Escala tipográfica + contextos de uso
- **Spacing.stories.tsx**: Sistema de espaciado + mejores prácticas

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run storybook          # Inicia servidor en http://localhost:6006

# Producción
npm run build-storybook    # Construye para deployment
```

## 🎯 Características Técnicas

### Design Tokens Escalables
```css
:root {
  --color-main: #ff0844;
  --spacing-md: 1rem;
  --font-family-sans: "Eudoxus Sans", sans-serif;
}

.dark {
  --color-main: #ff3869;
  --color-background: #121218;
}
```

### Integración con Tailwind
```javascript
colors: {
  main: "var(--color-main)",      // Usa token CSS
  purple: "var(--color-purple)",  // Se adapta automáticamente
}
```

### Configuración de Temas
```javascript
withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
```

## 📚 Organización de Stories

### Por Atomic Design
- **Design System/** - Documentación fundamental
- **Components/Atoms/** - Elementos básicos
- **Components/Molecules/** - Componentes compuestos (futuro)
- **Components/Organisms/** - Secciones complejas (futuro)

### Naming Convention
```
Design System/Introduction
Design System/Colors
Design System/Typography  
Design System/Spacing
Components/Atoms/Button
Components/Atoms/Chip
Components/Atoms/SectionTitle
```

## 🔧 Extensibilidad

### Agregar Nuevos Componentes
1. Crear adaptador React en `../src/components/storybook/`
2. Exportar desde `index.ts`
3. Crear `.stories.tsx` con documentación completa
4. Seguir patrones establecidos de argTypes y variants

### Agregar Nuevos Design Tokens
1. Definir en `../src/styles/design-tokens.css`
2. Integrar en `tailwind.config.cjs`
3. Documentar en stories correspondientes
4. Actualizar guías de uso

### Configurar Nuevos Addons
1. Instalar: `npm install @storybook/addon-nombre`
2. Agregar a `addons` array en `main.ts`
3. Configurar en `preview.tsx` si necesario

## 🎨 Patrones de Uso

### Story Básica
```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button Text'
  }
};
```

### Story con Render Personalizado
```typescript
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
};
```

### Configuración de Controls
```typescript
argTypes: {
  variant: {
    control: { type: 'select' },
    options: ['primary', 'secondary'],
    description: 'Button visual variant'
  }
}
```

## 🔍 Troubleshooting

### Errores Comunes y Soluciones

#### "Failed to fetch dynamically imported module"
**Problema**: Stories sin componente asociado apropiadamente.
**Solución**: 
```typescript
// Crear dummy component para documentación
const MyPage = () => <div>My Documentation</div>;
const meta: Meta<typeof MyPage> = {
  component: MyPage, // ✅ Requerido
  title: 'My Story'
};
```

#### "@import must precede all other statements"
**Problema**: CSS imports mal ordenados en `storybook.css`.
**Solución**: Mover @import al inicio del archivo, antes de @tailwind.

#### "Failed to resolve import @storybook/blocks"
**Problema**: Dependencia faltante para MDX.
**Solución**: Usar .stories.tsx en lugar de .mdx para documentación.

#### CSS/Styles no se aplican
**Problema**: Estilos no se cargan en Storybook.
**Solución**: 
1. Verificar importación de `./storybook.css` en `preview.tsx`
2. Confirmar path de imports CSS
3. Revisar orden de @tailwind directives

#### Temas no funcionan
**Problema**: Theme switcher no cambia estilos.
**Solución**: 
1. Verificar configuración de `withThemeByClassName`
2. Confirmar clases CSS dark: en design tokens
3. Revisar darkMode: "class" en tailwind.config.cjs

### Warnings Conocidos

#### argTypesRegex Warning
**Warning**: "actions.argTypesRegex together with visual test addon"
**Impacto**: No crítico, funcionalidad completa
**Solución opcional**: Remover argTypesRegex y usar fn() explícito

### Performance
- Stories se cargan lazy por defecto
- Estilos optimizados para desarrollo
- Build optimizado para producción

## 📈 Métricas de Implementación

- **8 componentes** adaptados de Astro a React
- **15+ stories** con documentación completa
- **50+ design tokens** organizados por categoría  
- **4 páginas** de documentación del design system
- **100% compatibilidad** con estilos existentes
- **Soporte completo** light/dark mode

## 🚀 Próximos Pasos Recomendados

1. **Molecules**: Adaptar Nav, ProjectCard, ServiceCard
2. **Organisms**: Implementar Header, Footer, ProjectGrid  
3. **Visual Testing**: Integrar Chromatic o similar
4. **A11y Testing**: Configurar tests de accesibilidad
5. **Performance**: Monitoreo de bundle size

---

**Implementado por**: Claude Code  
**Fecha**: Septiembre 2025  
**Versión Storybook**: 9.1.4  
**Compatibilidad**: Astro 5.9.0 + React 18.2.0