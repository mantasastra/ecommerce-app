import React, { Component } from "react";
import styled from "@emotion/styled";
import { SignInProps, SignInState } from "custom-types";
import FormInput from "../formInput/FormInput";

const SignInContainer = styled.div`
  width: 30vw;
`;

class SignIn extends Component<SignInProps, SignInState> {
  state = {
    email: "",
    password: "",
  } as SignInState;

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    this.setState({ [name]: value } as Pick<SignInState, keyof SignInState>);
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
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

          <input type="submit" value="Submit Form" />
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
