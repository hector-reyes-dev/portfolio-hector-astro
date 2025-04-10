import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";

type Theme = "light" | "dark" | null;

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const initialTheme: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";

    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    setTheme((prevTheme: Theme) => {
      if (prevTheme === null) return "light";
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    if (theme === null) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  if (theme === null) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={`Cambiar a tema ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
