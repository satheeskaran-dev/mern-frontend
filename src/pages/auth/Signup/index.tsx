import { useNavigate } from "react-router-dom";
import Container from "../../../layouts/Auth/components/Container";
import { useSignupMutation } from "../../../service/authService";
import SignupForm from "./Form";
import { UrlSlugType } from "../../../utils/enums/UrlSlug.enum";

interface Props {}

const Signup: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [signup, { error = "", isSuccess, isLoading }] = useSignupMutation();

  !isLoading && isSuccess && navigate(UrlSlugType.LOGIN);
  return (
    <Container>
      <SignupForm handleFormSubmit={signup} errorMsg={error?.data?.message} />
    </Container>
  );
};

export default Signup;
