import { useCallback } from "react";
import useImageCropper from "../../../hooks/useImageCropper";
import Container from "../../../layouts/Auth/components/Container";
import ActivateForm from "./Form";
import { useSearchParams } from "react-router-dom";
import { InitialValues } from "./Form/initialValues";
import { FormikHelpers } from "formik";
import { useAccountActivateMutation } from "../../../service/authService";

interface Props {}

const Activate: React.FC<Props> = (props) => {
  const { ImageCropper, imageURL, handleChange } = useImageCropper();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [accountActivate, { error }] = useAccountActivateMutation();

  console.log(token);

  const handleActivateFromSubmit = useCallback(
    async (val: InitialValues, helpers: FormikHelpers<InitialValues>) => {
      try {
        await accountActivate({ password: val.password, token });
      } catch (err) {
        console.log("error from active page =>", err);
      }
    },
    [accountActivate, token]
  );
  return (
    <Container>
      <ActivateForm
        avatarUploaderProps={{ src: imageURL, handleChange }}
        handleFormSubmit={handleActivateFromSubmit}
        errorMsg={error?.data?.message}
      />
      <ImageCropper />
    </Container>
  );
};

export default Activate;
