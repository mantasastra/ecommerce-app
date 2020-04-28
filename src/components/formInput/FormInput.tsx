import React from "react";
import styled from "@emotion/styled";
import { ThemeProps } from "custom-types";

type FormProps = {
  name: string;
  label: string;
  type: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: ${(props: ThemeProps) => props.theme.colors.mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colors.subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color: ${(props: ThemeProps) => props.theme.colors.mainColor};
  }
`;

const Label = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: ${(props: ThemeProps) => props.theme.colors.mainColor};
  }
`;

const FormInput = ({ handleChange, label, ...otherProps }: FormProps) => {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label ? (
        <Label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </Label>
      ) : null}
    </Group>
  );
};
export default FormInput;
