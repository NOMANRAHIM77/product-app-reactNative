import React, { createContext, useState } from "react";

export const ThemeContext = createContext({ dark: false, toggle: () => {} });

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; // default export
