import { useState, useEffect } from "react";

type ProjectImageSwitcherProps = {
  images: string[];
  alt: string;
};

export const ProjectImageSwitcher: React.FC<ProjectImageSwitcherProps> = ({
  images,
  alt,
}) => {
  const [current, setCurrent] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isFading, setIsFading] = useState(false);

  if (!images || images.length === 0) return null;

  // Inicia el ciclo de imágenes al hacer hover/touch
  const handleMouseEnter = () => {
    if (images.length > 1) {
      setIsActive(true);
    }
  };

  // Detiene el ciclo y regresa a la primera imagen
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  // Efecto para cambiar de imagen cada segundo mientras isActive
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 100); // Duración del fade out
    }, 500);
    return () => clearInterval(interval);
  }, [isActive, images.length]);

  return (
    <img
      src={images[current]}
      alt={alt}
      className={`object-cover rounded-lg transition-opacity duration-200 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      loading="lazy"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onTouchCancelCapture={handleMouseLeave}
      draggable={false}
      width={"708px"}
      height={"342px"}
    />
  );
};

export default ProjectImageSwitcher;
