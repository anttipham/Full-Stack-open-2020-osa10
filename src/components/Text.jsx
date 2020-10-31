import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  alignCenter: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  colorWhite: {
    color: "white",
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, center, ...props }) => {
  const textStyle = [
    styles.text,
    center && styles.alignCenter,
    color === "white" && styles.colorWhite,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    fontWeight === "body" && styles.fontWeightBodyText,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;