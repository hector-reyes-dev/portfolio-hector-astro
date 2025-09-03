import React from 'react';

/**
 * Category type matching the original implementation
 */
export type Category = 'web' | 'mobile' | 'branding' | 'ux-ui' | 'development' | 'design';

/**
 * Chip component props matching the Astro Chip interface
 */
export interface ChipProps {
  /** Category identifier */
  category: Category;
  /** Optional custom label override */
  label?: string;
  /** Optional click handler for Storybook interactions */
  onClick?: () => void;
  /** Optional href override for Storybook */
  href?: string;
}

/**
 * Category display names mapping
 * Matches the original implementation from getCategory
 */
const categoryLabels: Record<Category, string> = {
  'web': 'Desarrollo Web',
  'mobile': 'Desarrollo Mobile',
  'branding': 'Branding',
  'ux-ui': 'UX/UI Design',
  'development': 'Desarrollo',
  'design': 'Diseño'
};

/**
 * React adapter for the Astro Chip component
 * Maintains the same API and styling as the original Astro component
 */
export const Chip: React.FC<ChipProps> = ({
  category,
  label,
  onClick,
  href
}) => {
  const displayText = label || categoryLabels[category] || category;
  const linkHref = href || `/projects/category/${category}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={linkHref} 
      className="chip"
      onClick={handleClick}
      title={`Ver proyectos de ${displayText}`}
    >
      {displayText}
    </a>
  );
};

// Estilos ya definidos en storybook.css y design tokens

/**
 * Storybook utility: Get all available categories
 */
export const getAllCategories = (): Category[] => {
  return Object.keys(categoryLabels) as Category[];
};

/**
 * Storybook utility: Get category display name
 */
export const getCategoryLabel = (category: Category): string => {
  return categoryLabels[category] || category;
};

export default Chip;