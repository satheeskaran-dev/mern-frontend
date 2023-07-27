import { useCallback, useEffect, useState } from "react";
import useImageCropper from "../../../hooks/useImageCropper";
import Container from "../../../layouts/Auth/components/Container";
import ActivateForm from "./Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useAccountActivateMutation } from "../../../service/authService";
import { UrlSlugType } from "../../../utils/enums/UrlSlug.enum";
import AuthSuccess from "../../../layouts/Auth/components/Success";
import { ActivateInitialValues } from "./type";

interface Props {}

const Activate: React.FC<Props> = (props) => {
  const { ImageCropper, file, myImageURL, handleChange } = useImageCropper();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const navigate = useNavigate();

  const [accountActivate, { error, isLoading, isSuccess }] = useAccountActivateMutation();

  useEffect(() => {
    const jsonData = searchParams.get("user") as any;
    if (jsonData) {
      const user = JSON.parse(decodeURIComponent(jsonData));
      !user?.activateToken && navigate(UrlSlugType.LOGIN);
      setUser(user);
    }
  }, [navigate, searchParams]);

  const handleNext = useCallback(() => setCurrentStep((prevStep) => (prevStep < 1 ? prevStep + 1 : prevStep)), []);
  const handleBack = useCallback(() => setCurrentStep((prevStep) => prevStep - 1), []);

  const handleActivateFromSubmit = useCallback(
    async ({ firstName, lastName, password }: ActivateInitialValues, { setSubmitting }: FormikHelpers<ActivateInitialValues>) => {
      if (currentStep !== 1) {
        setSubmitting(false);
        handleNext();
        return;
      }
      try {
        const formData = new FormData();

        formData.append("password", password);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("token", user?.activateToken);

        if (file) formData.append("image", file as File);

        await accountActivate(formData);
      } catch (err) {
        console.log(err);
      }
    },
    [accountActivate, user?.activateToken, file, handleNext, currentStep]
  );
  return (
    <Container sx={{ minHeight: 576 }}>
      {!isLoading && isSuccess ? (
        <AuthSuccess title="Account activation successfully !" handleButtonClick={() => navigate(UrlSlugType.LOGIN)} />
      ) : (
        <ActivateForm
          currentStep={currentStep}
          user={user}
          avatarUploaderProps={{
            src: myImageURL || user?.image,
            handleChange,
          }}
          handleFormSubmit={handleActivateFromSubmit}
          handleBack={handleBack}
          errorMsg={error?.data?.message}
        />
      )}

      <ImageCropper />
    </Container>
  );
};

export default Activate;
