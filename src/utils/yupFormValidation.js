import * as yup from "yup";

export const requiredString = (errorMessage) => {
  return yup
    .string()
    // .typeError("Must be a string")
    .required(errorMessage);
};

export const requiredNumber = (errorMessage) => {
  return yup
    .number()
    .typeError("Must be a number")
    .required(errorMessage);
};

const yupFormValidation = (validationObject) => {
  return yup.object().shape(validationObject);
};

export default yupFormValidation;