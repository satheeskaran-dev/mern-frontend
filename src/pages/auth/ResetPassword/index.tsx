import Container from "../../../layouts/Auth/components/Container";
import ResetPasswordForm from "./Form";

interface Props {}

const ResetPassword: React.FC<Props> = (props) => {
  return (
    <Container>
      <ResetPasswordForm />
    </Container>
  );
};

export default ResetPassword;
