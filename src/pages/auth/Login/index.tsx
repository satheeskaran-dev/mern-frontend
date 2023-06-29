import Container from "../../../layouts/Auth/components/Container";
import { useLoginMutation } from "../../../service/authService";
import LoginForm from "./Form";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [login, { error = "" }] = useLoginMutation({
    fixedCacheKey: "auth-data",
  });

  return (
    <Container>
      <LoginForm handleFormSubmit={login} errorMsg={error?.data?.message} />
    </Container>
  );
};

export default Login;
