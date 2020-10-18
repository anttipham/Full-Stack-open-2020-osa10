import { Formik } from "formik";
import React from "react";
import TextButton from "./TextButton";
import FormikTextInput from "./FormikTextInput";
import Container from "./Container";
import * as yup from "yup";

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
  const onSubmit = (values) => {
    console.log(values);
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