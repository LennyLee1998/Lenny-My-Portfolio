"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

const THEME = "theme";
type Theme = "dark" | "light";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
// 1.创建context
// 2.把要传递的值放到context里面
// 2.通过provider传递value

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem(THEME, "dark");
      //
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem(THEME, "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // runs after rendering , 所以这里会先看到默认的html
  useEffect(() => {
    const themeStorage = localStorage.getItem(THEME) as Theme | null;
    if (themeStorage) {
      setTheme(themeStorage);
      if (themeStorage === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
    // 系统的配置
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  // 在ThemeContextProvider外面的组件会得到null
  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}
