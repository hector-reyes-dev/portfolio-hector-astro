import { type ReactNode } from "react";

interface BackButtonProps {
  children: ReactNode;
}

export const BackButton: React.FC<BackButtonProps> = ({ children }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button onClick={goBack} className="my-2 text-main flex gap-1 items-center">
      {children}
      <span>Regresar</span>
    </button>
  );
};
