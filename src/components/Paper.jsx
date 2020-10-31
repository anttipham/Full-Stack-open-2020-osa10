import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
});

const Paper = ({ style, ...props }) => {
  const textInputStyle = [styles.container, style];

  return <View style={textInputStyle} {...props} />;
};

export default Paper;