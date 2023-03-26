import { useCallback, useEffect, useState } from "react";

export const useSystemTheme = () => {
  const getCurrentTheme = useCallback(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = useCallback((e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme ? "dark" : "light";
};
