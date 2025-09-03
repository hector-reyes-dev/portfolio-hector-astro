import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle, sampleHeadlines, sampleSubtitles } from '../storybook/SectionTitle';

/**
 * SectionTitle component para títulos de sección
 * 
 * El componente SectionTitle se usa para crear títulos de sección consistentes a lo largo
 * de toda la aplicación. Incluye un subtitle y un headline con la última palabra destacada.
 */
const meta: Meta<typeof SectionTitle> = {
  title: 'Components/Atoms/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
El componente SectionTitle es un elemento clave para la jerarquía visual y estructura de contenido.
Consiste en un subtitle (en mayúsculas y con tracking amplio) y un headline donde la última palabra se destaca en rojo.

## Características principales:
- **Subtitle**: Texto en mayúsculas con tracking amplio en color gris
- **Headline**: Título principal con la última palabra destacada en rojo
- **Responsive**: Tamaños adaptativos según breakpoints
- **Alineación**: Centrado en pantallas grandes, izquierda en móviles
- **Soporte de temas**: Automático light/dark mode
- **Tipografía**: Usa la fuente Eudoxus Sans con pesos apropiados
        `
      }
    }
  },
  argTypes: {
    subtitle: {
      control: 'text',
      description: 'Texto del subtitle (se muestra en mayúsculas automáticamente)'
    },
    headline: {
      control: 'text',
      description: 'Texto del headline principal (última palabra se destaca en rojo)'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Título de sección por defecto
 */
export const Default: Story = {
  args: {
    subtitle: 'QUÉ HAGO',
    headline: 'Desarrollo de Aplicaciones'
  }
};

/**
 * Título para sección "Sobre mí"
 */
export const About: Story = {
  args: {
    subtitle: 'SOBRE MÍ',
    headline: 'Diseñador y Desarrollador'
  }
};

/**
 * Título para sección de proyectos
 */
export const Projects: Story = {
  args: {
    subtitle: 'PROYECTOS',
    headline: 'Portfolio de Trabajo'
  }
};

/**
 * Título para sección de servicios
 */
export const Services: Story = {
  args: {
    subtitle: 'SERVICIOS',
    headline: 'Soluciones Digitales'
  }
};

/**
 * Título para sección de contacto
 */
export const Contact: Story = {
  args: {
    subtitle: 'CONTACTO',
    headline: 'Trabajemos Juntos'
  }
};

/**
 * Título con una sola palabra (sin destacado)
 */
export const SingleWord: Story = {
  args: {
    subtitle: 'ESPECIALIDAD',
    headline: 'Frontend'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cuando el headline tiene una sola palabra, no se aplica el destacado rojo.'
      }
    }
  }
};

/**
 * Título largo para probar responsividad
 */
export const LongTitle: Story = {
  args: {
    subtitle: 'EXPERIENCIA PROFESIONAL',
    headline: 'Desarrollo de Aplicaciones Web y Móviles Modernas'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con título largo para probar el comportamiento responsive.'
      }
    }
  }
};

/**
 * Todos los ejemplos de títulos
 */
export const AllExamples: Story = {
  render: () => (
    <div className="space-y-12 w-full">
      {sampleSubtitles.map((subtitle, index) => {
        const headline = sampleHeadlines[index] || sampleHeadlines[0];
        return (
          <div key={`${subtitle}-${index}`} className="w-full">
            <SectionTitle 
              subtitle={subtitle} 
              headline={headline}
            />
          </div>
        );
      })}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra varios ejemplos de SectionTitle con diferentes combinaciones de subtitle y headline.'
      }
    }
  }
};

/**
 * Comparación de tamaños en diferentes breakpoints
 */
export const ResponsiveComparison: Story = {
  render: () => (
    <div className="space-y-8 w-full">
      <div className="border-2 border-dashed border-gray-300 p-4 rounded">
        <p className="text-xs text-gray-500 mb-4">Simulación Mobile (menor a 640px)</p>
        <div style={{ maxWidth: '375px' }}>
          <SectionTitle 
            subtitle="RESPONSIVE" 
            headline="Diseño Adaptativo"
          />
        </div>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 p-4 rounded">
        <p className="text-xs text-gray-500 mb-4">Simulación Tablet (768px)</p>
        <div style={{ maxWidth: '768px' }}>
          <SectionTitle 
            subtitle="TABLET" 
            headline="Vista en Tablet"
          />
        </div>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 p-4 rounded">
        <p className="text-xs text-gray-500 mb-4">Simulación Desktop (mayor a 1024px)</p>
        <div style={{ maxWidth: '1200px' }}>
          <SectionTitle 
            subtitle="DESKTOP" 
            headline="Vista en Escritorio"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demuestra cómo se adapta el componente en diferentes tamaños de pantalla.'
      }
    }
  }
};

/**
 * Variaciones de estilo de texto
 */
export const TextVariations: Story = {
  render: () => (
    <div className="space-y-8 w-full">
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Texto corto</h3>
        <SectionTitle subtitle="INICIO" headline="Bienvenido" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Texto medio</h3>
        <SectionTitle subtitle="SERVICIOS" headline="Desarrollo Frontend" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Texto largo</h3>
        <SectionTitle 
          subtitle="EXPERIENCIA PROFESIONAL" 
          headline="Desarrollo de Aplicaciones Web Modernas y Escalables" 
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-4 text-gray-600">Con números</h3>
        <SectionTitle subtitle="ESTADÍSTICAS" headline="Más de 50 Proyectos" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes variaciones de longitud y tipo de texto para probar la flexibilidad del componente.'
      }
    }
  }
};