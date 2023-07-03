import styled from "styled-components";
import AuthForm from "./AuthForm";

const Auth = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Auth;

const action = async ({ params }) => {
  const searchParams = "test";

  return null;
};
