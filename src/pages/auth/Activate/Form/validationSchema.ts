import { object, string, ref } from "yup";
import { REGEX } from "../../../../utils/regex";

const firstStepSchema = object().shape({
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
});
const secondStepSchema = object().shape({
  password: string().required("required !").matches(REGEX.PASSWORD_FIELD.EXPRESSION, REGEX.PASSWORD_FIELD.MSG),
  re_password: string()
    .required("required !")
    .oneOf([ref("password")], "Password must match !"),
});

const validationSchema = [firstStepSchema, secondStepSchema];

export default validationSchema;
