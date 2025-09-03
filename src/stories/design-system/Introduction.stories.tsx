import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Component for Introduction page
const IntroductionPage = () => <div>Sistema de Diseño - Introducción</div>;

/**
 * Introducción al Sistema de Diseño
 */
const meta: Meta<typeof IntroductionPage> = {
  title: 'Design System/Introduction',
  component: IntroductionPage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Sistema de Diseño - Hector Creative

Bienvenido al sistema de diseño del portfolio de Hector Creative. Este sistema proporciona una base sólida y escalable para el desarrollo de componentes y interfaces consistentes.

## 🎯 Filosofía de Diseño

Nuestro sistema de diseño se basa en principios de **claridad**, **consistencia** y **escalabilidad**. Cada elemento está diseñado para trabajar en armonía y proporcionar una experiencia de usuario excepcional.

### Principios Clave

- **Consistencia Visual**: Todos los componentes siguen patrones visuales coherentes
- **Accesibilidad**: Diseño inclusivo con soporte completo para temas claros y oscuros
- **Responsive**: Adaptable a todos los dispositivos y tamaños de pantalla
- **Performance**: Optimizado para carga rápida y interacciones fluidas

## 🏗️ Arquitectura del Sistema

### Atomic Design
Seguimos la metodología de **Atomic Design** para organizar nuestros componentes:

- **Atoms**: Elementos básicos (Button, Chip, SectionTitle)
- **Molecules**: Combinaciones de atoms (Nav, ProjectCard, ServiceCard)
- **Organisms**: Secciones complejas (Header, Footer, ProjectGrid)
- **Templates**: Layouts de página
- **Pages**: Páginas completas

### Design Tokens
Utilizamos **CSS Custom Properties** como base de nuestros design tokens.

## 🎨 Temas

### Light Mode
El tema claro utiliza una paleta limpia y moderna con fondos blancos y texto oscuro.

### Dark Mode
El tema oscuro proporciona una experiencia cómoda para usuarios que prefieren interfaces oscuras, manteniendo la legibilidad y el contraste apropiado.

## 📱 Responsive Design

Nuestro sistema está optimizado para:
- **Mobile**: menor a 640px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🚀 Tecnologías

- **Astro**: Framework principal
- **React**: Componentes interactivos
- **Tailwind CSS**: Sistema de utilidades CSS
- **Storybook**: Documentación y desarrollo de componentes
- **TypeScript**: Tipado estático
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Página de introducción al sistema de diseño
 */
export const Introduction: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-main">
          Sistema de Diseño
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Hector Creative Portfolio
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Colores */}
        <div className="p-6 bg-gradient-to-br from-main to-red-light text-white rounded-lg">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mb-4"></div>
          <h3 className="font-semibold mb-2">Colores</h3>
          <p className="text-sm opacity-90">Paleta cuidadosamente seleccionada</p>
        </div>

        {/* Tipografía */}
        <div className="p-6 bg-gradient-to-br from-purple to-purple-light text-white rounded-lg">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center text-xs font-bold">
            Aa
          </div>
          <h3 className="font-semibold mb-2">Tipografía</h3>
          <p className="text-sm opacity-90">Eudoxus Sans, escala modular</p>
        </div>

        {/* Espaciado */}
        <div className="p-6 bg-gradient-to-br from-orange to-orange-light text-white rounded-lg">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h3 className="font-semibold mb-2">Espaciado</h3>
          <p className="text-sm opacity-90">Sistema basado en múltiplos de 4px</p>
        </div>

        {/* Componentes */}
        <div className="p-6 bg-gradient-to-br from-blue to-blue text-white rounded-lg">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          <h3 className="font-semibold mb-2">Componentes</h3>
          <p className="text-sm opacity-90">Atomic design, reutilizables</p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Principios de Diseño</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-main">Consistencia</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Patrones visuales coherentes en todos los componentes y páginas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple">Accesibilidad</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Diseño inclusivo con soporte completo para diferentes necesidades.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange">Escalabilidad</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistema que crece y se adapta con el proyecto.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue">Performance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Optimizado para carga rápida y experiencias fluidas.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Explora las diferentes secciones para conocer más sobre cada aspecto del sistema.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Página de introducción completa al sistema de diseño con sus principios fundamentales.'
      }
    }
  }
};