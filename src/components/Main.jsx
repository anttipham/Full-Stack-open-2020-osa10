import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./Repository/RepositoryList";
import { Route, Switch, Redirect } from "react-router-native";
import SignIn from "./SignIn";
import theme from "../theme";
import SingleRepository from "./Repository/SingleRepository";
import Review from "./Review";
import SignUp from "./SignUp";
import ReviewList from "./ReviewList";

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
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/reviews" component={ReviewList} exact />
        <Route path="/createreview" component={Review} exact />
        <Route path="/repositories/:id" component={SingleRepository} exact />
        <Route path="/repositories" component={RepositoryList} exact />
        <Redirect to="/repositories" />
      </Switch>
    </View>
  );
};

export default Main;