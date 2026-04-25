import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("fluxitour_theme") === "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add("light");
      localStorage.setItem("fluxitour_theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("fluxitour_theme", "dark");
    }
  }, [isLight]);

  // Apply saved theme on mount
  useEffect(() => {
    if (localStorage.getItem("fluxitour_theme") === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <button
      onClick={() => setIsLight((prev) => !prev)}
      title={isLight ? "Mudar para tema escuro" : "Mudar para tema claro"}
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label="Alternar tema"
    >
      {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
