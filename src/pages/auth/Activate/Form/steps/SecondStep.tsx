import { Fragment } from "react";
import TextField from "../../../../../components/mui/TextField";
import { FormikProps } from "formik";
import { ActivateInitialValues } from "../../type";

const SecondStep: React.FC<FormikProps<ActivateInitialValues>> = ({ values, touched, errors, isSubmitting, handleBlur, handleChange }) => {
  return (
    <Fragment>
      <TextField
        password
        placeholder="Password"
        label="Password"
        name="password"
        disabled={isSubmitting}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        password
        label="Retype password"
        placeholder="Retype Password"
        name="re_password"
        disabled={isSubmitting}
        value={values.re_password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.re_password && Boolean(errors.re_password)}
        helperText={touched.re_password && errors.re_password}
      />
    </Fragment>
  );
};

export default SecondStep;
