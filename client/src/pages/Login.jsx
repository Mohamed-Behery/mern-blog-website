import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  min-height: calc(100vh - 195px);
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 8px;
`;
const PageTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    & {
      padding: 8px;
    }
  }
`;
const FormInput = styled.input`
  background: ${({ theme }) => theme.neutral};
  color: ${({ theme }) => theme.text};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  border-radius: 24px;

  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  @media screen and (max-width: 767px) {
    & {
      font-size: 14px;
    }
  }
`;
const RememberLabel = styled.label`
  margin-left: 8px;
`;
const ForgotPass = styled(Link)`
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`;
const BtnSubmit = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.neutral};
  border: none;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const RegisterText = styled.p`
  margin-top: 16px;
`;
const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container>
      <PageTitle>Login to your account</PageTitle>
      <Form action="" method="post">
        <FormInput type="email" placeholder="Email" required autoFocus />
        <FormInput type="password" placeholder="Password" required />
        <Row>
          <Row>
            <FormInput type="checkbox" id="rememberMe" />
            <RememberLabel for="rememberMe">Remeber Me</RememberLabel>
          </Row>
          <ForgotPass to="/forgot">Forgot password?</ForgotPass>
        </Row>
        <BtnSubmit>Login</BtnSubmit>
      </Form>
      <RegisterText>
        Don't have an account? <RegisterLink to="/register">Register</RegisterLink>
      </RegisterText>
    </Container>
  );
};

export default Login;
