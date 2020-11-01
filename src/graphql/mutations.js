import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    authorize(
      credentials: { username: $username, password: $password }
    ) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
    createReview(review: {
      ownerName: $ownerName,
      repositoryName: $repositoryName,
      rating: $rating,
      text: $text
    }) {
      id
      repositoryId
    }
  }
`;