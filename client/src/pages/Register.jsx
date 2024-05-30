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
const LoginText = styled.p`
  margin-top: 16px;
`;
const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  return (
    <Container>
      <PageTitle>Craete a new account</PageTitle>
      <Form action="" method="post">
        <FormInput type="text" placeholder="Username" required autoFocus />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <FormInput type="password" placeholder="Confirm Password" required />
        <BtnSubmit>Craete account</BtnSubmit>
      </Form>
      <LoginText>
        Already have an account? <LoginLink to="/login">Login</LoginLink>
      </LoginText>
    </Container>
  );
};

export default Register;
