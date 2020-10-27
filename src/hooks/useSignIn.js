import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

export const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()                                                                ;

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: { username, password }
    });

    // console.log(1, authStorage);
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [signIn, result.data];
};