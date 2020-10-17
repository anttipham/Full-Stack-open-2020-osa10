import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import TabText from "./TabText";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 + Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TabText path="/">Repositories</TabText>
        <TabText path="/login">Sign in</TabText>
      </ScrollView>
    </View>
  );
};

export default AppBar;