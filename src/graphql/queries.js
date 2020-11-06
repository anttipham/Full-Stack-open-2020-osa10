import { gql } from "apollo-boost";
import { PAGEINFO_VALUES_FOR_PAGINATION, REPOSITORY_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $after: String,
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      after: $after,
      first: $first
    ) {
      pageInfo {
        ...PageInfoValuesForPagination
      }
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGEINFO_VALUES_FOR_PAGINATION}
`;

export const GET_REPOSITORY = gql`
  query GetRepository(
    $id: ID!
    $after: String
    $first: Int
  ) {
    repository(id: $id) {
      url
      ...RepositoryDetails
      reviews(after: $after, first: $first) {
        pageInfo {
          ...PageInfoValuesForPagination
        }
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGEINFO_VALUES_FOR_PAGINATION}
`;

export const GET_USER = gql`
  query AuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username

      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;