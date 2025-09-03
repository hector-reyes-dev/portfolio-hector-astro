/**
 * Storybook Component Adapters
 * React adapters for Astro components to use in Storybook
 */

// Atom Components
export { Button, type ButtonProps } from './Button';
export { Chip, type ChipProps, getAllCategories, getCategoryLabel, type Category } from './Chip';
export { SectionTitle, type SectionTitleProps, sampleHeadlines, sampleSubtitles } from './SectionTitle';

/**
 * CSS Styles bundle for easy import
 */
export const allComponentStyles = `
  /* Button Styles */
  .btn {
    @apply flex items-center gap-2 whitespace-pre p-3 rounded-[24px] text-xl font-semibold transition-all duration-200;
  }

  .main {
    color: var(--color-white);
    background: var(--main-gradient);
    box-shadow: var(--shadow-main);
  }

  .main-border {
    color: var(--color-black);
    background: var(--color-white);
    border: 1px solid var(--color-red);
    box-shadow: var(--shadow-main);
  }

  .main:hover,
  .main-border:hover {
    box-shadow: var(--shadow-main-hover);
  }

  .purple {
    color: var(--color-white);
    background: var(--purple-gradient);
    box-shadow: var(--shadow-purple);
  }

  .purple-border {
    color: var(--color-black);
    background: var(--color-white);
    border: 1px solid var(--color-purple);
    box-shadow: var(--shadow-purple);
  }

  .purple:hover,
  .purple-border:hover {
    box-shadow: var(--shadow-purple-hover);
  }

  .text {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .red-light {
    color: var(--color-white);
    background: linear-gradient(135deg, var(--color-red) 0%, var(--color-red-light) 100%);
    box-shadow: var(--shadow-main);
  }

  .red-light:hover {
    box-shadow: var(--shadow-main-hover);
  }

  /* Chip Styles */
  .chip {
    @apply py-1 px-3 rounded-md text-xs backdrop-blur-sm bg-opacity-20 bg-white dark:bg-black text-black dark:text-light shadow-sm border border-light-gray no-underline transition-all duration-200;
  }
  
  .chip:hover {
    @apply bg-opacity-30 shadow-md transform scale-105;
  }
  
  .chip:focus {
    @apply outline-none ring-2 ring-main ring-opacity-50;
  }

  /* SectionTitle Styles */
  .headline {
    @apply mb-2 text-3xl md:text-4xl text-black dark:text-white font-bold text-left sm:text-center;
  }
  
  @media (max-width: 640px) {
    .headline {
      @apply text-2xl;
    }
  }
  
  @media (min-width: 1024px) {
    .headline {
      @apply text-5xl;
    }
  }
`;