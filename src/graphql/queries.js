import { gql } from "apollo-boost";
import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      url
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;