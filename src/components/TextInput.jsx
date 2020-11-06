import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    padding: 15,
    borderRadius: 5,
    borderColor: theme.colors.background,
    borderWidth: 2
  },
  error: {
    borderColor: theme.colors.error,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.text, style, error && styles.error];

  return (
    <NativeTextInput
      autoCapitalize="none"
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;