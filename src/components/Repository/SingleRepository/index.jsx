import React from "react";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../../hooks/useRepository";
import Separator from "../../Separator";
import RepositoryItem from "../RepositoryItem";
import Review from "./Review";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id, 5);

  const handleOnEndReached = () => {
    // console.log("AAAA");
    fetchMore();
  };

  if (!repository) {
    return null;
  }
  return (
    <FlatList
      data={repository.reviews}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem repository={repository} showGitHubLink />
          <Separator />
        </>
      )}
      renderItem={Review}
      onEndReached={handleOnEndReached}
      onEndReachedThreshold="0.5"
    />
  );
};

export default SingleRepository;
