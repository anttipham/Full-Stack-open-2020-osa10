import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";

const Repository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  if (loading) {
    return null;
  }

  console.log(data);
  return (
    <RepositoryItem item={data.repository} showGitHubLink />
  );
};

export default Repository;
