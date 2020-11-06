import { Formik } from "formik";
import React from "react";
import { ref } from "yup";
import yupFormValidation, { requiredString } from "../../utils/yupFormValidation";
import FormikTextInput from "../FormikTextInput";
import Paper from "../Paper";
import TextButton from "../TextButton";

const USERNAME_REQUIRED = "Username is required";
const USERNAME_LENGTH = "Username length must be between 1 and 30";
const PASSWORD_REQUIRED = "Password is required";
const PASSWORD_LENGTH = "Password length must be between 5 and 50";
const PASSWORD_CONFIRMATION_REQUIRED = "Password is required";
const PASSWORD_CONFIRMATION = "Password confirmation doesn't match";

const SignUpForm = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: ""
  };

  const validationSchema = yupFormValidation({
    username: requiredString(USERNAME_REQUIRED)
      .max(30, USERNAME_LENGTH),
    password: requiredString(PASSWORD_REQUIRED)
      .min(5, PASSWORD_LENGTH)
      .max(50, PASSWORD_LENGTH),
    passwordConfirmation: requiredString(PASSWORD_CONFIRMATION_REQUIRED)
      .oneOf([ref("password")], PASSWORD_CONFIRMATION)
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Paper>
          <FormikTextInput
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            secureTextEntry
          />
          <TextButton onPress={handleSubmit}>
            Sign up
          </TextButton>
        </Paper>
      )}
    </Formik>
  );
};

export default SignUpForm;
