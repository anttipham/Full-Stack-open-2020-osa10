import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  touchableText: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    textAlign: "center",
  },
});

const TextButton = ({ style, children, ...props }) => {
  const touchableTextStyle = [styles.touchableText, style];

  return (
    <TouchableWithoutFeedback {...props}>
      <Text
        style={touchableTextStyle}
        fontSize="heading"
        color="white"
      >
        {children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default TextButton;