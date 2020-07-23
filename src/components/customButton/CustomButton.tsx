import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ThemeProps } from "custom-types";

type CustomButtonProps = {
  type?: string;
  children: string;
  isGoogleSignIn: boolean;
  inverted: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const dynamicStyles = ({
  isGoogleSignIn,
  inverted,
}: {
  isGoogleSignIn: boolean;
  inverted: boolean;
}) => css`
  ${isGoogleSignIn
    ? `
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }`
    : ""}

  ${inverted
    ? `
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    
    &:hover {
      background-color: #000000;
      color: #ffffff;
      border: none;
    }`
    : ""}
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  background-color: ${(props: ThemeProps) => props.theme.colors.buttonColor};
  color: ${(props: ThemeProps) => props.theme.colors.buttonTextColor};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props: ThemeProps) =>
      props.theme.colors.buttonBackgroundColor};
    color: ${(props: ThemeProps) => props.theme.colors.buttonHoverTextColor};
    border: 1px solid
      ${(props: ThemeProps) => props.theme.colors.buttonHoverTextColor};
  }
`;

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CustomButtonProps) => (
  <Button css={dynamicStyles({ isGoogleSignIn, inverted })} {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
