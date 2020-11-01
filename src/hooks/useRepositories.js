import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return {
    repositories: loading ? null : data.repositories,
    loading,
    refetch
  };
};

export default useRepositories;