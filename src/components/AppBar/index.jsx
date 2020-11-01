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
  const { data, loading } = useQuery(GET_USER/* , {
    fetchPolicy: "cache-and-network",
  } */);

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const signedIn = !loading && data.authorizedUser;

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView horizontal>
        <TabText path="/">Repositories</TabText>

        {signedIn &&
          <>
            <TabText path="/createreview">Create a review</TabText>
            <TabText onPress={logout}>Sign out</TabText>
          </>
        }
        {!signedIn &&
          <>
            <TabText path="/login">Sign in</TabText>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;