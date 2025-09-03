import type { Meta, StoryObj } from '@storybook/react';
import { Chip, getAllCategories, getCategoryLabel, type Category } from '../storybook/Chip';

/**
 * Chip component para mostrar categorías de proyectos
 * 
 * El componente Chip se usa para mostrar y navegar entre diferentes categorías de proyectos.
 * Cada chip representa una categoría específica con estilos consistentes.
 */
const meta: Meta<typeof Chip> = {
  title: 'Components/Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
El componente Chip es un elemento pequeño y compacto que se usa para mostrar categorías de proyectos.
Proporciona navegación rápida y visual a diferentes secciones del portfolio.

## Características principales:
- **Categorías predefinidas**: web, mobile, branding, ux-ui, development, design
- **Etiquetas localizadas**: Texto en español para mejor UX
- **Estados interactivos**: Hover y focus states
- **Soporte de temas**: Automático light/dark mode con backdrop blur
- **Navegación**: Enlaces a páginas de categoría
        `
      }
    }
  },
  argTypes: {
    category: {
      control: { type: 'select' },
      options: getAllCategories(),
      description: 'Categoría del proyecto',
      table: {
        type: { summary: 'Category' }
      }
    },
    label: {
      control: 'text',
      description: 'Etiqueta personalizada (opcional, sobrescribe la etiqueta por defecto de la categoría)'
    },
    href: {
      control: 'text',
      description: 'URL personalizada (opcional, sobrescribe la URL por defecto)'
    },
    onClick: { 
      action: 'clicked',
      description: 'Callback ejecutado al hacer click'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Chip por defecto mostrando desarrollo web
 */
export const Default: Story = {
  args: {
    category: 'web'
  }
};

/**
 * Chip de desarrollo mobile
 */
export const Mobile: Story = {
  args: {
    category: 'mobile'
  }
};

/**
 * Chip de branding
 */
export const Branding: Story = {
  args: {
    category: 'branding'
  }
};

/**
 * Chip de UX/UI Design
 */
export const UxUi: Story = {
  args: {
    category: 'ux-ui'
  }
};

/**
 * Chip con etiqueta personalizada
 */
export const CustomLabel: Story = {
  args: {
    category: 'development',
    label: 'Desarrollo Custom'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de chip con una etiqueta personalizada que sobrescribe la etiqueta por defecto.'
      }
    }
  }
};

/**
 * Chip con enlace personalizado
 */
export const CustomLink: Story = {
  args: {
    category: 'design',
    href: '/custom-design-page'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de chip con un enlace personalizado en lugar del enlace por defecto de categoría.'
      }
    }
  }
};

/**
 * Todas las categorías disponibles
 */
export const AllCategories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4 max-w-md">
      {getAllCategories().map((category) => (
        <Chip 
          key={category} 
          category={category}
          onClick={() => console.log(`Clicked: ${getCategoryLabel(category)}`)}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las categorías disponibles en el sistema. Útil para ver la consistencia visual.'
      }
    }
  }
};

/**
 * Chips en diferentes contextos de fondo
 */
export const BackgroundContexts: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Fondo claro */}
      <div className="p-4 bg-white rounded-lg border">
        <h3 className="text-sm font-medium mb-3 text-gray-600">Fondo Claro</h3>
        <div className="flex flex-wrap gap-2">
          <Chip category="web" />
          <Chip category="mobile" />
          <Chip category="ux-ui" />
        </div>
      </div>
      
      {/* Fondo oscuro */}
      <div className="p-4 bg-gray-900 rounded-lg">
        <h3 className="text-sm font-medium mb-3 text-gray-300">Fondo Oscuro</h3>
        <div className="flex flex-wrap gap-2">
          <Chip category="development" />
          <Chip category="branding" />
          <Chip category="design" />
        </div>
      </div>
      
      {/* Fondo de imagen (simulado) */}
      <div 
        className="p-4 rounded-lg relative"
        style={{
          background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <h3 className="text-sm font-medium mb-3 text-white">Sobre Imagen</h3>
        <div className="flex flex-wrap gap-2">
          <Chip category="web" />
          <Chip category="mobile" />
          <Chip category="design" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demuestra cómo se ven los chips en diferentes contextos de fondo, mostrando el efecto de backdrop blur.'
      }
    }
  }
};

/**
 * Estados interactivos
 */
export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Estado Normal</h3>
        <Chip category="web" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Con Hover (pasa el mouse)</h3>
        <Chip category="mobile" onClick={() => {}} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Clickeable con Acción</h3>
        <Chip 
          category="ux-ui" 
          onClick={() => alert('¡Chip clickeado!')} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes estados de interacción del chip.'
      }
    }
  }
};