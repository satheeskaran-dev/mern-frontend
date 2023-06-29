import { object, string } from "yup";

const validationSchema = object().shape({
  email: string().required("required !").email("Invalid email !"),
  password: string().required("required !"),
});

export default validationSchema;
