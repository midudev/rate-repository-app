import { Platform } from "react-native";

export const MODES = {
  LIGHT: "light",
  DARK: "dark",
};

const COMMON_STYLES = {
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  appBar: {
    primary: "#24292e",
    textSecondary: "#999",
    textPrimary: "#fff",
  },
  colors: {
    primary: "#0366d6",
    white: "#fefefe",
    darkPrimary: '#363946',
    darkSecondary: '#262936',
    lightPrimary: '#f1f5f5',
    lightSecondary: '#e1e5e5',
  }
};

export const THEMES = {
  [MODES.LIGHT]: {
    ...COMMON_STYLES,
    name: MODES.LIGHT,
    colors: {
      ...COMMON_STYLES.colors,
      textPrimary: COMMON_STYLES.colors.darkPrimary,
      textSecondary: COMMON_STYLES.colors.darkSecondary,
      backgroundPrimary: COMMON_STYLES.colors.lightPrimary,
      backgroundSecondary:  COMMON_STYLES.colors.lightSecondary,
    },
  },
  [MODES.DARK]: {
    ...COMMON_STYLES,
    name: MODES.DARK,
    colors: {
      ...COMMON_STYLES.colors,
      textPrimary: COMMON_STYLES.colors.lightPrimary,
      textSecondary: COMMON_STYLES.colors.lightSecondary,
      backgroundPrimary: COMMON_STYLES.colors.darkPrimary,
      backgroundSecondary:  COMMON_STYLES.colors.darkSecondary,
    },
  },
};

const theme = {
  ...COMMON_STYLES,
  colors: {
    ...COMMON_STYLES.colors,
    textPrimary: "#24292e",
    textSecondary: "#586069"
  },
};

export default theme;
