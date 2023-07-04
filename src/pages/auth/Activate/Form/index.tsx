import { Typography, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextField from "../../../../components/mui/TextField";
import BackendError from "../../../../components/core/BackendError";
import AvatarUploader, {
  AvatarUploaderPropType,
} from "../../../../components/core/AvatarUploader";
import { FormikHelpers, useFormik } from "formik";
import { InitialValues, initialValues } from "./initialValues";
import validationSchema from "./validationSchema";

interface Props {
  errorMsg: string;
  handleFormSubmit: (
    val: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => void;
  avatarUploaderProps?: AvatarUploaderPropType;
}

const ActivateForm: React.FC<Props> = ({
  errorMsg,
  avatarUploaderProps,
  handleFormSubmit,
}) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Typography mb={18} fontSize="26px" fontWeight="600" align="center">
        Activate your account
      </Typography>
      <Box display="flex" justifyContent="center" mb={20}>
        <AvatarUploader {...avatarUploaderProps} />
      </Box>

      <TextField
        placeholder="Password"
        name="password"
        disabled={isSubmitting}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        placeholder="Retype Password"
        name="re_password"
        disabled={isSubmitting}
        value={values.re_password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.re_password && Boolean(errors.re_password)}
        helperText={touched.re_password && errors.re_password}
      />
      <BackendError errorMsg={errorMsg} />
      <LoadingButton fullWidth variant="contained" type="submit">
        Activate account
      </LoadingButton>
    </form>
  );
};

export default ActivateForm;
