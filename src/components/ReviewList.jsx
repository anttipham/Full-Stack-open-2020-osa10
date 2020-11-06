import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { FlatList } from "react-native";
import { GET_USER } from "../graphql/queries";
import Review from "./Repository/SingleRepository/Review";
import Separator from "./Separator";

const ReviewList = () => {
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true }
  });

  if (loading || !data) {
    return null;
  }
  const reviews = data.authorizedUser.reviews.edges.map(edge => ({
    ...edge.node,
    createdAt: new Date(edge.node.createdAt)
  }));
  return (
    <FlatList
      data={reviews}
      renderItem={Review}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default ReviewList;