import { Typography, Divider } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import TextField from "../../../../components/mui/TextField";
import BackendError from "../../../../components/core/BackendError";
import SsoAuthButton from "../../../../components/core/SsoButton";
import CustomLink from "../../../../components/core/CustomLink";
import { useNavigate } from "react-router-dom";
import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";
import { FormikHelpers, useFormik } from "formik";
import { InitialValues, initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";

interface Props {
  errorMsg: string | null;
  handleFormSubmit: (
    values: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => void;
}

const SignupForm: React.FC<Props> = ({ handleFormSubmit, errorMsg }) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <Typography mb={30} fontSize="26px" fontWeight="600" align="center">
        Sign Up
      </Typography>
      <TextField
        label="First name"
        placeholder="First name"
        name="firstName"
        disabled={isSubmitting}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <TextField
        label="Last name"
        placeholder="Last name"
        name="lastName"
        disabled={isSubmitting}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />

      <TextField
        label="Email"
        placeholder="Email"
        name="email"
        disabled={isSubmitting}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      <BackendError errorMsg={errorMsg} />
      <LoadingButton
        fullWidth
        variant="contained"
        type="submit"
        loading={isSubmitting}
      >
        Create Account
      </LoadingButton>
      <Divider orientation="horizontal" sx={{ my: 22 }}>
        <Typography mx="10px" fontSize="12px" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <SsoAuthButton btnText="Sign up with Google" />

      <CustomLink
        desc="Already have an account?"
        navigatePage="Login"
        handleClick={() => navigate(UrlSlugType.LOGIN)}
      />
    </form>
  );
};

export default SignupForm;
