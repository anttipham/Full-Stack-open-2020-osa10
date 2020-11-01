import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../../hooks/useRepository";
import RepositoryItem from "../RepositoryItem";
import Review from "./Review";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) {
    return null;
  }
  return (
    <FlatList
      data={repository.reviews}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem repository={repository} showGitHubLink />
          <ItemSeparator />
        </>
      )}
      renderItem={({ item }) => <Review review={item} />}
    />
  );
};

export default SingleRepository;
