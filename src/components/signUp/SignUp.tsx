import React, { Component } from "react";
import styled from "@emotion/styled";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

export type SignUpProps = any;

export type SignUpState = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

class SignUp extends Component<SignUpProps, SignUpState> {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as SignUpState;

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      alert(err);
    }
  };

  handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<SignUpState, keyof SignUpState>);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer className="sign-up">
        <Title>I do not have an account</Title>
        <span>Sign up with your email or password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit" isGoogleSignIn={false} inverted={false}>
            Sign Up
          </CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
