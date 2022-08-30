import React, {createContext, useContext} from 'react';
import {ThemeType, theme} from '../assets/theme';

const ThemeContext = createContext({} as {theme: ThemeType});

const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
