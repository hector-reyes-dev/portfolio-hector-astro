import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Dummy component for design system documentation
const SpacingPage = () => <div>Sistema de Espaciado</div>;

/**
 * Sistema de Espaciado del Design System
 */
const meta: Meta<typeof SpacingPage> = {
  title: 'Design System/Spacing',
  component: SpacingPage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Sistema de Espaciado

Nuestro sistema de espaciado proporciona una escala consistente y armoniosa para todos los elementos
de la interfaz. Basado en múltiplos de 4px, garantiza alineación perfecta y ritmo visual.

## Características principales:
- **Base**: Múltiplos de 4px para alineación perfecta
- **Escala progresiva**: De XS (4px) a 4XL (96px)
- **Tokens CSS**: Disponibles como custom properties
- **Clases Tailwind**: Integración completa con el sistema de utilidades
- **Uso semántico**: Cada tamaño tiene un propósito específico
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface SpacingSampleProps {
  size: string;
  pixels: string;
  token: string;
  tailwindClass: string;
  usage: string;
  color?: string;
}

const SpacingSample: React.FC<SpacingSampleProps> = ({ 
  size, 
  pixels, 
  token, 
  tailwindClass, 
  usage,
  color = 'bg-main'
}) => (
  <div className="flex items-center gap-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
    <div className="flex items-center gap-4 flex-1">
      <div 
        className={`${color} rounded`}
        style={{ 
          width: pixels, 
          height: '24px',
          minWidth: pixels
        }}
      />
      <div>
        <p className="font-semibold">{size}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{pixels}</p>
      </div>
    </div>
    
    <div className="text-right flex-1">
      <p className="text-sm font-mono text-gray-800 dark:text-gray-200">{token}</p>
      <p className="text-sm font-mono text-gray-600 dark:text-gray-400">{tailwindClass}</p>
    </div>
    
    <div className="flex-1 text-right">
      <p className="text-sm text-gray-700 dark:text-gray-300">{usage}</p>
    </div>
  </div>
);

/**
 * Escala de espaciado base
 */
export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Escala de Espaciado</h2>
      
      <SpacingSample
        size="XS"
        pixels="4px"
        token="var(--spacing-xs)"
        tailwindClass="p-xs, m-xs, gap-xs"
        usage="Espacios muy pequeños, bordes internos"
      />
      
      <SpacingSample
        size="SM"
        pixels="8px"
        token="var(--spacing-sm)"
        tailwindClass="p-sm, m-sm, gap-sm"
        usage="Espacios pequeños, gaps entre elementos"
      />
      
      <SpacingSample
        size="MD"
        pixels="16px"
        token="var(--spacing-md)"
        tailwindClass="p-md, m-md, gap-md"
        usage="Espaciado estándar, padding básico"
      />
      
      <SpacingSample
        size="LG"
        pixels="24px"
        token="var(--spacing-lg)"
        tailwindClass="p-lg, m-lg, gap-lg"
        usage="Espacios medianos, separación de secciones"
      />
      
      <SpacingSample
        size="XL"
        pixels="32px"
        token="var(--spacing-xl)"
        tailwindClass="p-xl, m-xl, gap-xl"
        usage="Espacios grandes, márgenes importantes"
      />
      
      <SpacingSample
        size="2XL"
        pixels="48px"
        token="var(--spacing-2xl)"
        tailwindClass="p-2xl, m-2xl, gap-2xl"
        usage="Espacios muy grandes, separación de bloques"
      />
      
      <SpacingSample
        size="3XL"
        pixels="64px"
        token="var(--spacing-3xl)"
        tailwindClass="p-3xl, m-3xl, gap-3xl"
        usage="Espacios extra grandes, separación de secciones"
      />
      
      <SpacingSample
        size="4XL"
        pixels="96px"
        token="var(--spacing-4xl)"
        tailwindClass="p-4xl, m-4xl, gap-4xl"
        usage="Espacios máximos, separación de páginas"
      />
    </div>
  )
};

/**
 * Ejemplos de padding
 */
export const PaddingExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Ejemplos de Padding</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Padding XS */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-xs bg-main text-white text-sm font-medium rounded-lg">
            Padding XS (4px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para badges muy pequeños
          </p>
        </div>
        
        {/* Padding SM */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-sm bg-purple text-white text-sm font-medium rounded-lg">
            Padding SM (8px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para chips y elementos pequeños
          </p>
        </div>
        
        {/* Padding MD */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-md bg-orange text-white text-sm font-medium rounded-lg">
            Padding MD (16px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para botones y cards básicos
          </p>
        </div>
        
        {/* Padding LG */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-lg bg-blue text-white text-sm font-medium rounded-lg">
            Padding LG (24px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para cards con más contenido
          </p>
        </div>
        
        {/* Padding XL */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-xl bg-gray text-white text-sm font-medium rounded-lg">
            Padding XL (32px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para secciones importantes
          </p>
        </div>
        
        {/* Padding 2XL */}
        <div className="border border-gray-300 rounded-lg">
          <div className="p-2xl bg-dark-gray text-white text-sm font-medium rounded-lg">
            Padding 2XL (48px)
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
            Para containers principales
          </p>
        </div>
      </div>
    </div>
  )
};

/**
 * Ejemplos de margin y separación
 */
export const MarginExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Ejemplos de Margin y Separación</h2>
      
      <div className="space-y-8">
        {/* Ejemplo de elementos con diferentes márgenes */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-4">Separación entre Elementos</h3>
          
          <div className="bg-main text-white p-3 rounded mb-xs text-sm">
            Elemento 1 (margin-bottom: xs - 4px)
          </div>
          
          <div className="bg-purple text-white p-3 rounded mb-sm text-sm">
            Elemento 2 (margin-bottom: sm - 8px)
          </div>
          
          <div className="bg-orange text-white p-3 rounded mb-md text-sm">
            Elemento 3 (margin-bottom: md - 16px)
          </div>
          
          <div className="bg-blue text-white p-3 rounded mb-lg text-sm">
            Elemento 4 (margin-bottom: lg - 24px)
          </div>
          
          <div className="bg-gray text-white p-3 rounded text-sm">
            Elemento 5 (sin margin)
          </div>
        </div>
        
        {/* Ejemplo de grid con gaps */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-4">Grid con Gap Spacing</h3>
          
          <div className="grid grid-cols-3 gap-md mb-4">
            <div className="bg-main text-white p-3 rounded text-xs text-center">Gap MD</div>
            <div className="bg-main text-white p-3 rounded text-xs text-center">Gap MD</div>
            <div className="bg-main text-white p-3 rounded text-xs text-center">Gap MD</div>
          </div>
          
          <div className="grid grid-cols-2 gap-lg">
            <div className="bg-purple text-white p-3 rounded text-xs text-center">Gap LG</div>
            <div className="bg-purple text-white p-3 rounded text-xs text-center">Gap LG</div>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Ejemplos de layout y composición
 */
export const LayoutExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Layout y Composición</h2>
      
      {/* Card layout example */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="p-lg">
          <h3 className="text-xl font-semibold mb-sm">Ejemplo de Card</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-md">
            Esta card usa padding LG (24px) para el contenido principal y diferentes márgenes 
            para separar los elementos internos.
          </p>
          <div className="flex gap-md">
            <button className="px-md py-sm bg-main text-white rounded font-medium text-sm">
              Acción Principal
            </button>
            <button className="px-md py-sm border border-gray-300 rounded font-medium text-sm">
              Acción Secundaria
            </button>
          </div>
        </div>
      </div>
      
      {/* Section layout example */}
      <div className="py-2xl px-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg">
        <div className="text-center mb-xl">
          <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-sm block">
            SECCIÓN
          </span>
          <h2 className="text-3xl font-bold mb-md">
            Título de Sección <span className="text-main">Destacado</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Esta sección utiliza padding 2XL (48px) vertical y XL (32px) horizontal, 
            con márgenes apropiados entre elementos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="text-center p-lg bg-white dark:bg-gray-800 rounded-lg">
            <div className="w-12 h-12 bg-main rounded-lg mx-auto mb-md"></div>
            <h3 className="font-semibold mb-sm">Feature 1</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Descripción con espaciado consistente</p>
          </div>
          
          <div className="text-center p-lg bg-white dark:bg-gray-800 rounded-lg">
            <div className="w-12 h-12 bg-purple rounded-lg mx-auto mb-md"></div>
            <h3 className="font-semibold mb-sm">Feature 2</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Descripción con espaciado consistente</p>
          </div>
          
          <div className="text-center p-lg bg-white dark:bg-gray-800 rounded-lg">
            <div className="w-12 h-12 bg-orange rounded-lg mx-auto mb-md"></div>
            <h3 className="font-semibold mb-sm">Feature 3</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Descripción con espaciado consistente</p>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Guía de mejores prácticas
 */
export const BestPractices: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Mejores Prácticas de Espaciado</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Do's */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-green-600">✅ Recomendaciones</h3>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium mb-2">Usa la escala de espaciado</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Siempre utiliza los tokens de espaciado predefinidos en lugar de valores arbitrarios.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium mb-2">Mantén consistencia vertical</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Usa el mismo espaciado vertical para elementos similares en toda la aplicación.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h4 className="font-medium mb-2">Agrupa elementos relacionados</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Usa menos espacio entre elementos relacionados y más espacio para separar grupos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Don'ts */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-red-600">❌ Evita</h3>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
              <h4 className="font-medium mb-2">Valores de espaciado arbitrarios</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No uses valores como 7px, 13px, 19px que no están en la escala del sistema.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
              <h4 className="font-medium mb-2">Espaciado inconsistente</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Evita usar diferentes espaciados para elementos del mismo tipo o contexto.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
              <h4 className="font-medium mb-2">Sobrecargar con espaciado</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No uses espaciados muy grandes innecesariamente; puede crear desconexión visual.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ejemplos visuales */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Ejemplos Visuales</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ejemplo correcto */}
          <div className="p-4 border-2 border-green-500 rounded-lg">
            <h4 className="font-medium text-green-600 mb-3">✅ Correcto</h4>
            <div className="space-y-md">
              <div className="bg-main text-white p-md rounded">Elemento 1</div>
              <div className="bg-main text-white p-md rounded">Elemento 2</div>
              <div className="bg-main text-white p-md rounded">Elemento 3</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Espaciado consistente usando MD (16px)
            </p>
          </div>
          
          {/* Ejemplo incorrecto */}
          <div className="p-4 border-2 border-red-500 rounded-lg">
            <h4 className="font-medium text-red-600 mb-3">❌ Incorrecto</h4>
            <div className="space-y-2">
              <div className="bg-gray text-white p-2 rounded mb-3">Elemento 1</div>
              <div className="bg-gray text-white p-4 rounded mb-6">Elemento 2</div>
              <div className="bg-gray text-white p-1 rounded">Elemento 3</div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Espaciado inconsistente con valores arbitrarios
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};