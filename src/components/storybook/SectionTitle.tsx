import React from 'react';

/**
 * SectionTitle component props matching the Astro SectionTitle interface
 */
export interface SectionTitleProps {
  /** Main headline text */
  headline: string;
  /** Subtitle text displayed above headline */
  subtitle: string;
}

/**
 * Utility function matching the original getLastWord implementation
 */
function getLastWord(sentence: string): { text: string; lastWord: string } {
  const trimmed = sentence.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return { text: trimmed, lastWord: "" };
  }

  return {
    text: trimmed.substring(0, lastSpaceIndex),
    lastWord: trimmed.substring(lastSpaceIndex + 1),
  };
}

/**
 * React adapter for the Astro SectionTitle component
 * Maintains the same API and styling as the original Astro component
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  headline,
  subtitle
}) => {
  const { text, lastWord } = getLastWord(headline);

  return (
    <div className="w-full flex flex-col items-start sm:items-center mb-4">
      <span className="uppercase text-gray tracking-widest">
        {subtitle}
      </span>
      <h2 className="headline">
        {text}
        {lastWord && (
          <span className="text-red"> {lastWord}</span>
        )}
      </h2>
    </div>
  );
};

// Estilos ya definidos en storybook.css y design tokens

/**
 * Storybook utility: Sample headlines for testing
 */
export const sampleHeadlines = [
  "Desarrollo de Aplicaciones",
  "Diseño de Experiencia",
  "Proyectos Creativos",
  "Soluciones Digitales",
  "Portfolio Personal",
  "Servicios Profesionales"
];

/**
 * Storybook utility: Sample subtitles for testing
 */
export const sampleSubtitles = [
  "QUÉ HAGO",
  "SOBRE MÍ",
  "PROYECTOS",
  "SERVICIOS",
  "CONTACTO",
  "EXPERIENCIA"
];

export default SectionTitle;