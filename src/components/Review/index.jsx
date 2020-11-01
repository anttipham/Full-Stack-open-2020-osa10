import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useHistory } from "react-router-native";
import { CREATE_REVIEW } from "../../graphql/mutations";
import ReviewForm from "./ReviewForm";

const Review = () => {
  const history = useHistory();
  const [mutate] = useMutation(CREATE_REVIEW);

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      rating = Number(rating);
      const result = await mutate({
        variables: { ownerName, repositoryName, rating, text }
      });
      console.log("created review", result.data.createReview.repositoryId);
      history.push(`/repositories/${result.data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewForm onSubmit={onSubmit} />
  );
};

export default Review;
