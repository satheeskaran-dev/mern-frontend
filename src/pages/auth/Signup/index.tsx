import { useNavigate } from "react-router-dom";
import Container from "../../../layouts/Auth/components/Container";
import { useSignupMutation } from "../../../service/authService";
import SignupForm from "./Form";
import { UrlSlugType } from "../../../utils/enums/UrlSlug.enum";
import AuthSuccess from "../../../layouts/Auth/components/Success";

interface Props {}

const Signup: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [signup, { error = "", isSuccess, isLoading }] = useSignupMutation();

  return (
    <Container>
      {!isLoading && isSuccess ? (
        <AuthSuccess
          title="Activation link successfully sent !"
          description="Please check your email and follow the steps to activate your account ."
          buttonText="Okay"
          handleButtonClick={() => navigate(UrlSlugType.LOGIN)}
        />
      ) : (
        <SignupForm handleFormSubmit={signup} errorMsg={error?.data?.message} />
      )}
    </Container>
  );
};

export default Signup;
