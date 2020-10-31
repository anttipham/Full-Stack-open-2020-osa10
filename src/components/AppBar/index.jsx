import { useApolloClient, useQuery } from "@apollo/react-hooks";
import React from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { GET_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import theme from "../../theme";
import TabText from "./TabText";
// import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    // My statusbar doesn't seem to need the padding
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });
  // console.log("loading", loading);
  // loading || console.log("user", data.authorizedUser);

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView horizontal>
        <TabText path="/">Repositories</TabText>

        {loading || !data.authorizedUser
          ? <TabText path="/login">Sign in</TabText>
          : <TabText onPress={logout}>Sign out</TabText>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;