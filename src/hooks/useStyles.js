import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../themes/ThemeStore";
import { isArray, isNumber, isObject } from "../utils/utils";

const THEME_PREFIX = "$$theme.";

const useStyles = (styles = {}) => {
  const a = useContext(ThemeContext);
  const { theme, switchTheme }  = a
  const [stylesThemed, setStylesThemed] = useState(() => {
    let inital_styles = recursiveAnyType(styles, (string) =>
      !isThemeProperty(string) ? string : null
    );
    return StyleSheet.create(inital_styles);
  });

  useEffect(() => {
    let _styles = handleStyles(styles);
    setStylesThemed(StyleSheet.create(_styles));
  }, [theme]);

  const handleStyles = useCallback(
    (value) => recursiveAnyType(value, handleTmp),
    [theme]
  );

  const handleTmp = useCallback(
    (string) => {
      if (isNumber(string) || !isThemeProperty(string)) return string;

      let result = { ...theme };
      let arrayProperties = string.substr(THEME_PREFIX.length).split(".");
      arrayProperties.forEach((prop) => (result = result?.[prop]));

      if (!result)
        console.error(
          `::: Error in style ${string} not recognized in theme object :::`
        );

      return result;
    },
    [theme]
  );

  const handleTheme = (themeName) => {
    if (!themeName) {
      themeName = theme.name === MODES.LIGHT ? MODES.DARK : MODES.LIGHT;
    }
    switchTheme(themeName);
  };

  return {
    styles: stylesThemed,
    handleTheme,
  };
};

export default useStyles;

const recursiveAnyType = (element, scapeCallback) => {
  if (!isObject(element) && !isArray(element)) return scapeCallback(element);
  if (isObject(element)) {
    let newObj = {};
    Object.keys(element).forEach(
      (value) =>
        (newObj[value] = recursiveAnyType(element[value], scapeCallback))
    );
    return newObj;
  }
  if (isArray(element)) {
    return element.map((value) => recursiveAnyType(value, scapeCallback));
  }
};

const isThemeProperty = (value) =>
  typeof value === "number" || value.startsWith(THEME_PREFIX);
