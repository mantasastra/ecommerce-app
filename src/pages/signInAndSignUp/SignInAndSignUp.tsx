import React from "react";
import styled from "@emotion/styled";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const SignInAndSignUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 2rem;

    .sign-up:nth-of-type(2) {
      margin-top: 7rem;
    }
  }
`;

const SignInAndSignUpPage = () => (
  <SignInAndSignUp>
    <SignIn />
    <SignUp />
  </SignInAndSignUp>
);

export default SignInAndSignUpPage;
