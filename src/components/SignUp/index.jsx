import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useHistory } from "react-router-native";
import { CREATE_USER } from "../../graphql/mutations";
import { useSignIn } from "../../hooks/useSignIn";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [mutate] = useMutation(CREATE_USER);
  const history = useHistory();
  const [signIn] = useSignIn();


  const onSubmit = async ({ username, password }) => {
    console.log("signed up", username);

    try {
      await mutate({ variables: { username, password } });
      signIn({ username, password });
      history.push("/repositories");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
