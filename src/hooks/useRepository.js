import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });
  // console.log(data);

  let repository = null;
  if (!loading) {
    const reviews = data.repository.reviews.edges.map(edge => {
      const { node: review } = edge;
      return {
        ...review,
        createdAt: new Date(review.createdAt)
      };
    });

    repository = {
      ...data.repository,
      reviews
    };
  }

  console.log(repository);
  return {
    repository,
    loading
  };
};

export default useRepository;