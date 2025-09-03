import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

// Import all necessary styles
import './storybook.css';

const preview: Preview = {
  parameters: {
    // Enhanced controls configuration
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    
    // Actions configuration
    actions: { argTypesRegex: '^on[A-Z].*' },
    
    // Docs configuration
    docs: {
      toc: true,
      source: {
        state: 'open',
      },
    },
    
    // Backgrounds configuration (using our design tokens)
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fbfbfb', // --color-white
        },
        {
          name: 'dark',
          value: '#121218', // --color-background (dark mode)
        },
        {
          name: 'surface-light',
          value: '#efefef', // --color-light
        },
        {
          name: 'surface-dark',
          value: '#1e1e29', // --color-surface (dark mode)
        },
      ],
    },
    
    // Viewport configuration
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '900px',
          },
        },
        large: {
          name: 'Large Desktop',
          styles: {
            width: '1600px',
            height: '900px',
          },
        },
      },
    },
    
    // Layout configuration
    layout: 'padded',
    
    // Options configuration
    options: {
      storySort: {
        order: [
          'Design System',
          ['Introduction', 'Colors', 'Typography', 'Spacing', 'Components'],
          'Components',
          ['Atoms', 'Molecules', 'Organisms'],
          'Features',
          'Examples',
        ],
      },
    },
  },
  
  // Global decorators
  decorators: [
    // Theme switcher decorator
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  
  // Global arg types
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  
  // Tags configuration
  tags: ['autodocs'],
};

export default preview;