import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../../hooks/useRepositories";
import ListItem from "./ListItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  // console.log(repositories);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={ListItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;