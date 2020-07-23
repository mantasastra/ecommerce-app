import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProps } from "custom-types";

import CustomButton from "../customButton/CustomButton";

const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.mainColor};
  background-color: ${({ theme }: ThemeProps) => theme.colors.backgroundColor};
  top: 80px;
  right: 0;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Cart = () => (
  <CartDropdown>
    <CartItems />
    <CustomButton css={{ marginTop: "auto" }}>GO TO CHECKOUT</CustomButton>
  </CartDropdown>
);

export default Cart;
