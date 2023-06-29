import { object, string, ref } from "yup";
import { REGEX } from "../../../../utils/regex";

const validationSchema = object().shape({
  password: string()
    .required("required !")
    .matches(REGEX.PASSWORD_FIELD.EXPRESSION, REGEX.PASSWORD_FIELD.MSG),
  re_password: string()
    .required("required !")
    .oneOf([ref("password")], "Password must match !"),
});

export default validationSchema;
