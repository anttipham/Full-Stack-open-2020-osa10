import { Formik } from "formik";
import React from "react";
import TextButton from "./TextButton";
import FormikTextInput from "./FormikTextInput";
import Paper from "./Paper";
import { useSignIn } from "../hooks/useSignIn";
import { useHistory } from "react-router-native";
import yupFormValidation, { requiredString } from "../utils/yupFormValidation";

const USERNAME_REQUIRED = "Username is required";
const PASSWORD_REQUIRED = "Password is required";

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = yupFormValidation({
    username: requiredString(USERNAME_REQUIRED),
    password: requiredString(PASSWORD_REQUIRED),
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