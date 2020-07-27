import React from "react";
import styled from "@emotion/styled";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { RootState, ShopItem } from "custom-types";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/selectors/selectors";
import theme from "../../Theme/theme";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";

const CheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.darkGrey};
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

interface CheckoutSelectors {
  cartItems: ShopItem[];
  total: number;
}

const mapStateToProps = createStructuredSelector<RootState, CheckoutSelectors>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const connector = connect(mapStateToProps);

type CheckoutProps = ConnectedProps<typeof connector>;

const Checkout: React.FC<CheckoutProps> = ({ cartItems, total }) => (
  <CheckoutPage>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id as number} cartItem={item} />
    ))}

    <Total>
      <span>TOTAL: {total}&euro;</span>
    </Total>
  </CheckoutPage>
);

export default connector(Checkout);
