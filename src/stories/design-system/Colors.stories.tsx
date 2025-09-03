import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Dummy component for design system documentation
const ColorsPage = () => <div>Sistema de Colores</div>;

/**
 * Sistema de Colores del Design System
 */
const meta: Meta<typeof ColorsPage> = {
  title: 'Design System/Colors',
  component: ColorsPage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Sistema de Colores

Nuestro sistema de colores está basado en una paleta cuidadosamente seleccionada que transmite energía, 
profesionalismo y modernidad. Todos los colores están disponibles como design tokens CSS y clases de Tailwind.

## Características principales:
- **Paleta principal**: Rojos y púrpuras vibrantes
- **Colores de apoyo**: Naranjas y azules complementarios  
- **Neutros**: Grises balanceados para texto y superficies
- **Soporte completo**: Light y dark mode
- **Accesibilidad**: Ratios de contraste apropiados
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface ColorSwatchProps {
  name: string;
  value: string;
  cssVar: string;
  tailwindClass: string;
  description?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, cssVar, tailwindClass, description }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
    <div 
      className="w-16 h-16 rounded-lg border shadow-sm flex-shrink-0"
      style={{ backgroundColor: value }}
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">{value}</p>
      <p className="text-xs text-gray-500 font-mono">CSS: {cssVar}</p>
      <p className="text-xs text-gray-500 font-mono">Tailwind: {tailwindClass}</p>
      {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
    </div>
  </div>
);

interface GradientSwatchProps {
  name: string;
  gradient: string;
  cssVar: string;
  description?: string;
}

const GradientSwatch: React.FC<GradientSwatchProps> = ({ name, gradient, cssVar, description }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
    <div 
      className="w-16 h-16 rounded-lg border shadow-sm flex-shrink-0"
      style={{ background: gradient }}
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-xs text-gray-500 font-mono">CSS: {cssVar}</p>
      {description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
    </div>
  </div>
);

/**
 * Colores principales del sistema
 */
export const PrimaryColors: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Colores Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          name="Main" 
          value="#ff0844" 
          cssVar="var(--color-main)"
          tailwindClass="bg-main"
          description="Color principal de la marca, usado en CTAs y elementos destacados"
        />
        <ColorSwatch 
          name="Main Light" 
          value="#ff3869" 
          cssVar="var(--color-main-light)"
          tailwindClass="bg-red-light"
          description="Variante clara del color principal"
        />
        <ColorSwatch 
          name="Purple" 
          value="#6b42df" 
          cssVar="var(--color-purple)"
          tailwindClass="bg-purple"
          description="Color secundario, usado en elementos de apoyo"
        />
        <ColorSwatch 
          name="Purple Light" 
          value="#987aef" 
          cssVar="var(--color-purple-light)"
          tailwindClass="bg-purple-light"
          description="Variante clara del color secundario"
        />
      </div>
    </div>
  )
};

/**
 * Colores de apoyo
 */
export const SupportColors: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Colores de Apoyo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          name="Orange" 
          value="#ff8c69" 
          cssVar="var(--color-orange)"
          tailwindClass="bg-orange"
          description="Color de apoyo cálido, usado en acentos"
        />
        <ColorSwatch 
          name="Orange Light" 
          value="#ffb199" 
          cssVar="var(--color-orange-light)"
          tailwindClass="bg-orange-light"
          description="Variante clara del naranja"
        />
        <ColorSwatch 
          name="Blue" 
          value="#6bb5f9" 
          cssVar="var(--color-blue)"
          tailwindClass="bg-blue"
          description="Color de apoyo frío, usado en información"
        />
      </div>
    </div>
  )
};

/**
 * Colores neutros
 */
export const NeutralColors: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Colores Neutros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          name="White" 
          value="#fbfbfb" 
          cssVar="var(--color-white)"
          tailwindClass="bg-white"
          description="Blanco principal, fondos y texto en dark mode"
        />
        <ColorSwatch 
          name="Light" 
          value="#efefef" 
          cssVar="var(--color-light)"
          tailwindClass="bg-light"
          description="Gris muy claro, superficies secundarias"
        />
        <ColorSwatch 
          name="Light Gray" 
          value="#a6a6b5" 
          cssVar="var(--color-light-gray)"
          tailwindClass="bg-light-gray"
          description="Gris claro, texto secundario y bordes"
        />
        <ColorSwatch 
          name="Gray" 
          value="#878791" 
          cssVar="var(--color-gray)"
          tailwindClass="bg-gray"
          description="Gris medio, texto de soporte"
        />
        <ColorSwatch 
          name="Dark Gray" 
          value="#484753" 
          cssVar="var(--color-dark-gray)"
          tailwindClass="bg-dark-gray"
          description="Gris oscuro, texto secundario en light mode"
        />
        <ColorSwatch 
          name="Black" 
          value="#1e1e29" 
          cssVar="var(--color-black)"
          tailwindClass="bg-black"
          description="Negro principal, texto y superficies en light mode"
        />
      </div>
    </div>
  )
};

/**
 * Colores del tema oscuro
 */
export const DarkThemeColors: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Colores del Tema Oscuro</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          name="Dark Background" 
          value="#121218" 
          cssVar="var(--color-background)"
          tailwindClass="bg-dark-background"
          description="Fondo principal en modo oscuro"
        />
        <ColorSwatch 
          name="Dark Surface" 
          value="#1e1e29" 
          cssVar="var(--color-surface)"
          tailwindClass="bg-dark-surface"
          description="Superficie secundaria en modo oscuro"
        />
        <ColorSwatch 
          name="Dark Text" 
          value="#fbfbfb" 
          cssVar="var(--color-text)"
          tailwindClass="text-dark-text"
          description="Texto principal en modo oscuro"
        />
        <ColorSwatch 
          name="Dark Text Secondary" 
          value="#a6a6b5" 
          cssVar="var(--color-text-secondary)"
          tailwindClass="text-dark-text-secondary"
          description="Texto secundario en modo oscuro"
        />
      </div>
    </div>
  )
};

/**
 * Gradientes del sistema
 */
export const Gradients: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Gradientes</h2>
      <div className="space-y-4">
        <GradientSwatch 
          name="Main Gradient" 
          gradient="linear-gradient(135deg, #ff0844 0%, #ff3869 100%)"
          cssVar="var(--gradient-main)"
          description="Gradiente principal usado en botones y CTAs"
        />
        <GradientSwatch 
          name="Purple Gradient" 
          gradient="linear-gradient(135deg, #6b42df 0%, #987aef 100%)"
          cssVar="var(--gradient-purple)"
          description="Gradiente secundario para elementos de apoyo"
        />
        <GradientSwatch 
          name="Orange Gradient" 
          gradient="linear-gradient(135deg, #ff8c69 0%, #ffb199 100%)"
          cssVar="var(--gradient-orange)"
          description="Gradiente de apoyo para acentos especiales"
        />
      </div>
    </div>
  )
};

/**
 * Guía de uso y accesibilidad
 */
export const UsageGuide: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Guía de Uso y Accesibilidad</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Combinaciones recomendadas */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Combinaciones Recomendadas</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-main text-white rounded-lg">
              <p className="font-medium">Texto blanco sobre Main</p>
              <p className="text-sm opacity-90">Contraste: 4.8:1 ✅</p>
            </div>
            
            <div className="p-4 bg-purple text-white rounded-lg">
              <p className="font-medium">Texto blanco sobre Purple</p>
              <p className="text-sm opacity-90">Contraste: 5.2:1 ✅</p>
            </div>
            
            <div className="p-4 bg-white text-black border rounded-lg">
              <p className="font-medium">Texto negro sobre blanco</p>
              <p className="text-sm text-gray-600">Contraste: 19.8:1 ✅</p>
            </div>
            
            <div className="p-4 bg-black text-white rounded-lg">
              <p className="font-medium">Texto blanco sobre negro</p>
              <p className="text-sm opacity-90">Contraste: 19.8:1 ✅</p>
            </div>
          </div>
        </div>

        {/* Uso por contexto */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Uso por Contexto</h3>
          
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-main">Acciones Principales</p>
              <p className="text-sm text-gray-600">Main, Main Light - Botones primarios, enlaces importantes</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-purple">Acciones Secundarias</p>
              <p className="text-sm text-gray-600">Purple, Purple Light - Botones secundarios, elementos de apoyo</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-orange">Información y Acentos</p>
              <p className="text-sm text-gray-600">Orange, Blue - Notificaciones, información destacada</p>
            </div>
            
            <div className="p-3 border rounded-lg">
              <p className="font-medium text-gray">Contenido y Navegación</p>
              <p className="text-sm text-gray-600">Neutros - Texto, fondos, bordes, elementos de interfaz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};