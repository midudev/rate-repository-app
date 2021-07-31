import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import useStyles from "../hooks/useStyles";
import { MODES } from "../themes/theme";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    alignItems: "flex-start",
  },
  switcher: {
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 16,
  },
});

const SwitcherTheme = ({ style }) => {
  const [isEnabled, setEnable] = useState(false);
  const { handleTheme } = useStyles();

  useEffect(() => {
    handleTheme(isEnabled ? MODES.DARK : MODES.LIGHT);
  }, [isEnabled]);

  const toggleSwitch = () => setEnable(!isEnabled);
  
  return (
    <View style={[styles.container, style]}>
      <StyledText style={styles.icon}>🌞</StyledText>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switcher}
      />
      <StyledText style={styles.icon}>🌚</StyledText>
    </View>
  );
};

export default SwitcherTheme;
