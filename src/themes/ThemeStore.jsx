import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useMemo, useEffect } from "react";
import { MODES, THEMES } from "./theme";

const THEME_STORAGE_KEY = "theme";

export const ThemeContext = createContext({theme: THEMES[MODES.LIGHT], switchTheme: () => {}});

const ThemeStoreProvider = ({ children }) => {
  const [mode, setMode] = useState(MODES.LIGHT);

  useEffect(() => {
    const getThemeManageStorage = async () => {
      const theme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (theme) setMode(theme);
    };
    getThemeManageStorage();
  }, []);

  const switchTheme = async (value) => {
    if (!value) value = mode === MODES.LIGHT ? MODES.DARK : MODES.LIGHT;

    // TODO save themeName in AsyncStorage of third class
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, value);
      setMode(value);
    } catch (error) {
      console.error("::: Error changing theme", error);
    }
  };

  const theme = useMemo(() => THEMES[mode ? mode : MODES.LIGHT], [mode]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeStoreProvider;
