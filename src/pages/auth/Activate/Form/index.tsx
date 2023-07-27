import { Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import BackendError from "../../../../components/core/BackendError";
import { FormikHelpers, useFormik } from "formik";
import validationSchema from "./validationSchema";
import FirstStep from "./steps/FirstStep";
import { ActivateInitialValues } from "../type";
import SecondStep from "./steps/SecondStep";
import FlexBox from "../../../../components/core/FlexBox";
import { AvatarUploaderPropType } from "../../../../components/core/AvatarUploader";
import { Form } from "../styles";

interface Props {
  currentStep: number;
  user: any;
  errorMsg: string;
  handleFormSubmit: (val: ActivateInitialValues, helpers: FormikHelpers<ActivateInitialValues>) => void;
  avatarUploaderProps: AvatarUploaderPropType;
  handleBack: () => void;
}

const ActivateForm: React.FC<Props> = ({ currentStep, user, errorMsg, avatarUploaderProps, handleFormSubmit, handleBack }) => {
  console.log("values =>", user);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      avatar: "",
      password: "",
      re_password: "",
    } as ActivateInitialValues,
    validationSchema: validationSchema[currentStep],
    onSubmit: handleFormSubmit,
    enableReinitialize: true,
  });

  const renderForm = [<FirstStep {...formik} avatarUploaderProps={avatarUploaderProps} />, <SecondStep {...formik} />];
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Typography mb={18} fontSize="26px" fontWeight="600" align="center">
        Activate your account
      </Typography>

      {renderForm[currentStep]}
      <BackendError errorMsg={errorMsg} />
      <Box flexGrow={1} />
      <FlexBox justifyContent={currentStep === 0 ? "flex-end" : "space-between"} mt={20}>
        {currentStep !== 0 && (
          <LoadingButton sx={{ width: "40%" }} variant="outlined" onClick={handleBack}>
            Back
          </LoadingButton>
        )}
        <LoadingButton sx={{ width: "40%" }} variant="contained" type="submit" loading={formik.isSubmitting}>
          {currentStep === 0 ? "Next" : "Activate"}
        </LoadingButton>
      </FlexBox>
    </Form>
  );
};

export default ActivateForm;
