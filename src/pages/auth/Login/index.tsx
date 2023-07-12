import { useEffect } from "react";
import Container from "../../../layouts/Auth/components/Container";
import {
  useLoginMutation,
  authServiceApiUtil,
} from "../../../service/authService";
import LoginForm from "./Form";
import { useDispatch } from "react-redux";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [login, { error = "", reset }] = useLoginMutation({
    fixedCacheKey: "auth-data",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authServiceApiUtil.resetApiState());
  }, [dispatch]);
  return (
    <Container>
      <LoginForm handleFormSubmit={login} errorMsg={error?.data?.message} />
    </Container>
  );
};

export default Login;
