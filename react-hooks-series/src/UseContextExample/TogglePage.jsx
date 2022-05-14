import React, { useContext } from "react";

// importing the context object that we created
import { ThemeContext } from './UseContextExample.jsx';

const ToggleTheme = () => {

  // Access the context object
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={theme === "light" ? "light" : "dark"}>
        The current theme is <span>{theme}</span>
      </div>
    </>
  );
};

export default ToggleTheme;
