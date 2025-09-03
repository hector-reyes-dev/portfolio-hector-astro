import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../storybook/Button';

/**
 * Button component para el sistema de diseño
 * 
 * El componente Button es un elemento fundamental que se usa a lo largo de toda la aplicación.
 * Soporta diferentes variantes visuales y tipos de contenido.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
El componente Button es un elemento interactivo que permite a los usuarios realizar acciones.
Está disponible en múltiples variantes visuales y soporta tanto iconos como texto.

## Características principales:
- **Variantes de estilo**: main, purple, red-light, main-border, purple-border
- **Tipos de contenido**: text, icon
- **Soporte de temas**: Automático light/dark mode
- **Accesibilidad**: Labels y titles apropiados
        `
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'icon'],
      description: 'Tipo de contenido del botón',
      table: {
        defaultValue: { summary: 'text' }
      }
    },
    style: {
      control: { type: 'select' },
      options: ['main', 'purple', 'red-light', 'main-border', 'purple-border'],
      description: 'Variante visual del botón',
      table: {
        defaultValue: { summary: 'main' }
      }
    },
    name: {
      control: 'text',
      description: 'Nombre/label del botón para accesibilidad'
    },
    href: {
      control: 'text',
      description: 'URL de destino del botón'
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Target del enlace',
      table: {
        defaultValue: { summary: '_self' }
      }
    },
    children: {
      control: 'text',
      description: 'Contenido del botón (texto o icono)'
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
 * Botón principal con gradiente rojo
 */
export const Primary: Story = {
  args: {
    type: 'text',
    style: 'main',
    name: 'Botón Principal',
    href: '#',
    children: 'Botón Principal'
  }
};

/**
 * Botón secundario con gradiente púrpura
 */
export const Secondary: Story = {
  args: {
    type: 'text',
    style: 'purple',
    name: 'Botón Secundario',
    href: '#',
    children: 'Botón Secundario'
  }
};

/**
 * Botón con borde principal
 */
export const MainOutline: Story = {
  args: {
    type: 'text',
    style: 'main-border',
    name: 'Botón con Borde',
    href: '#',
    children: 'Botón con Borde'
  }
};

/**
 * Botón con borde púrpura
 */
export const PurpleOutline: Story = {
  args: {
    type: 'text',
    style: 'purple-border',
    name: 'Botón Púrpura',
    href: '#',
    children: 'Botón Púrpura'
  }
};

/**
 * Botón con variante rojo claro
 */
export const RedLight: Story = {
  args: {
    type: 'text',
    style: 'red-light',
    name: 'Botón Rojo Claro',
    href: '#',
    children: 'Botón Rojo Claro'
  }
};

/**
 * Botón tipo icono
 */
export const IconButton: Story = {
  args: {
    type: 'icon',
    style: 'main',
    name: 'Botón con Icono',
    href: '#',
    children: '→'
  }
};

/**
 * Botón con enlace externo
 */
export const ExternalLink: Story = {
  args: {
    type: 'text',
    style: 'main',
    name: 'Enlace Externo',
    href: 'https://ejemplo.com',
    target: '_blank',
    children: 'Abrir Enlace Externo'
  }
};

/**
 * Todas las variantes del botón para comparación
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Button type="text" style="main" name="Principal" href="#">
        Principal
      </Button>
      <Button type="text" style="purple" name="Púrpura" href="#">
        Púrpura
      </Button>
      <Button type="text" style="red-light" name="Rojo Claro" href="#">
        Rojo Claro
      </Button>
      <Button type="text" style="main-border" name="Borde Principal" href="#">
        Borde Principal
      </Button>
      <Button type="text" style="purple-border" name="Borde Púrpura" href="#">
        Borde Púrpura
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles del botón.'
      }
    }
  }
};

/**
 * Estados de interacción
 */
export const InteractiveStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Estado Normal</h3>
        <Button type="text" style="main" name="Normal" href="#">
          Estado Normal
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Con Hover (pasa el mouse)</h3>
        <Button type="text" style="main" name="Hover" href="#" onClick={() => {}}>
          Con Hover
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demostración de los diferentes estados de interacción del botón.'
      }
    }
  }
};