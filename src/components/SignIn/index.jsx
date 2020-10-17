import { Formik } from "formik";
import React from "react";
import TextButton from "../TextButton";
import FormikTextInput from "../FormikTextInput";
import Container from "../Container";

const SignIn = () => {
  const initialValues = {
    username: "",
    password: ""
  };
  
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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