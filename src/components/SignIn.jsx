import { Formik } from "formik";
import React from "react";
import TextButton from "./TextButton";
import FormikTextInput from "./FormikTextInput";
import Paper from "./Paper";
import * as yup from "yup";
import { useSignIn } from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: ""
  };

  const requiredString = (errorMessage) => yup.string().required(errorMessage);
  const validationSchema = yup.object().shape({
    username: requiredString("Username is required"),
    password: requiredString("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Paper>
          <FormikTextInput placeholder="Username" name="username" />
          <FormikTextInput placeholder="Password" name="password" secureTextEntry />
          <TextButton onPress={handleSubmit}>
            Sign in
          </TextButton>
        </Paper>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push("/repositories");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;