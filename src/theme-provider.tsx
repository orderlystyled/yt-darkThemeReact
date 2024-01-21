import React, { ReactNode, createContext, useEffect, useState } from "react";

type Themes = "light" | "dark" | "cupcake";

type ThemeProivderProps = {
  default: Themes;
  children: ReactNode;
};

type ThemeContext = {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  setTheme: () => null,
});

const ThemeProvider = (props: ThemeProivderProps) => {
  const [theme, setTheme] = useState<Themes>(props.default);

  const themeHandler = () => {
    const rootElement = window.document.documentElement;

    // Remove any existing Theme
    rootElement.setAttribute("data-theme", "");

    switch (theme) {
      case "light": {
        rootElement.setAttribute("data-theme", "light");
        break;
      }
      case "dark": {
        rootElement.setAttribute("data-theme", "dark");
        break;
      }
      case "cupcake": {
        rootElement.setAttribute("data-theme", "cupcake");
        break;
      }
    }
  };

  const value = {
    theme,
    setTheme,
  };

  useEffect(() => {
    themeHandler();
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
