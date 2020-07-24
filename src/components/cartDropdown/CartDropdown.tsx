import React from "react";
import styled from "@emotion/styled";
import { withRouter, RouteComponentProps } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState, ShopItem, ThemeProps } from "custom-types";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../store/selectors/selectors";
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

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

interface CartDropdownSelectors {
  cartItems: ShopItem[];
}

const mapStateToProps = createStructuredSelector<
  RootState,
  CartDropdownSelectors
>({
  cartItems: selectCartItems,
});

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector> & RouteComponentProps;

const Cart: React.FC<CartProps> = ({ cartItems, history }) => (
  <CartDropdown>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      css={{ marginTop: "auto" }}
      isGoogleSignIn={false}
      inverted={false}
      onClick={() => history.push("/checkout")}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdown>
);

export default withRouter(connector(Cart));
