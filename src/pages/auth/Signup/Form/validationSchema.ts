import { object, string } from "yup";
import { REGEX } from "../../../../utils/regex";

export const validationSchema = object().shape({
  firstName: string()
    .required("required !")
    .min(3, "Minimum 3 characters !")
    .max(32, "Minimum 32 characters !")
    .matches(REGEX.INPUT_FIELD.EXPRESSION, REGEX.INPUT_FIELD.MSG),
  lastName: string()
    .required("required !")
    .min(3, "Minimum 3 characters !")
    .max(32, "Minimum 32 characters !")
    .matches(REGEX.INPUT_FIELD.EXPRESSION, REGEX.INPUT_FIELD.MSG),
  email: string().required("required !").email("Invalid email !"),
});
