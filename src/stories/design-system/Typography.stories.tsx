import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Dummy component for design system documentation
const TypographyPage = () => <div>Sistema de Tipografía</div>;

/**
 * Sistema de Tipografía del Design System
 */
const meta: Meta<typeof TypographyPage> = {
  title: 'Design System/Typography',
  component: TypographyPage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Sistema de Tipografía

Nuestro sistema tipográfico está basado en la fuente **Eudoxus Sans**, una tipografía moderna y legible
que proporciona excelente rendimiento tanto en pantallas como en dispositivos móviles.

## Características principales:
- **Fuente principal**: Eudoxus Sans con múltiples pesos
- **Escala modular**: Tamaños consistentes y proporcionales
- **Line Heights**: Optimizados para legibilidad
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Soporte completo**: Light y dark mode
        `
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface TypographySampleProps {
  size: string;
  weight: string;
  lineHeight: string;
  cssClass: string;
  tokenName: string;
  children: React.ReactNode;
  description?: string;
}

const TypographySample: React.FC<TypographySampleProps> = ({ 
  size, 
  weight, 
  lineHeight, 
  cssClass, 
  tokenName,
  children, 
  description 
}) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4">
    <div className="mb-4">
      <div className={cssClass} style={{ fontFamily: 'var(--font-family-sans)' }}>
        {children}
      </div>
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
      <p><strong>CSS Class:</strong> <code>{cssClass}</code></p>
      <p><strong>Token:</strong> <code>{tokenName}</code></p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Weight:</strong> {weight}</p>
      <p><strong>Line Height:</strong> {lineHeight}</p>
      {description && <p><strong>Uso:</strong> {description}</p>}
    </div>
  </div>
);

interface WeightSampleProps {
  weight: string;
  cssWeight: string;
  tokenName: string;
  description?: string;
}

const WeightSample: React.FC<WeightSampleProps> = ({ weight, cssWeight, tokenName, description }) => (
  <div className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-3">
    <div 
      className="flex-1 text-xl"
      style={{ 
        fontFamily: 'var(--font-family-sans)',
        fontWeight: cssWeight 
      }}
    >
      Eudoxus Sans {weight}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400 text-right">
      <p><strong>Weight:</strong> {cssWeight}</p>
      <p><strong>Token:</strong> <code>{tokenName}</code></p>
      {description && <p className="mt-1">{description}</p>}
    </div>
  </div>
);

/**
 * Escala de tamaños de texto
 */
export const FontSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Escala de Tamaños</h2>
      
      <TypographySample
        size="48px"
        weight="700"
        lineHeight="1.25"
        cssClass="text-5xl font-bold leading-tight"
        tokenName="var(--font-size-5xl)"
        description="Títulos principales, hero sections"
      >
        Heading 1 - Display Large
      </TypographySample>

      <TypographySample
        size="36px"
        weight="700"
        lineHeight="1.25"
        cssClass="text-4xl font-bold leading-tight"
        tokenName="var(--font-size-4xl)"
        description="Títulos de sección importantes"
      >
        Heading 2 - Display Medium
      </TypographySample>

      <TypographySample
        size="30px"
        weight="600"
        lineHeight="1.375"
        cssClass="text-3xl font-semibold leading-snug"
        tokenName="var(--font-size-3xl)"
        description="Títulos de subsección"
      >
        Heading 3 - Display Small
      </TypographySample>

      <TypographySample
        size="24px"
        weight="600"
        lineHeight="1.375"
        cssClass="text-2xl font-semibold leading-snug"
        tokenName="var(--font-size-2xl)"
        description="Títulos de cards y componentes"
      >
        Heading 4 - Title Large
      </TypographySample>

      <TypographySample
        size="20px"
        weight="600"
        lineHeight="1.5"
        cssClass="text-xl font-semibold"
        tokenName="var(--font-size-xl)"
        description="Botones, labels importantes"
      >
        Title Medium - Botones y CTAs
      </TypographySample>

      <TypographySample
        size="18px"
        weight="500"
        lineHeight="1.5"
        cssClass="text-lg font-medium"
        tokenName="var(--font-size-lg)"
        description="Texto de navegación, subtítulos"
      >
        Title Small - Navegación y subtítulos
      </TypographySample>

      <TypographySample
        size="16px"
        weight="400"
        lineHeight="1.5"
        cssClass="text-base"
        tokenName="var(--font-size-base)"
        description="Texto de párrafo principal"
      >
        Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </TypographySample>

      <TypographySample
        size="14px"
        weight="400"
        lineHeight="1.625"
        cssClass="text-sm leading-relaxed"
        tokenName="var(--font-size-sm)"
        description="Texto secundario, descriptions"
      >
        Body Small - Texto secundario y descripciones. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TypographySample>

      <TypographySample
        size="12px"
        weight="400"
        lineHeight="1.5"
        cssClass="text-xs"
        tokenName="var(--font-size-xs)"
        description="Captions, labels pequeños"
      >
        Caption - Etiquetas pequeñas, metadatos y información adicional
      </TypographySample>
    </div>
  )
};

/**
 * Pesos de fuente disponibles
 */
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Pesos de Fuente</h2>
      
      <WeightSample
        weight="Normal"
        cssWeight="400"
        tokenName="var(--font-weight-normal)"
        description="Texto de párrafo, contenido general"
      />
      
      <WeightSample
        weight="Medium"
        cssWeight="500"
        tokenName="var(--font-weight-medium)"
        description="Labels, navegación, text destacado sutil"
      />
      
      <WeightSample
        weight="SemiBold"
        cssWeight="600"
        tokenName="var(--font-weight-semibold)"
        description="Botones, títulos menores, texto importante"
      />
      
      <WeightSample
        weight="Bold"
        cssWeight="700"
        tokenName="var(--font-weight-bold)"
        description="Títulos principales, headings importantes"
      />
    </div>
  )
};

/**
 * Line Heights y espaciado
 */
export const LineHeights: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Line Heights y Espaciado</h2>
      
      <div className="space-y-6">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">Tight (1.25) - Para títulos grandes</h3>
          <p className="text-2xl leading-tight" style={{ fontFamily: 'var(--font-family-sans)' }}>
            Este es un ejemplo de line-height tight que se usa principalmente en títulos grandes y display text donde necesitamos condensar el espacio vertical.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Token: <code>var(--line-height-tight)</code> | CSS: <code>leading-tight</code>
          </p>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">Snug (1.375) - Para títulos medianos</h3>
          <p className="text-xl leading-snug" style={{ fontFamily: 'var(--font-family-sans)' }}>
            Este es un ejemplo de line-height snug que proporciona un balance perfecto entre legibilidad y uso eficiente del espacio para títulos de tamaño mediano y subtítulos.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Token: <code>var(--line-height-snug)</code> | CSS: <code>leading-snug</code>
          </p>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">Normal (1.5) - Para texto de párrafo</h3>
          <p className="text-base leading-normal" style={{ fontFamily: 'var(--font-family-sans)' }}>
            Este es un ejemplo de line-height normal que es ideal para el texto de párrafo y contenido principal. Proporciona una legibilidad excelente y es cómodo para leer en bloques de texto largos, manteniendo un ritmo visual agradable.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Token: <code>var(--line-height-normal)</code> | CSS: <code>leading-normal</code>
          </p>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">Relaxed (1.625) - Para texto secundario</h3>
          <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-family-sans)' }}>
            Este es un ejemplo de line-height relaxed que se usa en texto secundario, descripciones y contenido donde queremos mayor espacio entre líneas para mejorar la legibilidad y crear una sensación más aireada. Es especialmente útil en textos pequeños donde el espacio adicional ayuda a la comprensión.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Token: <code>var(--line-height-relaxed)</code> | CSS: <code>leading-relaxed</code>
          </p>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold mb-3">Loose (2.0) - Para casos especiales</h3>
          <p className="text-base leading-loose" style={{ fontFamily: 'var(--font-family-sans)' }}>
            Este es un ejemplo de line-height loose que se reserva para casos especiales donde necesitamos máximo espacio entre líneas, como en citas destacadas, texto decorativo o cuando queremos crear un impacto visual específico con mucho espacio vertical.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Token: <code>var(--line-height-loose)</code> | CSS: <code>leading-loose</code>
          </p>
        </div>
      </div>
    </div>
  )
};

/**
 * Ejemplos de uso en contexto
 */
export const TypographyInContext: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Tipografía en Contexto</h2>
      
      {/* Ejemplo de artículo */}
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-3xl font-bold mb-2 text-main">Desarrollo Frontend Moderno</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 tracking-wide uppercase">ARTÍCULO TÉCNICO</p>
        
        <p className="text-base mb-4">
          El desarrollo frontend ha evolucionado significativamente en los últimos años. Las tecnologías modernas como React, Vue y Angular han transformado la manera en que creamos interfaces de usuario.
        </p>
        
        <h4 className="text-xl font-semibold mb-3">Tecnologías Principales</h4>
        
        <p className="text-base mb-4">
          En nuestro stack utilizamos una combinación de herramientas que nos permite crear aplicaciones escalables y performantes:
        </p>
        
        <ul className="text-base space-y-2 mb-4 ml-4">
          <li>• <strong>React</strong> - Para componentes interactivos</li>
          <li>• <strong>Astro</strong> - Como framework principal</li>
          <li>• <strong>Tailwind CSS</strong> - Sistema de utilidades CSS</li>
        </ul>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Esta combinación nos permite mantener un código limpio y escalable.
        </p>
      </div>

      {/* Ejemplo de interfaz */}
      <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Interfaz de Usuario</h3>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-medium">Configuración del Proyecto</h4>
            <button className="text-sm font-medium text-main hover:text-red-light">
              Editar
            </button>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Ajusta la configuración básica de tu proyecto
          </p>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Nombre del proyecto</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Mi Portfolio</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Versión</span>
              <span className="text-xs bg-main text-white px-2 py-1 rounded">v1.2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};