
// What is Context in react?

// Context provides a way to pass data through the component tree without 
//having to pass props down manually at every level.
// ----------------------------

//What is the useContext hook?
//useContext hook acts as an API to retrieve data stored inside the context.
// ----------------------------

import React, { useState } from "react";

// Create context object
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
