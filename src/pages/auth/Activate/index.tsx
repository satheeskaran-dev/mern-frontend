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
  const { ImageCropper, file, myImageURL, handleChange } = useImageCropper();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") as string;
  const navigate = useNavigate();

  const [accountActivate, { error, isLoading, isSuccess }] =
    useAccountActivateMutation();

  if (!token) navigate(UrlSlugType.LOGIN);

  const handleActivateFromSubmit = useCallback(
    async (
      { password }: InitialValues,
      helpers: FormikHelpers<InitialValues>
    ) => {
      try {
        const formData = new FormData();

        formData.append("password", password);
        formData.append("token", token);
        formData.append("image", file as File);

        await accountActivate(formData);
      } catch (err) {
        console.log(err);
      }
    },
    [accountActivate, token, file]
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
          avatarUploaderProps={{ src: myImageURL, handleChange }}
          handleFormSubmit={handleActivateFromSubmit}
          errorMsg={error?.data?.message}
        />
      )}

      <ImageCropper />
    </Container>
  );
};

export default Activate;
