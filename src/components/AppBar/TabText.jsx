import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";

const styles = StyleSheet.create({
  tabText: {
    margin: 20,
  },
});

const TabText = ({ path, onPress,  ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Link
        to={path}
        component={Text}
        fontSize="heading"
        color="white"
        style={styles.tabText}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
};

export default TabText;
