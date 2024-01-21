import { useContext, useState } from "react";
import { ThemeContext } from "./theme-provider";

const THEME_ICON_MAP = {
  light: "☀️",
  dark: "🌚",
  cupcake: "🧁",
};

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeIcon, setThemeIcon] = useState(THEME_ICON_MAP[theme]);

  const changeTheme = (t: string) => {
    if (t == "light") {
      setTheme("light");
      setThemeIcon(THEME_ICON_MAP["light"]);
    } else if (t == "dark") {
      setTheme("dark");
      setThemeIcon(THEME_ICON_MAP["dark"]);
    } else {
      setTheme("cupcake");
      setThemeIcon(THEME_ICON_MAP["cupcake"]);
    }
  };
  return (
    <main>
      <h1>Theme</h1>
      <span>{themeIcon}</span>
      {/* Theme Switch Components Here */}
      <div>
        <button onClick={() => changeTheme("light")}>☀️</button>
        <button onClick={() => changeTheme("dark")}>🌚</button>
        <button onClick={() => changeTheme("cupcake")}>🧁</button>
      </div>
    </main>
  );
}

export default App;
