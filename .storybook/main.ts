import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  // Configuration for subdirectory deployment
  managerHead: (head) => `
    ${head}
    <meta name="description" content="Design System - Hector Creative Portfolio">
    <meta name="keywords" content="design system, storybook, components, react, astro">
    <meta property="og:title" content="Design System - Hector Creative">
    <meta property="og:description" content="Explore the component library and design tokens">
    <meta property="og:image" content="/og-design-system.jpg">
  `,
  // Performance optimizations for production
  features: {
    modernInlineRender: true,
    buildStoriesJson: true
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    // Ensure Vite can resolve our path aliases
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@atoms': new URL('../src/components/atoms', import.meta.url).pathname,
        '@molecules': new URL('../src/components/molecules', import.meta.url).pathname,
        '@organisms': new URL('../src/components/organisms', import.meta.url).pathname,
        '@layouts': new URL('../src/components/layouts', import.meta.url).pathname,
        '@features': new URL('../src/features', import.meta.url).pathname,
        '@constants': new URL('../src/constants', import.meta.url).pathname,
        '@lib': new URL('../src/lib', import.meta.url).pathname,
        '@styles': new URL('../src/styles', import.meta.url).pathname,
        '@assets': new URL('../src/assets', import.meta.url).pathname,
      };
    }
    return config;
  },
};
export default config;