import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Switch, Redirect } from "react-router-native";
import SignIn from "./SignIn";
import theme from "../theme";
import Repository from "./Repository";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Switch>
        <Route path="/login" component={SignIn} exact />
        <Route path="/repositories/:id" component={Repository} exact />
        <Route path="/repositories" component={RepositoryList} exact />
        <Redirect to="/repositories" />
      </Switch>
    </View>
  );
};

export default Main;