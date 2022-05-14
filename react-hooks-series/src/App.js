
import ToggleTheme from "./UseContextExample/TogglePage.jsx";

import { ThemeProvider } from "./UseContextExample/Themecontext.jsx";

import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}