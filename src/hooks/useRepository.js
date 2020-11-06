import { useQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, fetchAmount = 2) => {
  const [repository, setRepository] = useState(null);
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id, first: fetchAmount },
  });

  const handleFetchMore = async () => {
    if (loading || !data || !data.repository.reviews.pageInfo.hasNextPage) {
      return;
    }

    await fetchMore({
      variables: {
        id,
        first: fetchAmount,
        after: data.repository.reviews.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
              ...previousResult.repository.reviews.edges,
              ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        return nextResult;
      },
    });
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const reviews = data.repository.reviews.edges.map(edge => {
      const { node: review } = edge;
      return {
        ...review,
        createdAt: new Date(review.createdAt)
      };
    });

    setRepository({
      ...data.repository,
      reviews
    });
  }, [data]);

  return {
    fetchMore: handleFetchMore,
    repository,
    loading
  };
};

export default useRepository;