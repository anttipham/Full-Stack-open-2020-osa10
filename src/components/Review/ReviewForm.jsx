import { Formik } from "formik";
import React from "react";
import { string } from "yup";
import yupFormValidation, { requiredString, requiredNumber } from "../../utils/yupFormValidation";
import FormikTextInput from "../FormikTextInput";
import Paper from "../Paper";
import TextButton from "../TextButton";
import Constants from "expo-constants";

const OWNER_NAME_REQUIRED = "Repository owner name is required";
const REPOSITORY_NAME_REQUIRED = "Repository name is required";
const RATING_REQUIRED = "Rating is required";
const RATING_MINMAX = "Rating must be between 0 and 100";

const ReviewForm = ({ onSubmit }) => {
  let initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: ""
  };
  if (Constants.manifest.extra.env === "development") {
    initialValues = {
      ownerName: "rzwitserloot",
      repositoryName: "lombok",
      rating: "100",
      text: ""
    };
  }

  const validationSchema = yupFormValidation({
    ownerName: requiredString(OWNER_NAME_REQUIRED),
    repositoryName: requiredString(REPOSITORY_NAME_REQUIRED),
    rating: requiredNumber(RATING_REQUIRED)
      .min(0, RATING_MINMAX)
      .max(100, RATING_MINMAX),
    text: string()
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
            placeholder="Repository owner name"
            name="ownerName"
          />
          <FormikTextInput
            placeholder="Repository name"
            name="repositoryName"
          />
          <FormikTextInput
            placeholder="Rating between 0 and 100"
            name="rating"
          />
          <FormikTextInput
            placeholder="Review"
            name="text"
          />
          <TextButton onPress={handleSubmit}>
            Create a review
          </TextButton>
        </Paper>
      )}
    </Formik>
  );
};

export default ReviewForm;
