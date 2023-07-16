import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../store/AuthContext";
import { Navigate } from "react-router-dom";
import errorMessages from "./errors";

const AuthForm = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
  } = useForm();

  const { createUser, login, user, serverErrors } = context;
  const [searchParams] = useSearchParams();

  let isLogin = searchParams.get("mode");

  if (!isLogin) {
    isLogin = "login";
  } else {
    isLogin = isLogin === "login";
  }

  useEffect(() => {
    context.cleanServerErrors();
    reset();
  }, [isLogin]);

  const watchPassword = watch("password");

  const submiteHandler = async (data) => {
    const { email, password } = data;
    try {
      if (!isLogin) {
        await createUser(email, password);
        navigate("/");
      } else {
        const response = await login(email, password);
        navigate("/");
      }
    } catch (e) {}
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit((data) => {
          submiteHandler(data);
        })}
      >
        <FormContainer>
          <div>
            <Heading>{isLogin ? "Login" : "Signup"}</Heading>
          </div>
          <ServerError>
            {serverErrors ? [errorMessages[serverErrors.code]] : null}
          </ServerError>
          {!isLogin ? (
            <InputContainer>
              <label htmlFor="name"></label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                {...register("name", {
                  required: "Name required.",
                })}
              />
              <Error>{errors.name?.message}</Error>
            </InputContainer>
          ) : null}
          <InputContainer>
            <InputContainer>
              <label aria-label="email input" htmlFor="email">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email required.",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <Error>{errors.email?.message}</Error>
              </label>
            </InputContainer>
            <label htmlFor="password"></label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              {...register("password", {
                required: "Password required.",
                minLength: {
                  value: 5,
                  message: "Your password must be at least 6 characters.",
                },
              })}
            />
            <Error>{errors.password?.message}</Error>
          </InputContainer>
          {!isLogin ? (
            <InputContainer>
              <label htmlFor="confirmPassword"></label>
              <input
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) => {
                    if (watchPassword !== val) {
                      return "Your passwords do not match.";
                    }
                  },
                })}
              />
              <Error>{errors.confirmPassword?.message}</Error>
            </InputContainer>
          ) : null}
          <div>
            <SubmitButton>
              {isLogin ? "Login to your account" : "Create an account"}
            </SubmitButton>
          </div>
          <Footer>
            <Text>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <ChangeActionButton>
              <Link
                to={`${isLogin ? "/auth?mode=signup" : "/auth?mode=login"}`}
              >
                {isLogin ? "SignUp" : "Login"}
              </Link>
            </ChangeActionButton>
          </Footer>
          <ExampleAccount>
            Example account: example@example.com / 123456
          </ExampleAccount>
        </FormContainer>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--semi-dark-blue);
  width: min(400px, 100% - 2.4rem);
  border-radius: 1rem;
`;

const ServerError = styled.p`
  font-size: 15px;
  color: var(--light-red);
`;

const ExampleAccount = styled.div`
  font-size: 1.4rem;
  color: gray;
  font-weight: 300;
`;
const FormContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2.4rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Error = styled.p`
  font-size: 15px;
  margin-block: 5px;
  color: var(--light-red);
`;

const Heading = styled.h2`
  font-size: 3.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  input {
    color: inherit;
    width: 100%;
    padding: 1.5rem;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--grayish-blue);
    outline: none;
    font-size: 15px;
    font-weight: 300;
  }
  input::placeholder {
    color: var(--pure-white);
    opacity: 0.5;
    font-weight: 300;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding-block: 1.4rem;
  color: inherit;
  border-radius: 6px;
  background: var(--light-red);
  font-size: 1.5rem;
  border: 0;
  margin-top: 4rem;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const Text = styled.p``;

const ChangeActionButton = styled.button`
  font-size: inherit;
  border: 0;
  background: 0;
  color: var(--light-red);
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;

export default AuthForm;
