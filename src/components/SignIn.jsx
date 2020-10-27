import { Formik } from "formik";
import React from "react";
import TextButton from "./TextButton";
import FormikTextInput from "./FormikTextInput";
import Container from "./Container";
import * as yup from "yup";
import { useSignIn } from "../hooks/useSignIn";
import { useHistory } from "react-router-native";

const INITIAL_VALUES = {
  username: "",
  password: ""
};

const requiredString = (errorMessage) => yup.string().required(errorMessage);

const validationSchema = yup.object().shape({
  username: requiredString("Username is required"),
  password: requiredString("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Container>
          <FormikTextInput placeholder="Username" name="username" />
          <FormikTextInput placeholder="Password" name="password" secureTextEntry />
          <TextButton onPress={handleSubmit}>
            Sign in
          </TextButton>
        </Container>
      )}
    </Formik>
    // <Text>ä</Text>
  );
};

export default SignIn;