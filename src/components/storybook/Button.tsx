import React from 'react';

/**
 * Button component props matching the Astro Button interface
 */
export interface ButtonProps {
  /** Button display type - icon or text */
  type: "text" | "icon";
  /** Button label/name */
  name: string;
  /** Link destination */
  href?: string;
  /** Link target attribute */
  target?: string;
  /** Button visual style variant */
  style?: "red-light" | "main" | "purple" | "main-border" | "purple-border";
  /** Click handler for Storybook interactions */
  onClick?: () => void;
  /** Button content (icon or text) */
  children?: React.ReactNode;
}

/**
 * React adapter for the Astro Button component
 * Maintains the same API and styling as the original Astro component
 */
export const Button: React.FC<ButtonProps> = ({
  type,
  href,
  name,
  target = "_self",
  style = "main",
  onClick,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      target={target}
      onClick={handleClick}
      className="inline-block"
      aria-label={name}
      title={name}
    >
      <button 
        className={`btn ${style} ${type}`} 
        aria-label={name} 
        title={name}
        type="button"
      >
        {children}
      </button>
    </a>
  );
};

// Estilos ya definidos en storybook.css y design tokens

export default Button;