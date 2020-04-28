import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { ThemeProps } from "custom-types";

type CustomButtonProps = {
  type?: string;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
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

const CustomButton = ({ children, ...otherProps }: CustomButtonProps) => (
  <Button {...otherProps}>{children}</Button>
);

export default CustomButton;
