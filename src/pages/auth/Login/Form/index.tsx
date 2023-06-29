import { Typography, Stack, useTheme, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import TextField from "../../../../components/mui/TextField";
import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";
import BackendError from "../../../../components/core/BackendError";
import SsoAuthButton from "../../../../components/core/SsoButton";
import CheckBox from "../../../../components/mui/CheckBox";
import CustomLink from "../../../../components/core/CustomLink";
import { FormikHelpers, useFormik } from "formik";
import initialValues, { InitialValues } from "./initialValues";
import validationSchema from "./validationSchema";

interface LoginFormProps {
  errorMsg: string | null;
  handleFormSubmit: (
    values: InitialValues,
    helpers: FormikHelpers<InitialValues>
  ) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  handleFormSubmit,
  errorMsg,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
      <Typography mb={30} fontSize="26px" fontWeight="600" align="center">
        Login Account
      </Typography>
      <TextField
        label="Email"
        placeholder="Email"
        disabled={isSubmitting}
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        label="Password"
        placeholder="Password"
        name="password"
        disabled={isSubmitting}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />

      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <CheckBox name="savePassword" label="Save Password" />
        <Link
          to={UrlSlugType.FORGOT_PASSWORD}
          style={{
            fontSize: "12px",
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
        >
          Forgot Password?
        </Link>
      </Stack>
      <BackendError errorMsg={errorMsg} />
      <LoadingButton
        fullWidth
        variant="contained"
        type="submit"
        loading={isSubmitting}
      >
        Login to Account
      </LoadingButton>
      <Divider orientation="horizontal" sx={{ my: 22 }}>
        <Typography mx="10px" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <SsoAuthButton />

      <CustomLink
        desc="Don’t have an account?"
        navigatePage="Sign Up"
        handleClick={() => navigate(UrlSlugType.SIGN_UP)}
      />
    </form>
  );
};

export default LoginForm;
