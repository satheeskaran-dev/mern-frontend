import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TextField from "../../../../../components/mui/TextField";
import { FormikHelpers, FormikProps } from "formik";
import { ActivateInitialValues } from "../../type";
import AvatarUploader, { AvatarUploaderPropType } from "../../../../../components/core/AvatarUploader";
import { Box } from "@mui/material";

type FirstStepProps = {
  avatarUploaderProps: AvatarUploaderPropType;
};

const FirstStep: React.FC<FirstStepProps & FormikProps<ActivateInitialValues>> = ({
  avatarUploaderProps,
  values,
  touched,
  errors,
  isSubmitting,
  handleBlur,
  handleChange,
}) => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" mb={20}>
        <AvatarUploader {...avatarUploaderProps} />
      </Box>
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

      <TextField label="Email" placeholder="Email" name="email" disabled value={values.email} />
    </Fragment>
  );
};

export default FirstStep;
