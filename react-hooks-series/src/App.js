
import ToggleTheme from "./UseContextExample/TogglePage.jsx";

import { ThemeProvider } from "./UseContextExample/UseContextExample.jsx";

import "./styles.css";

function App() {
  return (

    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
    
  );
}

export default App;