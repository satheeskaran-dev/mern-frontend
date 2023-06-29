import React from "react";
import Container from "../../../layouts/Auth/components/Container";
import ForgotPasswordForm from "./Form";

interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
  return (
    <Container>
      <ForgotPasswordForm />
    </Container>
  );
};

export default ForgotPassword;
