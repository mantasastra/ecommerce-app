import React, { Component } from "react";
import styled from "@emotion/styled";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export type SignInProps = any;

export type SignInState = {
  email: string;
  password: string;
};

const SignInContainer = styled.div`
  width: 395px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

class SignIn extends Component<SignInProps, SignInState> {
  state = {
    email: "",
    password: "",
  } as SignInState;

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      alert(err);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
  };

  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <Buttons>
            <CustomButton type="submit" isGoogleSignIn={false} inverted={false}>
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
              inverted={false}
            >
              Sign In with Google
            </CustomButton>
          </Buttons>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
