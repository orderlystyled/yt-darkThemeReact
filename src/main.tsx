import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import ThemeProvider from "./theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider default="light">
    <App />
  </ThemeProvider>
);
