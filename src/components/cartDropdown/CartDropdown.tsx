import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState, ShopItem, ThemeProps } from "custom-types";

import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";

const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
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

const mapStateToProps = ({ cart }: RootState) => ({
  cartItems: cart.cartItems,
});

const connector = connect(mapStateToProps, null);

type CartProps = ConnectedProps<typeof connector>;

const Cart: React.FC<CartProps> = ({
  cartItems,
}: {
  cartItems: ShopItem[];
}) => (
  <CartDropdown>
    <CartItems>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartItems>
    <CustomButton
      css={{ marginTop: "auto" }}
      isGoogleSignIn={false}
      inverted={false}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdown>
);

export default connector(Cart);
