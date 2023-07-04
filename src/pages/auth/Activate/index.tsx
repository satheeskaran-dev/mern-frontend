import { useCallback } from "react";
import useImageCropper from "../../../hooks/useImageCropper";
import Container from "../../../layouts/Auth/components/Container";
import ActivateForm from "./Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InitialValues } from "./Form/initialValues";
import { FormikHelpers } from "formik";
import { useAccountActivateMutation } from "../../../service/authService";
import { UrlSlugType } from "../../../utils/enums/UrlSlug.enum";
import AuthSuccess from "../../../layouts/Auth/components/Success";

interface Props {}

const Activate: React.FC<Props> = (props) => {
  const { ImageCropper, imageURL, handleChange } = useImageCropper();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [accountActivate, { error, isLoading, isSuccess }] =
    useAccountActivateMutation();

  if (!token) navigate(UrlSlugType.LOGIN);

  const handleActivateFromSubmit = useCallback(
    async (val: InitialValues, helpers: FormikHelpers<InitialValues>) => {
      try {
        await accountActivate({ password: val.password, token });
      } catch (err) {
        console.log(err);
      }
    },
    [accountActivate, token]
  );
  return (
    <Container>
      {!isLoading && isSuccess ? (
        <AuthSuccess
          title="Account activation successfully !"
          handleButtonClick={() => navigate(UrlSlugType.LOGIN)}
        />
      ) : (
        <ActivateForm
          avatarUploaderProps={{ src: imageURL, handleChange }}
          handleFormSubmit={handleActivateFromSubmit}
          errorMsg={error?.data?.message}
        />
      )}

      <ImageCropper />
    </Container>
  );
};

export default Activate;
